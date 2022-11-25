import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { notify } from "../../Components/Utility/notify";
import { serverUrl } from "../../Context/AuthContext";
import { useAuth } from "../../hooks/useAuth";

const MyProducts = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery(["myProducts"], () =>
    axios
      .get(`${serverUrl}/api/products?email=${user?.email}`)
      .then((result) => result.data)
  );

  const deleteProduct = (id) => {
    axios.get(`${serverUrl}/api/delete-product/${id}`).then((result) => {
      refetch();
      notify("Delete Success!!!", "info");
    });
  };
  const advertizeProduct = (id) => {
    axios.get(`${serverUrl}/api/advertize-product/${id}`).then((result) => {
      refetch();
      notify("Delete Success!!!", "info");
    });
  };

  if (isLoading) {
    return "loading...";
  }

  if (!data.length) {
    return (
      <p className="text-center py-20 bg-white shadow border  rounded overflow-hidden font-semibold text-red-300">
        No Product Found
      </p>
    );
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
                              {/* <p>
                                <b>Description:</b> {result.description}
                              </p> */}
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
                            <div className="text-center  ">
                              {result?.advertize && (
                                <span className="bg-sky-400 text-white text-xs rounded p-1 ">
                                  Advertized
                                </span>
                              )}
                              {result?.sold && (
                                <span className="bg-green-400 ml-2 text-white text-xs rounded p-1 ">
                                  Sold
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              {!result?.advertize && (
                                <button
                                  onClick={() => advertizeProduct(result._id)}
                                  className="bg-sky-400 text-white text-xs rounded p-1 cursor-pointer"
                                >
                                  Advertize Now
                                </button>
                              )}
                              <button
                                className="bg-red-400 text-white text-xs rounded p-1 cursor-pointer"
                                onClick={() => deleteProduct(result._id)}
                              >
                                Delete
                              </button>
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

export default MyProducts;