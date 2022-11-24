import React from "react";
import Input from "../../Components/Input/Input";
import { districts } from "./district";

const AddProduct = () => {
  return (
    <div>
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form className="">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className=" bg-white px-4 py-5 sm:p-6">
              <div className="">
                <Input
                  title="Product Name"
                  placeholder="Product Name"
                  name="product-name"
                  type="text"
                />
                <div className="grid grid-cols-2 gap-5">
                  <Input
                    title="Resale Price"
                    placeholder="Resale Price"
                    name="resale-price"
                    type="number"
                  />
                  <Input
                    title="Original Price"
                    placeholder="Original Price"
                    name="original-price"
                    type="number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-5">
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
                          <select className="  border p-2  rounded">
                            <option className="w-full " selected>
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
                    name={"resale-price"}
                    type="number"
                  />
                </div>
                <div>
                  <Input
                    title="Descriptions "
                    placeholder="Descriptions"
                    name="descriptions"
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
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
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
