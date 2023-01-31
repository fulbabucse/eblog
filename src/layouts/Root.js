import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
