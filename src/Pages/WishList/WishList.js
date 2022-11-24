import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishList = () => {
  return (
    <div>
      <div>
        <div className="  md:mx-0">
          <div className="mx-auto ">
            <div className="flex flex-col justify-center ">
              <div className="w-full bg-white my-12 mx-auto rounded-sm border  ">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">My Reviews</h2>
                </header>

                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Service Details
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Review
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Time
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Actions
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        <tr className="hover:bg-gray-100 ">
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                className="w-12 h-12 rounded shadow mr-2 hidden md:block"
                                src="/"
                                alt=""
                              />
                              <div className="font-medium text-gray-800">
                                <Link to="/">Name</Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-center flex flex-col items-center ">
                              <div className="flex">
                                <span className=" p-1 font-semibold">sas</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left  ">date</div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              <Link to="/">
                                <FaEdit className="text-green-600 cursor-pointer" />
                              </Link>

                              <FaTrash className="text-red-600 cursor-pointer" />
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
