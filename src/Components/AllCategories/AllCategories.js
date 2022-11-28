import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../services/axiosInstance";
import Loading from "../Utility/Loading";
import NotFound from "../Utility/NotFound";

const AllCategories = () => {
  const { data, isLoading } = useQuery(["categories"], () =>
    Axios.get("/api/categories").then((result) => result.data)
  );

  if (isLoading) {
    return <Loading />;
  }
  if (!data.length) {
    return <NotFound />;
  }
  return (
    <div className="md:w-10/12 mx-auto py-12">
      <div>
        <h2 className="text-2xl mt-5 text-center text-[#222222] font-semibold">
          All Categories
        </h2>
        <p className="text-center text-gray-400 mb-8">Top Selling Brands</p>
      </div>

      <div className="grid mx-5 gap-5 grid-cols-2  md:grid-cols-5">
        {data.map((cat) => (
          <div
            key={cat._id}
            className="border px-5 py-3 overflow-hidden  hover:shadow-lg flex justify-center items-center"
          >
            <Link to={`/category/${cat._id}`}>
              <img
                className="h-12 w-44  hover:scale-110  transition-all duration-500 "
                src={cat?.catImage}
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
