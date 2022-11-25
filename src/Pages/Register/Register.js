/* eslint-disable no-unused-vars */
import axios from "axios";
import Lottie from "lottie-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Page } from "../../Components/Page";
import { notify } from "../../Components/Utility/notify";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Axios } from "../../services/axiosInstance";

import regnAnimation from "./Reg.json";

const Register = () => {
  const [_, setItem] = useLocalStorage();
  const { setUser, createUser, updateProfileInfo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/";
  const [selectedFile, setSelectedFile] = React.useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const displayName = form.name.value;
    const info = { displayName: displayName };

    try {
      const response = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        data: formData,
      });
      console.log(response);
      if (response) {
        createUser(email, password)
          .then(async (newUser) => {
            updateProfileInfo(info);
            const dbInfo = {
              user: displayName,
              email: email,
              role,
              proPic: response?.data?.data?.url,
            };

            Axios.post("/api/add-user", dbInfo).then((result) => {
              setItem("token", result.data.token);
              setUser({
                ...newUser.user,
                displayName: displayName,
              });

              navigate(nextUrl);
              notify("Register Successfully !!");
            });
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Page title="Register">
      <div>
        <div className="bg-blue-50">
          <div className="flex flex-col p-12 justify-center items-center lg:flex-row  lg:w-10/12 mx-auto lg:py-20 lg:gap-12">
            <div className="lg:w-1/2 hidden lg:block">
              <Lottie animationData={regnAnimation} />
            </div>
            <div className="w-full lg:w-1/2 max-w-md p-8 space-y-3 bg-white rounded-xl shadow-xl       ">
              <h1 className="text-2xl font-bold text-center">Sign Up </h1>
              <form
                onSubmit={submitHandler}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
              >
                <div className="space-y-1 text-sm">
                  <label htmlFor="Name" className="block   ">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="Name"
                    placeholder="Name"
                    className="w-full px-4  py-3 rounded-md bg-gray-100            focus:dark:border-violet-400"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="email" className="block   ">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4  py-3 rounded-md bg-gray-100            focus:dark:border-violet-400"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block   ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md bg-gray-100            focus:dark:border-violet-400"
                    required
                  />
                </div>
                <input type="file" onChange={handleFileSelect} />
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block   ">
                    Are You Seller ?
                  </label>
                  <div className="flex items-center">
                    <input type="radio" name="role" id="role1" value="seller" />
                    <label className="ml-2" htmlFor="role1">
                      <b> Yes</b>
                    </label>

                    <input
                      type="radio"
                      name="role"
                      id="role2"
                      value="buyers"
                      className="ml-2"
                      defaultChecked
                    />
                    <label className="ml-2" htmlFor="role2">
                      <b> No</b>
                    </label>
                  </div>
                </div>
                <button className="block w-full p-3 text-center   bg-blue-500 rounded-md text-white   dark:bg-violet-400">
                  Sign Up
                </button>
              </form>

              <p className="text-lg text-center sm:px-6   ">
                Already have an account?{" "}
                <Link to="/login" className=" font-bold   ">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Register;
