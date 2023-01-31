import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/Shared/BlogCard";

const Home = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4 lg:px-0">
      {[...Array(10)]?.map((_, index) => (
        <BlogCard key={index} />
      ))}
    </div>
  );
};

export default Home;
