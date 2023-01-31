import React from "react";

const Tags = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Add Tags</h1>
        <form class="">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="tags_name"
              >
                Tags Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="tags_name"
                type="text"
                placeholder="Tags Name"
              />
            </div>
          </div>
          <div class="md:flex md:items-center justify-end">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Add Tags
            </button>
          </div>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-xl text-gray-800 text-right mb-3">Tags List</h1>
      </div>
    </div>
  );
};

export default Tags;
