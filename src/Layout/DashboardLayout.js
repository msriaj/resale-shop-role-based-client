import React, { useState } from "react";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { notify } from "../Components/Utility/notify";
import { useAuth } from "../hooks/useAuth";
import { Sidebar } from "./Sidebar";

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { user, logOut } = useAuth();

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  id="toggleSidebarMobile"
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                >
                  <FaBars />
                </button>

                <Link to="/" className="flex items-center">
                  <span className="self-center whitespace-nowrap text-gray-600 font-bold uppercase ">
                    NextMobile
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                <p className="hidden md:block">
                  Welcome , <b>{user?.displayName}</b>
                </p>
                <button className=" md:ml-5  p-2 text-gray-400">
                  <FaSignOutAlt
                    onClick={() => {
                      logOut();
                      navigate("/login");
                      notify("Logout Successfully !!!", "error");
                    }}
                    title="Logout"
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <Sidebar showSidebar={showSidebar} />
            <main>
              <div className="pt-6 px-4 md:min-h-screen">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
