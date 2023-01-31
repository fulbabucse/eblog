import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addAuthorData from "../../../redux/thunk/addAuthorData";
import { imgHostURL } from "../../../utilities/urls";

const Author = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAuthor = (authorData) => {
    const formData = new FormData();
    formData.append("image", authorData.author_image[0]);

    setLoading(true);
    fetch(imgHostURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const authorInfo = {
          author_name: authorData.author_name,
          author_image: data.data.url,
          author_summary: authorData.author_summary,
        };
        dispatch(addAuthorData(authorInfo));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Add Author</h1>
        <form onSubmit={handleSubmit(handleAuthor)}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                {...register("author_name", {
                  required: "Name is required",
                })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Author Name"
              />
              {errors.author_name && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.author_name?.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="author_image"
              >
                Author Image
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                {...register("author_image", {
                  required: "Image is required",
                })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="author_image"
                type="file"
              />
              {errors.author_image && (
                <p className="text-red-400 text-sm font-medium">
                  {errors.author_image?.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="author_image"
              >
                Author Summary
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea
                {...register("author_summary", {
                  required: "Summary is required",
                })}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="author_summary"
                type="text"
                placeholder="Author Summary"
              />
              {errors.author_summary && (
                <p className="text-red-400 text-sm font-medium">
                  {errors.author_summary?.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:flex md:items-center justify-end">
            {loading ? (
              <div>
                <button
                  className=" flex items-center gap-1 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded"
                  type="submit"
                >
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                  Processing...
                </button>
              </div>
            ) : (
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                type="submit"
              >
                Add Author
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Author List</h1>
      </div>
    </div>
  );
};

export default Author;
