/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Axios } from "../../services/axiosInstance";

const Register = () => {
  const [_, setItem] = useLocalStorage();
  const { setRole, setUser, createUser, updateProfileInfo } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const nextUrl = location?.state?.from.pathname || "/dashboard/overview";
  const [selectedFile, setSelectedFile] = useState(null);
  const [rLoading, setRLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setRLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    const displayName = form.name.value;
    const info = { displayName: displayName };

    try {
      const fetchData = await fetch(
        "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        {
          method: "POST",
          body: formData,
        }
      );

      const response = await fetchData.json();

      if (response) {
        createUser(email, password)
          .then(async (newUser) => {
            updateProfileInfo(info);
            const dbInfo = {
              user: displayName,
              email: email,
              role,
              proPic: response?.data?.url,
            };

            Axios.post("/api/add-user", dbInfo).then((result) => {
              setItem("token", result.data.token);
              setUser({
                ...newUser.user,
                displayName: displayName,
              });
              setRole(result.data.role);
              setRLoading(false);
              navigate(nextUrl);
              notify("Register Successfully !!");
            });
          })
          .catch((err) => {
            setRLoading(false);
            console.log(err);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  if (rLoading) {
    return <Loading />;
  }
  return (
    <Page title="Register">
      <div>
        <div className="bg-blue-50">
          <div className="flex flex-col p-12 justify-center items-center lg:flex-row  lg:w-10/12 mx-auto lg:py-20 lg:gap-12">
            <div className="w-full mx-auto lg:w-1/2 max-w-md p-8 space-y-3 bg-white shadow-xl       ">
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
                    className="w-full px-4  py-3 rounded-md bg-gray-100            focus:dark:border-[#FF6801]"
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
                    className="w-full px-4  py-3 rounded-md bg-gray-100            focus:dark:border-[#FF6801]"
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
                    className="w-full px-4 py-3 rounded-md bg-gray-100            focus:dark:border-[#FF6801]"
                    required
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="photo" className="block   ">
                    Photo
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md bg-gray-100            focus:dark:border-[#FF6801]"
                    type="file"
                    onChange={handleFileSelect}
                  />
                </div>
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
                <button className="block w-full p-3 text-center   bg-[#FF6801]   text-white   dark:bg-[#FF6801]">
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
