import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/Shared/BlogCard";
import getBlogsData from "../../redux/thunk/getBlogsData";
import getTagsData from "../../redux/thunk/getTagsData";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTagsData());
    dispatch(getBlogsData());
  }, [dispatch]);

  const { authorTags, blogs } = useSelector((state) => state);

  return (
    <div className="md:flex justify-center gap-4 px-3 lg:px-0">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4 lg:px-0">
        {blogs?.blogs?.map((blog) => (
          <BlogCard key={blog?._id} blog={blog} />
        ))}
      </div>
      <div className="mt-10 max-w-xs">
        <h1 className="text-xl text-gray-800 uppercase text-center font-bold mb-3">
          Tags
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {authorTags?.tags?.map((tag) => (
            <li key={tag?._id} className="list-none">
              <button className="border border-gray-200 hover:bg-gray-100 transition-all duration-150 ease-linear capitalize text-gray-800 py-1.5 px-3">
                {tag?.tags_name}
              </button>
            </li>
          ))}
        </div>
        <div className="w-full flex items-center gap-4 px-3 mt-10 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
            htmlFor="post_tags"
          >
            Sort by
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post_tags"
            >
              <option>Last uploads</option>
              <option>First uploads</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
