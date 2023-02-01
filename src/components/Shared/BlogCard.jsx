import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, post_thumb, author_name, title, posted_date } = blog;

  return (
    <div className="relative blog-card h-72 bg-gray-300">
      <figure className="blog-thumb">
        <img className="w-full h-72" src={post_thumb} alt="Shoes" />
      </figure>
      <div className="bg-white absolute bottom-0 w-64 py-2 pr-2">
        <Link
          to={`/blogs/${_id}`}
          className="text-md font-semibold leading-5 hover:text-blue-500 hover:underline"
        >
          {title.length > 30 ? `${title.slice(0, 30)}...` : title}
        </Link>
        <div className="flex items-center gap-4 mt-3 text-sm">
          <p>by {author_name}</p>
          <span>|</span>
          <p>{posted_date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
