import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FaCloudUploadAlt, FaTrash } from "react-icons/fa";
import Input from "../../Components/Input/Input";
import { notify } from "../../Components/Utility/notify";
import { serverUrl } from "../../Context/AuthContext";

const AddCategory = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const { data, isLoading, refetch } = useQuery(["categories"], () =>
    axios.get(`${serverUrl}/api/categories`).then((result) => result.data)
  );

  const deleteCategory = (id) => {
    axios
      .get(`http://localhost:5000/api/delete-category/${id}`)
      .then((result) => {
        console.log(result);
        refetch();
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    const form = e.target;
    const name = form.catName.value;

    try {
      const response = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload?key=524745d913da2245979f89f34b5104d0",
        data: formData,
      });

      if (response) {
        const catData = {
          name,
          catImage: response?.data?.data?.url,
        };
        axios.post(`${serverUrl}/api/add-category`, catData).then((result) => {
          if (result.data.acknowledged) {
            refetch();
            notify("Category Added Successfully !!");
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return "loading...";
  }
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
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

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-white"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCloudUploadAlt className="text-4xl text-gray-600" />
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                onChange={handleFileSelect}
                class="hidden"
              />
            </label>
          </div>

          <button className="block w-full p-3 text-center   bg-blue-500 rounded-md text-white   dark:bg-violet-400">
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
                                    className="h-8 w-24 rounded shadow mr-2 hidden md:block"
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
  );
};

export default AddCategory;
