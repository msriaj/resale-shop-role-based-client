import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Components/Utility/Loading";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";

const WishList = () => {
  const { userID } = useAuth();
  console.log(userID);
  const { data, isLoading } = useQuery({
    queryKey: ["wish-orders", userID],
    queryFn: () => Axios.get(`/api/my-wish-list`).then((result) => result.data),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!data?.length) {
    return (
      <p className="text-center py-20 bg-white shadow border   overflow-hidden font-semibold text-red-300">
        No Product Found
      </p>
    );
  }
  console.log(data);
  return (
    <div>
      <div>
        <div className="  md:mx-0">
          <div className="mx-auto ">
            <div className="flex flex-col justify-center ">
              <div className="w-full bg-white my-12 mx-auto rounded-sm border  ">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">WishList</h2>
                </header>

                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Product Details
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Seller Info
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
                        {data?.map((product) => (
                          <tr key={product._id} className="hover:bg-gray-100 ">
                            <td className="px-2 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <img
                                  className="w-12 h-12  shadow mr-2 hidden md:block"
                                  src={product?.productDetails[0]?.productImage}
                                  alt=""
                                />
                                <div className="font-medium text-gray-800">
                                  <Link to="/">
                                    {product?.productDetails[0]?.productName}
                                  </Link>
                                  {product?.productDetails[0]?.resalePrice}
                                </div>
                              </div>
                            </td>
                            <td className="  py-4 whitespace-nowrap">
                              <div className="text-gray-500 text-left ">
                                <div className=" p-1 font-semibold">
                                  <p>
                                    <b>Name </b>:{" "}
                                    {product?.sellerDetails[0]?.user}
                                  </p>
                                  <p>
                                    <b>Phone </b>:{" "}
                                    {product?.productDetails[0]?.sellerPhone}
                                  </p>
                                  <p>
                                    <b>Email </b>:{" "}
                                    {product?.sellerDetails[0]?.email}
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="px-2 py-4 whitespace-nowrap">
                              <span className="flex border bg-green-500 py-2 text-white   justify-center gap-3">
                                <Link
                                  to={`/advertisement/${product?.productDetails[0]?._id}`}
                                >
                                  See Details
                                </Link>
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
    </div>
  );
};

export default WishList;
