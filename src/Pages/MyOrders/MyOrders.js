import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";

const MyOrders = () => {
  const { userID } = useAuth();
  const { data, isLoading } = useQuery(["my-orders", userID], () =>
    Axios.get(`/api/my-orders`).then((result) => result.data)
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!data.length) {
    return (
      <p className="text-center py-20 bg-white shadow border   overflow-hidden font-semibold text-red-300">
        No Product Found
      </p>
    );
  }

  console.log(data);
  return (
    <Page title="My Orders">
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
                          {console.log(result?.productDetails[0]?.status)}
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
                              {result?.productDetails[0]?.status === "sold" ? (
                                <span className="bg-green-400 ml-2 text-white text-xs  p-1 ">
                                  Paid
                                </span>
                              ) : (
                                <span className="bg-green-400 ml-2 text-white text-xs  p-1 ">
                                  Available
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-2 py-4 whitespace-nowrap">
                            <span className="flex   justify-center gap-3">
                              {!(
                                result?.productDetails[0]?.status === "sold"
                              ) && (
                                <Link to={`/dashboard/payment/${result._id}`}>
                                  <button className="bg-sky-400 text-white text-xs  p-1 cursor-pointer">
                                    Pay Now
                                  </button>
                                </Link>
                              )}
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
    </Page>
  );
};

export default MyOrders;
