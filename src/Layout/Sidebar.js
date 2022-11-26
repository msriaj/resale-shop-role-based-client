import React from "react";
import {
  FaCartArrowDown,
  FaChartPie,
  FaFolder,
  FaHeart,
  FaShoppingBag,
  FaStore,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Sidebar = ({ showSidebar }) => {
  const { role } = useAuth();
  console.log(role);
  const menuData = [
    {
      path: "/overview/",
      title: "Overview",
      permission: ["admin"],
      icon: (
        <FaChartPie className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/add-product/",
      title: "Add Products",
      permission: ["seller", "admin"],
      icon: (
        <FaShoppingBag className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/all-product/",
      title: "All Product",
      permission: ["admin"],
      icon: (
        <FaStore className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/my-buyers/",
      title: "My Buyers",
      permission: ["admin", "seller"],
      icon: (
        <FaUserAltSlash className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/all-user/",
      title: "All User",
      permission: ["admin"],
      icon: (
        <FaUserAlt className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/my-orders/",
      title: "My Orders",
      permission: ["admin", "buyers"],
      icon: (
        <FaCartArrowDown className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/my-wishlist/",
      title: "Wishlist",
      permission: ["admin", "buyers"],
      icon: (
        <FaHeart className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/add-category/",
      title: "Add Category",
      permission: ["admin"],
      icon: (
        <FaFolder className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
    {
      path: "/my-products/",
      title: "My Products",
      permission: ["admin", "seller"],
      icon: (
        <FaFolder className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition duration-75" />
      ),
    },
  ];
  return (
    <aside
      id="sidebar"
      className={`fixed ${
        showSidebar ? "block" : "hidden"
      } z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 bg-white divide-y space-y-1">
            <ul className=" pb-2">
              {role &&
                menuData.map(
                  (menuitem, idx) =>
                    menuitem?.permission?.includes(role) && (
                      <li key={idx}>
                        <NavLink
                          to={`/dashboard${menuitem.path}`}
                          className="text-base mt-5 text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                        >
                          {menuitem.icon}
                          <span className="ml-3">{menuitem.title}</span>
                        </NavLink>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
