import React from "react";
import {
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";
import { notify } from "../Utility/notify";
import ModalBook from "./../../Components/ModalBook/ModalBook";

const ProductCard = ({ product }) => {
  const { user, userID, role } = useAuth();

  const {
    _id,
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
  const { user: sellerDetails, verify, _id: sellerId } = sellerInfo[0];
  const [showModal, setShowModal] = React.useState(false);

  const wishHandler = () => {
    if (role === "buyers") {
      Axios.post(`/api/add-wish`, {
        wishedProduct: _id,
        sellerId,
      })
        .then((result) => {
          if (result.data.acknowledged) {
            notify("Product Added To WishList!!");
            setShowModal(false);
            return;
          }
        })
        .catch((err) => {
          if (err.response.data) {
            notify(err.response.data, "error");
            return;
          }
        });
    } else {
      notify("Your Are Not Buyers", "info");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const resalePrice = form.resalePrice.value;
    const buyerEmail = form.buyerEmail.value;
    const sellerLocation = form.sellerLocation.value;
    const buyerPhone = form.buyerPhone.value;
    const meetLocation = form.meetLocation.value;

    const bookInfo = {
      productName,
      resalePrice,
      sellerLocation,
      productId: _id,
      buyerEmail,
      meetLocation,
      buyerPhone,
      buyerId: userID,
      sellerId: sellerId,
    };

    try {
      Axios.post("/api/book-product", bookInfo)
        .then((result) => {
          if (result.data.acknowledged) {
            notify("Booked Added Successfully !!");
            setShowModal(false);
            form.reset();
          }
        })
        .catch((err) => {
          if (err.response.data) {
            notify(err.response.data, "error");
          }
        });
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <>
      <div className=" border p-5 bg-white  text-sm overflow-hidden hover:border  hover:shadow-xl">
        <div className="relative">
          <div className="bg-gray-50 p-5  overflow-hidden">
            <img
              src={productImage}
              alt=""
              className="mx-auto h-52 hover:scale-110 transition-all duration-500"
            />
          </div>
          {advertize && (
            <button className="absolute top-4 left-4 bg-sky-500 text-white text-xs p-1 rounded-sm">
              Advertize
            </button>
          )}
        </div>
        <div className="mt-3 text-gray-400">
          <h3 className="font-semibold text-xl text-gray-600 hover:text-[#FF6801]">
            <Link to={`/advertisement/${_id}`}>{productName}</Link>
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold text-red-400 mt-1">
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
                <FaCalendar className="text-gray-300" />{" "}
                {createdAt.slice(0, 10)}
              </span>
            </p>
          </div>

          <p className="flex justify-between mt-1">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-300" />
              {location}
            </span>

            <span className="flex items-center gap-1">
              <FaClock className="text-gray-300" />
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
                    className="text-sky-500"
                    title="Seller Verified"
                  />
                )}
              </span>
            </span>
          </p>
          <div className="flex justify-between items-center mt-4">
            <p
              onClick={() => {
                wishHandler();
              }}
              className="flex gap-1 border p-2     hover:bg-[#FF6801] hover:text-white items-center"
            >
              <FaHeart className="text-xl" />{" "}
              <span className=" font-medium text-sm uppercase cursor-pointer">
                Add to wishlist
              </span>
            </p>
            <button
              onClick={() => {
                if (role !== "buyers") {
                  notify("Your Are Not Buyers", "info");
                  return;
                }

                setShowModal(true);
              }}
              className="bg-[#FF6801] hover:bg-gray-700 text-white p-2 "
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalBook title={`Book ${productName}  `} setShowModal={setShowModal}>
          {user?.uid ? (
            <form onSubmit={submitHandler} className="text-sm">
              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Product Name</p>

                <input
                  className="border w-full shadow p-2 bg-gray-300"
                  type="text"
                  name="productName"
                  defaultValue={productName}
                  disabled
                />
              </div>
              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Resale Price </p>

                <input
                  className="border w-full shadow p-2 bg-gray-300"
                  type="text"
                  name="resalePrice"
                  defaultValue={resalePrice}
                  disabled
                />
              </div>
              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Email</p>

                <input
                  className="border w-full shadow p-2 bg-gray-300"
                  type="text"
                  name="buyerEmail"
                  defaultValue={user.email}
                  disabled
                />
              </div>
              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Seller Location</p>

                <input
                  className="border w-full shadow p-2 bg-gray-300"
                  type="text"
                  name="sellerLocation"
                  defaultValue={location}
                  disabled
                />
              </div>

              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Your Phone Number</p>
                <input
                  className="border w-full shadow p-2"
                  type="number"
                  name="buyerPhone"
                  required
                />
              </div>

              <div className="mb-3">
                <p className="text-gray-400 font-semibold">Meting Location</p>
                <input
                  className="border w-full shadow p-2"
                  type="text"
                  name="meetLocation"
                  required
                />
              </div>
              <div className="flex items-center justify-end mt-2  ">
                <button
                  className="text-[#FF6801] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#FF6801] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3   hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </form>
          ) : (
            <div className="p-5">
              <p>Please Login First</p>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

              <Link to="/login">
                <button
                  className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </ModalBook>
      )}
    </>
  );
};

export default ProductCard;
