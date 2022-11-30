import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { Axios } from "../../services/axiosInstance";
import Loading from "../Utility/Loading";
const Categories = () => {
  const { data, isLoading } = useQuery(["categories"], () =>
    Axios.get("/api/categories").then((result) => result.data)
  );
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  const newData = data?.slice(0, 6);
  return (
    <div className="bg-[#E6F2FE]">
      <div className="md:w-10/12 mx-auto py-12">
        <h2 className="text-2xl mt-5 text-center text-[#222222] font-semibold">
          Trending Categories
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Boost Your Search With Trending Categories
        </p>
        <div className="grid mx-5 gap-5 grid-cols-2  md:grid-cols-3">
          {newData.map((cat) => (
            <div
              key={cat._id}
              className="border px-5 py-3 overflow-hidden bg-white hover:shadow-lg flex justify-center items-center"
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
        <div className="text-center pt-8">
          <Link
            to="/categories"
            className="border hover:bg-[#FF6801] bg-white hover:text-white px-4 py-2 "
          >
            More Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
