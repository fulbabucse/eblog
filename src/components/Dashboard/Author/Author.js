import React from "react";

const Author = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Add Author</h1>
        <form class="">
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
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Author Name"
              />
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
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="author_image"
                type="file"
              />
            </div>
          </div>
          <div class="md:flex md:items-center justify-end">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
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
