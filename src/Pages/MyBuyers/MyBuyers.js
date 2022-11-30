import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";

const MyBuyers = () => {
  const { userID } = useAuth();
  const { data, isLoading } = useQuery(["myBuyers", userID], () =>
    Axios.get("/api/my-buyers").then((result) => result.data)
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(data);
  if (!data.length) {
    return (
      <p className="text-center py-20 bg-white shadow border   overflow-hidden font-semibold text-red-300">
        You Don't Have Any Buyers
      </p>
    );
  }
  console.log(data);
  return (
    <Page title="My Buyers">
      <div>
        <section className="antialiased bg-gray-100 text-gray-600 h-screen ">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">My Buyers</h2>
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
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Location</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Phone</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data?.map((buyer) => (
                      <tr key={buyer._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={buyer.buyerInfo[0].proPic}
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {buyer.buyerInfo[0].user}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">
                            {" "}
                            {buyer.buyerInfo[0].email}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">
                            {buyer.meetLocation}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center flex items-center justify-center gap-1">
                            {buyer.buyerPhone}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default MyBuyers;
