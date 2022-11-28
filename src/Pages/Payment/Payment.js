import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Page } from "../../Components/Page";
import CheckoutForm from "./CheckoutForm ";

const Payment = () => {
  const data = useLoaderData();

  const stripePromise = loadStripe(
    "pk_test_51M8qENL39Ynj9W9L8ILPCX8M69CDKR3nw6IXJboN54f9vvbsj698GRt2Yrf07dRhNBDPgd623vixj8iwNVLbHQih00AXkzzyZD"
  );

  return (
    <Page title={"Payment"}>
      <div className="w-full  p-12">
        <div className="bg-white">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </Page>
  );
};

export default Payment;
