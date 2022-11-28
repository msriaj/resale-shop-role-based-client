import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Page } from "../../Components/Page";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loading from "../../Components/Utility/Loading";
import NotFound from "../../Components/Utility/NotFound";
import { Axios } from "../../services/axiosInstance";

const LocationWise = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery([{ id }], () =>
    Axios.get(`/api/location/${id}`)
  );
  const newData = data?.data;

  if (isLoading) {
    return <Loading />;
  }
  if (!data || !newData.length) return <NotFound />;
  return (
    <Page title={id}>
      <div className="mx-5 md:w-10/12 md:mx-auto ">
        <div className="flex mt-8 justify-between mb-5">
          <div>
            <h2 className="text-2xl mt-5 text-left text-[#222222] font-semibold">
              Posts From : {id}
            </h2>
            <p className="text-center text-gray-400 mb-8">
              All Advertisement from {id}
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
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default LocationWise;
