import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ModalBook from "../../Components/ModalBook/ModalBook";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";

const AdsDetails = () => {
  const { id } = useParams();
  const { userID, role, user } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const { data, isLoading } = useQuery(["myProducts"], () =>
    Axios.get(`/api/ads/${id}`).then((result) => result.data)
  );

  if (isLoading) {
    return <Loading />;
  }

  const { _id, productName, resalePrice, location, sellerInfo } = data;
  const { _id: sellerId } = sellerInfo[0];
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
          }
        })
        .catch((err) => {
          if (err.response.data) {
            notify(err.response.data, "error");
          }
        });
    }

    notify("Your Are Not Buyers", "info");
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
    <Page title={productName}>
      <div className="bg-white md:w-10/12 mx-auto ">
        <div className="grid  md:grid-cols-2   m-5 border items-center">
          <div>
            <img src={data.productImage} className="" alt="" />
          </div>
          <div className="p-5 text-gray-500">
            <p className="text-xl md:text-3xl mb-5 text-[#FF6801]">
              <b>{data.productName} </b>
            </p>
            <p className="my-2">
              Condition:{" "}
              <b className="bg-green-900 p-1 text-sm rounded text-white">
                {data.condition}{" "}
              </b>
            </p>
            <p className="">
              Price:{" "}
              <b className="text-[#FF6801} text-lg md:text-3xl">
                {data.resalePrice}TK{" "}
              </b>
              <span className="line-through text-xm md:text-xl ">
                {" "}
                {data.originalPrice} TK
              </span>{" "}
            </p>
            <div className="text-xm">
              <p>
                Location: <b>{data.location} </b>
              </p>
              <p>
                Contact Number: <b>{data.sellerPhone} </b>
              </p>
            </div>
            <div>
              <div className="flex justify gap-5 items-center mt-4">
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
                  className="bg-[#FF6801] border hover:bg-gray-700 text-white p-2 "
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-600 m-5 p-5">
          <div>
            <b>CreatedAt:</b> {data.createdAt}
          </div>
          <div>
            <b>Used:</b> {data.useDuration} Years
          </div>

          <p>
            {" "}
            <b>Description:</b> {data.description}
          </p>
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
    </Page>
  );
};

export default AdsDetails;
