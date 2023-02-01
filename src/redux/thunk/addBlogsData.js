import { toast } from "react-hot-toast";
import UpdateBlogs from "../../components/Shared/UpdateBlogs";
import { baseURL } from "../../utilities/urls";
import { addBlogs } from "../action/blogsActions";

export const addBlogsData = (blogData) => {
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

export const updateBlogData = (id, updateData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/blogs/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Blogs update successfully!!");
      dispatch(UpdateBlogs({ _id: data.insertedId, ...updateData }));
    }
  };
};
