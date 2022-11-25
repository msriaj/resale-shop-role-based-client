import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { serverUrl } from "../../Context/AuthContext";

const Categories = () => {
  const { data, isLoading } = useQuery(["categories"], () =>
    axios.get(`${serverUrl}/api/categories`).then((result) => result.data)
  );
  console.log(data);
  if (isLoading) {
    return <p>loading....</p>;
  }
  const newData = data?.slice(0, 5);
  return (
    <div className="md:w-10/12 mx-auto">
      <h2 className="text-3xl mb-5">Top Selling Brands</h2>
      <div className="grid mx-5 gap-5 grid-cols-2  md:grid-cols-5">
        {newData.map((cat) => (
          <div className="border px-5 py-3 overflow-hidden  hover:shadow-lg flex justify-center items-center">
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

export default Categories;
