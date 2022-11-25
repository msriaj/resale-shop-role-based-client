import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

const AllUser = () => {
  const { data, isLoading, refetch } = useQuery(["allUser"], () =>
    axios
      .get("http://localhost:5000/api/all-user")
      .then((result) => result.data)
  );

  const deleteUser = (id) => {
    axios.get(`http://localhost:5000/api/delete-user/${id}`).then((result) => {
      console.log(result);
      refetch();
    });
  };

  const verifyUser = (id) => {
    axios.get(`http://localhost:5000/api/verify-user/${id}`).then((result) => {
      console.log(result);
      refetch();
    });
  };

  console.log(data);

  if (isLoading) {
    return "loading...";
  }
  return (
    <div>
      <section className="antialiased bg-gray-100 text-gray-600 h-screen ">
        <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Photo</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {data.map((user) => (
                    <tr key={user._id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={
                                user.proPic
                                  ? user.proPic
                                  : "https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                              }
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div className="font-medium text-gray-800"></div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left flex items-center gap-1 font-semibold">
                          {user?.user} {user?.verify && <FaCheckCircle />}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium ">
                          {user?.email}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center flex items-center justify-center gap-1">
                          {user?.verify ? (
                            <span className="text-green-400"> verified</span>
                          ) : (
                            <button
                              onClick={() => verifyUser(user._id)}
                              className="bg-green-600 text-white p-1 text-sm rounded-md px-4 uppercase"
                            >
                              Verify
                            </button>
                          )}

                          <button
                            onClick={() => deleteUser(user._id)}
                            className="bg-red-400 text-white p-2 text-sm rounded-md px-4"
                          >
                            <FaTrashAlt />
                          </button>
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
  );
};

export default AllUser;
