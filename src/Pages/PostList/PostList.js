import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const PostList = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl ">All Products</h2>
      </div>
      <div className="mx-5 md:w-10/12 md:mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default PostList;
