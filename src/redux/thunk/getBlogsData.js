import { baseURL } from "../../utilities/urls";
import { getBlogs, getSingleBlog } from "../action/blogsActions";

export const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs`);
    const data = await res.json();
    dispatch(getBlogs(data));
  };
};

export const getSingleBlogData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs/${id}`);
    const data = await res.json();
    dispatch(getSingleBlog(data));
  };
};
