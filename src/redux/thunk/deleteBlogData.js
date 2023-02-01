import { toast } from "react-hot-toast";
import { baseURL } from "../../utilities/urls";
import { deleteBlog } from "../action/blogsActions";

const deleteBlogData = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs/${id}`);
    const data = await res.json();

    console.log(id);

    if (data.deletedCount > 0) {
      toast.success("Blog Delete successfully!!");
      dispatch(deleteBlog(data));
    }
  };
};

export default deleteBlogData;
