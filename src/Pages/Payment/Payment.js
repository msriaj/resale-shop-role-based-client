import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm ";

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  const stripePromise = loadStripe(
    "pk_test_51M8qENL39Ynj9W9L8ILPCX8M69CDKR3nw6IXJboN54f9vvbsj698GRt2Yrf07dRhNBDPgd623vixj8iwNVLbHQih00AXkzzyZD"
  );

  return (
    <div className="w-full flex justify-center items-center">
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
