import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import ModalBook from "./../../Components/ModalBook/ModalBook";

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const {
    productName,
    originalPrice,
    resalePrice,
    createdAt,
    useDuration,
    location,
    sellerInfo,
    advertize,
    productImage,
  } = product;
  const { user: sellerDetails, verify } = sellerInfo[0];
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className=" border p-5 overflow-hidden hover:border hover:border-sky-500 hover:shadow-lg">
        <div className="relative">
          <div className="bg-gray-50 p-5  overflow-hidden">
            <img
              src={productImage}
              alt=""
              className="mx-auto hover:scale-110 transition-all duration-500"
            />
          </div>
          {advertize && (
            <button className="absolute top-4 left-4 bg-sky-500 text-white text-xs p-1 rounded-sm">
              Advertize
            </button>
          )}
        </div>
        <div className="mt-3 text-gray-400">
          <h3 className="font-bold text-2xl text-gray-600 hover:text-[#F9B127]">
            {productName}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold text-red-400 mt-1">
              <span title="Resale Price">TK {resalePrice}</span>
              <span
                title="Ordinal Price"
                className="text-sm text-gray-400 line-through ml-1"
              >
                TK {originalPrice}
              </span>
            </p>
            <p>
              <span className="flex items-center gap-1">
                <FaCalendar /> {createdAt.slice(0, 10)}
              </span>
            </p>
          </div>

          <p className="flex justify-between mt-1">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt />
              {location}
            </span>

            <span className="flex items-center gap-1">
              <FaClock />
              {useDuration} Years Used
            </span>
          </p>
          <p className="flex justify-between mt-1">
            <span className="flex items-center gap-1 ">
              by
              <span className=" flex font-medium gap-1 items-center">
                {sellerDetails}
                {verify && (
                  <FaCheckCircle
                    className="text-[#F9B127]"
                    title="Seller Verified"
                  />
                )}
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
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="bg-[#F9B127] hover:bg-gray-700 text-white p-2 "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalBook title={`Book ${productName}  `} setShowModal={setShowModal}>
          <h1> {productName}</h1>
          <h1> {user.email}</h1>
          <h1> {location}</h1>

          {}
        </ModalBook>
      )}
    </>
  );
};

export default ProductCard;
