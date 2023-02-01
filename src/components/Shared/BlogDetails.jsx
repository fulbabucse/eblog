import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlogData } from "../../redux/thunk/getBlogsData";

const BlogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlogData(id));
  }, [dispatch, id]);

  const blog = useSelector((state) => state.blogs.blog);

  const {
    title,
    author_name,
    post_thumb,
    post_body,
    post_tags,
    post_important,
    posted_date,
  } = blog;

  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative px-4 lg:px-0">
          <figure className="lg:h-[80vh] w-full">
            <img
              src={post_thumb}
              className="w-full h-full object-cover  lg:rounded"
              alt={title}
            />
          </figure>
          <div className="lg:absolute lg:-bottom-10 bg-white lg:w-5/6 py-5">
            <p className="bg-gray-800 text-white px-2 py-1 w-32 grid justify-center mb-2 rounded-md text-sm capitalize">
              {post_tags}
            </p>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              {title}
            </h2>
            <div className="flex items-center gap-4 text-sm mt-1">
              <p>{posted_date}</p>
              <span>|</span>
              <p>10 Comments</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 lg:mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{post_body}</p>

            <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
              {post_important}
            </div>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {author_name}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">Author</p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Mike writes about technology Yourself required no at thoughts
                delicate landlord it be. Branched dashwood do is whatever it.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-slate-700 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetails;
