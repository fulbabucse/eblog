import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiOutlineTags, AiOutlineHome } from "react-icons/ai";
import { FaUserEdit, FaBlogger } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Admin</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard"
                    className="text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                  >
                    <AiOutlineHome />
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/post-blog"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                        : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                    }
                  >
                    <BsFilePost />
                    <span>Post Blog</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/all-blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                        : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                    }
                  >
                    <FaBlogger />
                    <span>All Blogs</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/author"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                        : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                    }
                  >
                    <FaUserEdit />
                    <span>Author</span>
                  </NavLink>
                </li>
                <li className="rounded-sm">
                  <NavLink
                    to="/dashboard/tags"
                    className={({ isActive }) =>
                      isActive
                        ? "isActive text-sm py-3 px-3 font-medium tracking-widest rounded-md flex items-center gap-1"
                        : "text-sm py-3 px-3 font-medium  block tracking-widest hover:bg-gray-100 hover:text-[rgba(76, 78, 100, 0.87)] rounded-md flex items-center gap-1"
                    }
                  >
                    <AiOutlineTags />
                    <span>Tags</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 ml-6">
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total users
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                12,00
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Profit
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                $ 450k
              </div>
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Orders
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                20k
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
