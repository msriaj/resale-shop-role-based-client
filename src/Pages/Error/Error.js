import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Page } from "../../Components/Page";
import img from "./404.png";
const Error = () => {
  const { statusText, status } = useRouteError();

  return (
    <Page title="404 Error Page">
      <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-9/12 md:mx-auto h-screen ">
        <div>
          <img src={img} alt="404" className="h-48" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold font-mono my-2">
            Something Went Wrong
          </h1>

          <p className="text-gray-600 text-2xl my-2">
            It's just a <span className="text-2xl text-red-600">{status}</span>{" "}
            {statusText}!{" "}
          </p>
          <p className="text-gray-600 text-2xl my-2"></p>
          <Link
            className="bg-[#FF6801] md:mx-12 text-white  block my-3   px-5 py-2"
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
