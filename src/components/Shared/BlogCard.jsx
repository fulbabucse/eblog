import React from "react";
import { Link } from "react-router-dom";
import blogThumb from "../../assets/blog-thumb.jpg";

const BlogCard = () => {
  return (
    <div className="relative blog-card h-96">
      <figure className="blog-thumb">
        <img className="w-full" src={blogThumb} alt="Shoes" />
      </figure>
      <div className="bg-white absolute bottom-10 w-80 py-4">
        <Link
          to="/blog-details"
          className="text-lg font-medium leading-5 hover:text-blue-500 hover:underline"
        >
          No Bad Blood! The Reason Why Tamr Judge Finally Made Up With
        </Link>
        <div className="flex items-center gap-4 mt-3 text-sm">
          <p>by Fahim Islam</p>
          <span>|</span>
          <p>30 Jan 2023</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
