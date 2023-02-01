import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AdminDashboard from "../layouts/AdminDashboard";
import PostBlogs from "../components/Dashboard/Blogs/PostBlogs";
import AllBlogs from "../components/Dashboard/Blogs/AllBlogs";
import BlogDetails from "../components/Shared/BlogDetails";
import Author from "../components/Dashboard/Author/Author";
import Tags from "../components/Dashboard/Tags/Tags";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "dashboard",
    element: <AdminDashboard />,
    children: [
      { path: "/dashboard/post-blog", element: <PostBlogs /> },
      { path: "/dashboard/all-blogs", element: <AllBlogs /> },
      { path: "/dashboard/author", element: <Author /> },
      { path: "/dashboard/tags", element: <Tags /> },
    ],
  },
]);
