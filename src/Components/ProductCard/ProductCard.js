import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
const ProductCard = () => {
  return (
    <div className=" border p-5 overflow-hidden hover:shadow-lg">
      <div className="relative">
        <div className="bg-gray-100 overflow-hidden">
          <img
            src="https://dummyimage.com/80x260"
            alt=""
            className="mx-auto hover:scale-110 transition-all duration-500"
          />
        </div>
        <button className="absolute top-4 left-4 bg-[#E74C3C] text-white text-xs p-1 rounded-sm">
          Sold
        </button>
      </div>
      <div className="mt-3 text-gray-400">
        <h3 className="font-bold text-2xl text-gray-600 hover:text-[#F9B127]">
          Lorem, ipsum dolor.
        </h3>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-red-600 mt-1">
            <span title="Resale Price">$88</span>
            <span
              title="Orginal Price"
              className="text-lg text-gray-400 line-through ml-1"
            >
              $500
            </span>
          </p>
          <p>
            <span className="flex items-center gap-1">
              <FaCalendar /> 20/20/2022
            </span>
          </p>
        </div>

        <p className="flex justify-between mt-1">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt />
            Rangamati
          </span>

          <span className="flex items-center gap-1">
            <FaClock />2 Years Used
          </span>
        </p>
        <p className="flex justify-between mt-1">
          <span className="flex items-center gap-1 ">
            by
            {/* <FaUserAlt /> */}
            <span className=" flex font-medium gap-1 items-center">
              Rija{" "}
              <FaCheckCircle
                className="text-[#F9B127]"
                title="Seller Verified"
              />
            </span>
          </span>
        </p>
        <div className="flex justify-between items-center mt-4">
          <p className="flex gap-1 border p-2   hover:bg-gray-600 hover:text-white items-center">
            <FaHeart className="text-xl" />{" "}
            <span className=" font-medium text-sm uppercase cursor-pointer">
              Add to wishlist
            </span>
          </p>
          <button className="bg-[#F9B127] hover:bg-gray-700 text-white p-2 ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
