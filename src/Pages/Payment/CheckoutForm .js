import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { notify } from "../../Components/Utility/notify";
import { Axios } from "../../services/axiosInstance";
import loaderImg from "./money.json";

const CheckoutForm = ({ data }) => {
  const { resalePrice, productId } = data;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);

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
    setProcessing(true);
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
      setProcessing(false);
      const result = await Axios.get(`/api/sold/${productId}`);
      console.log(result.data);
      notify("Congrats!!! Your Payment Completed");
      setSuccess("Congrats!!! Your Payment Completed");
      setTransaction(paymentIntent.id);
    }
  };

  if (processing) {
    return (
      <div className="p-12 bg-white flex justify-center items-center">
        <div>
          <div className="w-98">
            <Lottie animationData={loaderImg}></Lottie>
          </div>
          <h1 className="text-2xl text-green-600">
            Your Payment On Processing.....{" "}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!success && (
        <form className="bg-white p-3" onSubmit={handleSubmit}>
          <div className="p-3">
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
          </div>
          <button
            className="bg-sky-500 py-1 text-sm mt-5 m-2 text-white px-2 rounded-md disabled:bg-gray-500"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </form>
      )}

      {success && (
        <div className="p-12 bg-white">
          <div className="p-5 py-12 shadow border text-center flex flex-col items-center">
            <FaCheckCircle
              className="text-green-500 m-2 text-8xl"
              title="Seller Verified"
            />
            <p className="text-xl font-semibold text-green-500">{success}</p>
            <p className="text-gray-400 my-3">
              Your TransactionID:{" "}
              <input
                className="border p-2"
                type="text"
                value={transaction}
                disabled
              />
            </p>
            <Link to="/dashboard/my-orders ">
              <button className="text-white bg-green-600 p-2">
                Back To My Orders
              </button>
            </Link>
          </div>
        </div>
      )}
      <p>{cardError}</p>
    </div>
  );
};

export default CheckoutForm;
