import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ data }) => {
  const { resalePrice } = data;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");

  const [transaction, setTransaction] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(data);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_API_URI}/api/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: data.buyerEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Congrats! Your Payment Completed");
      setTransaction(paymentIntent.id);
    }
    console.log(paymentIntent);
  };

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            className="bg-blue-600 disabled:bg-gray-500"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      ) : (
        <div>
          <div>
            <p>{success}</p>
            <p>{transaction}</p>
          </div>
        </div>
      )}
      <p>{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
