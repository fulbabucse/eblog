import React from "react";
import { useForm } from "react-hook-form";

const Author = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAuthor = (authorData) => {
    console.log(authorData);
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Add Author</h1>
        <form onSubmit={handleSubmit(handleAuthor)}>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                {...register("fullName", {
                  required: "Name is required",
                })}
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Author Name"
              />
              {errors.fullName && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.fullName?.message}
                </p>
              )}
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="author_image"
              >
                Author Image
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                {...register("author_image", {
                  required: "Name is required",
                })}
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
          <div class="md:flex md:items-center justify-end">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Add Author
            </button>
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
