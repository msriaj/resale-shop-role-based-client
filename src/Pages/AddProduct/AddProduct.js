import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { serverUrl } from "../../Context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { Axios } from "../../services/axiosInstance";
import { divisions } from "./district";

const AddProduct = () => {
  const [posting, setPosting] = useState(false);
  const { user, userID } = useAuth();
  const [img, setImg] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["categories"], () =>
    Axios.get("/api/categories").then((result) => result.data)
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    setPosting(true);
    const form = e.target;
    const productName = form.productName.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const category = form.category.value;
    const location = form.location.value;
    const condition = form.condition.value;
    const description = form.description.value;
    const useDuration = form.useDuration.value;
    const sellerPhone = form.sellerPhone.value;

    const formData = new FormData();

    formData.append("image", selectedFile);
    try {
      const fetchData = await fetch(
        "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        {
          method: "POST",
          body: formData,
        }
      );

      const response = await fetchData.json();

      if (response) {
        const productInfo = {
          productName,
          originalPrice,
          resalePrice,
          category,
          location,
          condition,
          description,
          useDuration,
          sellerPhone: sellerPhone,
          productImage: response?.data?.url,
          email: user.email,
          userID: userID,
        };
        Axios.post(`${serverUrl}/api/add-product`, productInfo)
          .then((result) => {
            form.reset();
            setPosting(false);
            notify("Product Published Successfully !!");
            navigate("/dashboard/my-products/");
          })
          .catch((err) => {
            setPosting(false);
            console.log(err);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    if (event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
    }
  };

  if (isLoading || posting) {
    return <Loading />;
  }

  return (
    <Page title="Add Products">
      <div className="mt-5 mb-12 md:col-span-2 md:mt-0">
        <form onSubmit={submitHandler}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className=" bg-white px-4 py-5 sm:p-6">
              <div className="">
                <Input
                  title="Product Name"
                  placeholder="Product Name"
                  name="productName"
                  type="text"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                  <Input
                    title="Resale Price"
                    placeholder="Resale Price"
                    name="resalePrice"
                    type="number"
                  />
                  <Input
                    title="Original Price"
                    placeholder="Original Price"
                    name="originalPrice"
                    type="number"
                  />
                  <div className="col-span-2 md:col-span-1">
                    <Input
                      title="Contact Number"
                      placeholder="Phone Number "
                      name="sellerPhone"
                      type="number"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 mt-5"
                    >
                      Category
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="flex justify-center">
                        <div className="flex grow">
                          <select
                            name="category"
                            className="  border p-2  rounded"
                            required
                          >
                            <option className="w-full ">Select Category</option>
                            {data.map((cat) => (
                              <option
                                key={cat._id}
                                className="w-full"
                                value={cat._id}
                              >
                                {cat.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mt-5"
                    >
                      Location
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="flex justify-center">
                        <div className="flex grow">
                          <select
                            name="location"
                            className="  border p-2  rounded"
                            required
                          >
                            <option className="w-full ">
                              Select Your Location
                            </option>
                            {divisions.map((division) => (
                              <option
                                key={division.id}
                                className="w-full"
                                value={division.name}
                              >
                                {division.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Input
                    title="Years Of Used"
                    placeholder="Years Of Used"
                    name={"useDuration"}
                    type="number"
                  />
                </div>
                <div>
                  <Input
                    title="Descriptions "
                    placeholder="Descriptions"
                    name="description"
                    type="textarea"
                  />
                </div>
                <div className="mt-5">
                  <p>Please select your Product Quality:</p>
                  <input
                    type="radio"
                    id="Good"
                    name="condition"
                    value="Good"
                    defaultChecked
                  />
                  <label className="ml-2" htmlFor="Good">
                    Good
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="excellent"
                    name="condition"
                    value="excellent"
                  />
                  <label className="ml-2" htmlFor="excellent">
                    Excellent
                  </label>
                  <br />
                  <input type="radio" id="fair" name="condition" value="fair" />
                  <label className="ml-2" htmlFor="fair">
                    Fair
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mt-5">
                  Product Images
                </label>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-white"
                >
                  <div className="flex flex-col overflow-hidden items-center justify-center pt-5 pb-6">
                    {img ? (
                      <div className="p-5">
                        <img src={img} className="h-48" alt="s" />
                      </div>
                    ) : (
                      <>
                        <FaCloudUploadAlt className="text-4xl text-gray-600" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </>
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleFileSelect}
                    hidden
                  />
                </label>
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="block w-full md:w-auto md:inline-flex justify-center rounded-md border border-transparent bg-[#FF6801] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#FF6801] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default AddProduct;
