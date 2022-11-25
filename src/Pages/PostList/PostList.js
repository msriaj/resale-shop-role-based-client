import React from "react";
import { FaSearch } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard/ProductCard";

const PostList = () => {
  return (
    <div className="mx-5 md:w-10/12 md:mx-auto ">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl ">All Products</h2>
        <div className="flex relative shadow rounded-xl items-center">
          <input
            type="text"
            className="bg-white  border h-10 px-5 w-96  rounded-3xl text-sm focus:outline-none "
          />
          <FaSearch className="absolute right-3" />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard />
      </div>
    </div>
  );
};

export default PostList;
