import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { serverUrl } from "../../Context/AuthContext";

const AllProduct = () => {
  const { data, isLoading, refetch } = useQuery(["products"], () =>
    axios.get(`${serverUrl}/api/products`).then((result) => result.data)
  );

  if (isLoading) {
    return "loading...";
  }
  return (
    <div>
      <div className="  md:mx-0">
        <div className="mx-auto ">
          <div className="flex flex-col justify-center ">
            <div className="w-full bg-white my-12 mx-auto rounded-sm border  ">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">All Products</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Image Name
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Price</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Product Details
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Seller Details
                          </div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Status</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Actions
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {data.map((result) => (
                        <tr key={result._id} className="hover:bg-gray-100 ">
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className=" ">
                              <img
                                className="w-12 h-12 rounded shadow mr-2 hidden md:block"
                                src={result.productImage}
                                alt={result.productName}
                              />
                              <div className="font-medium text-gray-800">
                                <Link to="/">{result.productName}</Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-center flex flex-col items-center ">
                              <div className="flex">
                                <span className=" p-1 font-semibold">
                                  {result.resalePrice}{" "}
                                  <span className="text-gray-400">
                                    ({result.originalPrice})
                                  </span>
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left text-gray-600 ">
                              <p>
                                <b>Category:</b> {result.category}{" "}
                              </p>
                              <p>
                                <b>Condition:</b> {result.condition}
                              </p>
                              <p>
                                <b>useDuration:</b> {result.useDuration}
                              </p>
                              <p>
                                <b>Description:</b> {result.description}
                              </p>
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left  ">
                              {result.location}
                              {result?.sellerName}
                              {result?.verified}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left  ">
                              Sold Unsold Advertize or Not Advertize
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              <FaTrash className="text-red-600 cursor-pointer" />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
