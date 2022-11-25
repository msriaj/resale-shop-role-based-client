import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { serverUrl } from "../../Context/AuthContext";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Axios } from "../../services/axiosInstance";
import { districts } from "./district";

const AddProduct = () => {
  const { user, userID } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);
  const [getItem] = useLocalStorage();
  console.log(getItem);
  const { data, isLoading } = useQuery(["categories"], () =>
    Axios.get("/api/categories").then((result) => result.data)
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const category = form.category.value;
    const location = form.location.value;
    const condition = form.condition.value;
    const description = form.description.value;
    const useDuration = form.useDuration.value;

    const formData = new FormData();

    formData.append("image", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        data: formData,
      });
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
          productImage: response?.data?.data?.url,
          email: user.email,
          userID: userID,
        };
        console.log(productInfo);
        axios
          .post(`${serverUrl}/api/add-product`, productInfo, {
            headers: {
              Authorization: `Bearer ${getItem("token")}`,
            },
          })
          .then((result) => {
            // form.reset();
            notify("Product Published Successfully !!");
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mt-5 md:col-span-2 md:mt-0">
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
                <div className="grid grid-cols-2 gap-5">
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
                          >
                            <option className="w-full ">
                              Select Your Location
                            </option>
                            {districts.map((district) => (
                              <option
                                key={district.id}
                                className="w-full"
                                value={district.name}
                              >
                                {district.name}
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
                  <input type="radio" id="Good" name="condition" value="Good" />
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

                <input type="file" onChange={handleFileSelect} />
              </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
