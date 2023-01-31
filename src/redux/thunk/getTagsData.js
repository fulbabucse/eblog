import { baseURL } from "../../utilities/urls";
import { getTags } from "../action/authorAndTags";

const getTagsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/admin/tags`);
    const data = await res.json();
    dispatch(getTags(data));
  };
};

export default getTagsData;
