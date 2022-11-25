import axios from "axios";
import Lottie from "lottie-react";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Page } from "../../Components/Page";
import { notify } from "../../Components/Utility/notify";

import { serverUrl } from "../../Context/AuthContext";
import { useAuth } from "../../hooks/useAuth";

import loginAnimation from "./login.json";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/";

  const { signInEmail, googleSignIn } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInEmail(email, password)
      .then((user) => {
        navigate(nextUrl);
        notify("Login Successfully !!");
      })
      .catch((err) => {
        notify(err.code, "error");
      });
  };

  const googleSignHandler = () => {
    googleSignIn()
      .then((data) => {
        const dbInfo = {
          user: data.user.displayName,
          email: data.user.email,
          role: "buyers",
          proPic: data.user.photoURL,
        };
        console.log(data);
        console.log(dbInfo);
        axios.post(`${serverUrl}/api/google-user`, dbInfo).then((result) => {
          console.log(result);
          navigate(nextUrl);
          notify("Login Successfully !!");
        });
      })
      .catch((err) => notify(err.code, "error"));
  };

  return (
    <Page title="Login">
      <div className="flex md:py-16 items-center bg-blue-50">
        <div className="md:w-1/2 hidden md:block">
          <Lottie animationData={loginAnimation}> </Lottie>
        </div>
        <div className="w-full md:w-1/2 px-8 py-5 md:py-12 md:px-24">
          <div className="flex flex-col  p-6  rounded-md sm:p-10 text-gray-700 bg-white shadow-lg         ">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign in</h1>
              <p className="text-sm   ">Sign in to access your account</p>
            </div>
            <form
              onSubmit={submitHandler}
              className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="leroy@jenkins.com"
                    className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50     "
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="/"
                      className="text-xs hover:underline   "
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 py-2 border bg-sky-100 text-gray-800 outline-0 rounded-md hover:bg-gray-50           "
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white dark:bg-sky-400  "
                  >
                    Sign in
                  </button>
                </div>
                <p className="px-6 text-sm text-center  pb-5 ">
                  Don't have an account yet?
                  <Link
                    to="/reg"
                    className="hover:underline dark:text-sky-400 ml-2"
                  >
                    Sign up
                  </Link>
                  .
                </p>
                <button
                  onClick={googleSignHandler}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 font-bold rounded-md  bg-gray-50 md:w-4/6 mx-auto border text-green-600   "
                >
                  <FaGoogle /> Google Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login;
