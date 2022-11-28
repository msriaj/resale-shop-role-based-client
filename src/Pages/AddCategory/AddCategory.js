import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import Input from "../../Components/Input/Input";
import { Page } from "../../Components/Page";
import Loading from "../../Components/Utility/Loading";
import { notify } from "../../Components/Utility/notify";
import { Axios } from "../../services/axiosInstance";

const AddCategory = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState("");

  const { data, isLoading, refetch } = useQuery(["categories"], () =>
    Axios.get("/api/categories").then((result) => result.data)
  );

  const deleteCategory = (id) => {
    axios.get(`/api/delete-category/${id}`).then((result) => {
      notify("Category Deleted !!");
      refetch();
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const form = e.target;
    const name = form.catName.value;
    const catDescription = form.catDescription.value;

    try {
      const fetchData = await fetch(
        "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        {
          method: "POST",
          body: formData,
        }
      );

      const response = await fetchData.json();

      console.log(response?.data?.url);
      if (response) {
        const catData = {
          name,
          catImage: response?.data?.url,
          catDescription,
        };
        Axios.post("/api/add-category", catData)
          .then((result) => {
            if (result.data.acknowledged) {
              refetch();
              setImg("");
              notify("Category Added Successfully !!");
              form.reset();
            }
          })
          .catch((err) => {
            if (err.response.data) {
              notify(err.response.data, "error");
            }
          });
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
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

  return (
    <Page title="Add Category">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <form
            onSubmit={submitHandler}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <Input
              type="text"
              placeholder="Type Category Name"
              name="catName"
              title="Category Name"
            />
            <Input
              type="text"
              placeholder="Description"
              name="catDescription"
              title="Description"
            />

            <div className="flex items-center justify-center w-full">
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
                        or drag and drop
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

            <button className="block w-full p-3 text-center   bg-[#FF6801] rounded-md text-white   ">
              Add Category
            </button>
          </form>
        </div>

        <div>
          <div>
            <div className="  md:mx-0">
              <div className="mx-auto ">
                <div className="flex flex-col justify-center ">
                  <div className="w-full bg-white my-12 mx-auto rounded-sm border  ">
                    <header className="px-5 py-4 border-b border-gray-100">
                      <h2 className="font-semibold text-gray-800">
                        All Categories
                      </h2>
                    </header>

                    <div className="p-3">
                      <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">
                                  Category Image
                                </div>
                              </th>
                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">
                                  Name
                                </div>
                              </th>

                              <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">
                                  Actions
                                </div>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-sm divide-y divide-gray-100">
                            {data?.map((cat) => (
                              <tr className="hover:bg-gray-100 ">
                                <td className="px-2 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <img
                                      className="h-8 w-24  shadow mr-2 hidden md:block"
                                      src={cat.catImage}
                                      alt=""
                                    />
                                  </div>
                                </td>
                                <td className="px-2 py-4 whitespace-nowrap">
                                  <div className="text-center flex flex-col items-center ">
                                    <div className="flex">
                                      <span className=" p-1 font-semibold">
                                        {cat.name}
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="px-2 py-4 whitespace-nowrap">
                                  <span className="flex   justify-center gap-3">
                                    <FaTrash
                                      onClick={() => {
                                        deleteCategory(cat._id);
                                      }}
                                      className="text-red-600 cursor-pointer"
                                    />
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AddCategory;
