import { baseURL } from "../../utilities/urls";
import { getBlogs } from "../action/blogsActions";

const getBlogsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs`);
    const data = await res.json();
    dispatch(getBlogs(data));
  };
};

export default getBlogsData;
