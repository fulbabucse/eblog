import { toast } from "react-hot-toast";
import { baseURL } from "../../utilities/urls";
import { addAuthor } from "../action/authorAndTags";

const addAuthorData = (authorData) => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/admin/authors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(authorData),
    });
    const data = await res.json();

    if (data.acknowledged) {
      toast.success("Author added successfully!!");
      dispatch(addAuthor({ _id: data.insertedId, ...authorData }));
    }
  };
};

export default addAuthorData;
