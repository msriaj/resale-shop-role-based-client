import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { Axios } from "../../services/axiosInstance";

const MyOrders = () => {
  const { data, isLoading, refetch } = useQuery(["my-orders"], () =>
    Axios.get(`/api/my-orders`).then((result) => result.data)
  );

  const deleteOrder = (id) => {
    // Axios.get(`/api/delete-product/${id}`).then((result) => {
    //   refetch();
    refetch();
    notify("Order Cancel Success!!!", "info");
    // });
  };
  const payNow = (id) => {
    // Axios.get(`/api/advertize-product/${id}`).then((result) => {
    //   refetch();
    notify("Pay Button", "info");
    // });
  };

  if (isLoading) {
    return <Loading />;
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
                <h2 className="font-semibold text-gray-800">My Orders</h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Name</div>
                        </th>

                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Order Details
                          </div>
                        </th>

                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Status
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
                      {data.map((result) => (
                        <tr key={result._id} className="hover:bg-gray-100 ">
                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="flex items-center ">
                              <div className="flex items-center text-gray-600">
                                <div>
                                  <img
                                    className="w-16 rounded"
                                    src={
                                      result?.productDetails[0]?.productImage
                                    }
                                    alt="{result.productName}"
                                  />
                                </div>
                                <div className="ml-2">
                                  <Link to="/" className="font-medium ">
                                    {result.productName}
                                  </Link>
                                  <p>
                                    <b>Price:</b> {result.resalePrice} TK
                                  </p>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-left text-gray-600 ">
                              <p>
                                <b>Seller Location :</b> {result.sellerLocation}
                              </p>
                              <p>
                                <b>Seller Phone :</b> {result.sellerPhone}
                              </p>
                              <p>
                                <b>Meet Location:</b> {result.meetLocation}
                              </p>
                              <p>
                                <b>My Phone:</b> {result.buyerPhone}
                              </p>
                            </div>
                          </td>

                          <td className="px-2 py-4 whitespace-nowrap">
                            <div className="text-center  ">
                              {result?.sold ? (
                                <span className="bg-green-400 ml-2 text-white text-xs rounded p-1 ">
                                  Sold
                                </span>
                              ) : (
                                <span className="bg-green-400 ml-2 text-white text-xs rounded p-1 ">
                                  Available
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              {!result?.advertize && (
                                <button
                                  onClick={() => payNow(result._id)}
                                  className="bg-sky-400 text-white text-xs rounded p-1 cursor-pointer"
                                >
                                  Pay Now
                                </button>
                              )}
                              <button
                                className="bg-red-400 text-white text-xs rounded p-1 cursor-pointer"
                                onClick={() => deleteOrder(result._id)}
                              >
                                Cancel
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

export default MyOrders;
