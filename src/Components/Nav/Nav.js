import React from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { notify } from "../Utility/notify";

const Nav = () => {
  const { user, logOut } = useAuth();
  return (
    <header className="text-gray-600 body-font">
      <div className="md:w-10/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">NextPhone</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {user?.uid && (
            <Link to="/dashboard" className="mr-5 hover:text-gray-900">
              Dashboard
            </Link>
          )}
          <Link to="/blog" className="mr-5 hover:text-gray-900">
            Blogs
          </Link>
          <Link to="/advertise" className="mr-5 hover:text-gray-900">
            Advertise
          </Link>
        </nav>
        {user?.email ? (
          <div className="flex items-center">
            <p className="hidden md:block">
              Welcome , <b>{user?.displayName}</b>
            </p>
            <button
              onClick={() => {
                logOut();
                notify("Logout Successfully !!!", "error");
              }}
              className=" md:ml-5 rounded p-2 text-gray-400"
            >
              <FaSignOutAlt title="Logout" />
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">
              <button className="inline-flex items-center  bg-sky-600 text-white hover:text-gray-600 mr-2 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <FaUser className="text-xs mr-2" />
                Login
              </button>
            </Link>
            <Link to="/reg">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <FaUser className="text-xs mr-2" />
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Nav;
