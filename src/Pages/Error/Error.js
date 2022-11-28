import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Page } from "../../Components/Page";
import img from "./404.png";
const Error = () => {
  const { statusText, status } = useRouteError();

  return (
    <Page title="404 Error Page">
      <div className="flex justify-center items-center w-full md:w-9/12 md:mx-auto h-screen ">
        <div>
          <img src={img} alt="404" />
        </div>
        <div className="text-center">
          <h1 className="text-6xl font-bold font-mono my-2">
            Something Went Wrong
          </h1>
          <p className="text-gray-600 text-2xl my-2">
            It's just a <span className="text-4xl text-red-600">{status}</span>{" "}
            {statusText}!{" "}
          </p>
          <p className="text-gray-600 text-2xl my-2"></p>
          <Link
            className="bg-yellow-500 md:mx-12 text-white  block my-3   px-5 py-2"
            to="/"
          >
            Back To Home.
          </Link>
        </div>
      </div>
    </Page>
  );
};

export default Error;
