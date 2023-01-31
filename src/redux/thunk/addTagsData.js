import { toast } from "react-hot-toast";
import { baseURL } from "../../utilities/urls";
import { addTags } from "../action/authorAndTags";

const addTagsData = (tagsData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/admin/tags`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tagsData),
    });
    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Tags added successfully!!");
      dispatch(addTags({ _id: data.insertedId, ...tagsData }));
    }
  };
};

export default addTagsData;
