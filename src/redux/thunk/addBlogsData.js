import { toast } from "react-hot-toast";
import { baseURL } from "../../utilities/urls";
import { addBlogs } from "../action/blogsActions";

const addBlogsData = (blogData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Blogs added successfully!!");
      dispatch(addBlogs({ _id: data.insertedId, ...blogData }));
    }
  };
};

export default addBlogsData;
