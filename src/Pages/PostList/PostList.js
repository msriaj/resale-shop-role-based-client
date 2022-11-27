import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../../Components/Utility/Loading";
import NotFound from "../../Components/Utility/NotFound";
import { Axios } from "../../services/axiosInstance";

const PostList = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery([{ id }], () =>
    Axios.get(`/api/get-products/${id}`)
  );
  const newData = data?.data;

  if (isLoading) {
    return <Loading />;
  }
  if (!data || !newData.length) return <NotFound />;

  return (
    <div className="">
      <div className="mx-5 md:w-10/12 md:mx-auto ">
        <div className="flex mt-8 justify-between mb-5">
          <div>
            <h2 className="text-2xl mt-5 text-left text-[#222222] font-semibold">
              Resent advertizes
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex relative  rounded-xl items-center">
            <input
              type="text"
              className="bg-white  border h-10 px-5 w-96  rounded-3xl text-sm focus:outline-none "
            />
            <FaSearch className="absolute right-3" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newData?.map((product) => (
            <>
              {console.log(product)}
              <ProductCard key={product._id} product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;
