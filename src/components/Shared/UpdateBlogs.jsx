import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import addBlogsData from "../../redux/thunk/addBlogsData";
import getAuthorsData from "../../redux/thunk/getAuthor";
import { getSingleBlogData } from "../../redux/thunk/getBlogsData";
import getTagsData from "../../redux/thunk/getTagsData";

const UpdateBlogs = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthorsData());
    dispatch(getTagsData());
    dispatch(getSingleBlogData(id));
  }, [dispatch]);
  const { authorTags, blogs } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    title,
    author_name,
    post_thumb,
    post_body,
    post_tags,
    post_important,
  } = blogs.blog;

  const handleUpdateBlog = (blogData) => {
    setLoading(true);
    const blog = {
      title: blogData.post_title,
      author_name: blogData.author_name,
      post_thumb: blogData.post_thumb,
      post_body: blogData.post_body,
      post_tags: blogData.post_tags,
      post_important: blogData.post_important,
      posted_date: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      createAt: Date.now(),
    };
    console.log(blog);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-center my-3 text-gray-800 text-xl font-semibold uppercase">
        Update Blog
      </h1>
      <form onSubmit={handleSubmit(handleUpdateBlog)} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_title"
            >
              Post Title
            </label>
            <input
              {...register("post_title", {
                required: "Title is required",
              })}
              defaultValue={title}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post_title"
              type="text"
              placeholder="Post Title"
            />
            {errors.post_title && (
              <p className="text-red-400 text-xs font-medium">
                {errors.post_title?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="author_name"
            >
              Author
            </label>
            <div className="relative">
              <select
                {...register("author_name", {
                  required: "Author Name is required",
                })}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="author_name"
              >
                <option>{author_name}</option>

                {authorTags?.authors?.map((author) => (
                  <option key={author?._id}>{author?.author_name}</option>
                ))}
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
              {errors.author_name && (
                <p className="text-red-400 text-xs font-medium">
                  {errors.author_name?.message}
                </p>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_thumb"
            >
              Thumbnail
            </label>
            <input
              {...register("post_thumb", {
                required: "Thumbnail is required",
              })}
              defaultValue={post_thumb}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post_thumb"
              type="text"
              placeholder="Thumbnail"
            />
            {errors.post_thumb && (
              <p className="text-red-400 text-xs font-medium">
                {errors.post_thumb?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full lg:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_body"
            >
              Post Body
            </label>
            <textarea
              {...register("post_body", {
                required: "Body is required",
              })}
              defaultValue={post_body}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post_body"
              type="text"
              placeholder="Post Body"
            />
            {errors.post_body && (
              <p className="text-red-400 text-xs font-medium">
                {errors.post_body?.message}
              </p>
            )}
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_important_note"
            >
              Post Important Note
            </label>
            <textarea
              {...register("post_important", {
                required: "Important is required",
              })}
              defaultValue={post_important}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post_important_note"
              type="text"
              placeholder="Post Important Note"
            />
            {errors.post_important && (
              <p className="text-red-400 text-xs font-medium">
                {errors.post_important?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="post_tags"
            >
              Tags
            </label>
            <div className="relative">
              <select
                {...register("post_tags", {
                  required: "Author Name is required",
                })}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="post_tags"
              >
                <option>{post_tags}</option>
                {authorTags?.tags?.map((tags) => (
                  <option value={tags?.tags_link} key={tags?._id}>
                    {tags?.tags_name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
                {errors.post_tags && (
                  <p className="text-red-400 text-xs font-medium">
                    {errors.post_tags?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center justify-end gap-4">
          <button
            className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
            type="reset"
          >
            Reset
          </button>
          {loading ? (
            <div>
              <button
                className=" flex items-center gap-1 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded"
                type="submit"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                  <span className="sr-only">Loading...</span>
                </div>
                Processing...
              </button>
            </div>
          ) : (
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
              type="submit"
            >
              Blog Post
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateBlogs;
