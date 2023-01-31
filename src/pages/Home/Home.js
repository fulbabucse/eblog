import React from "react";
import BlogCard from "../../components/Shared/BlogCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-4 lg:px-0">
      {[...Array(10)]?.map(() => (
        <BlogCard />
      ))}
    </div>
  );
};

export default Home;
