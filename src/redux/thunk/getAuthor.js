import { baseURL } from "../../utilities/urls";
import { getAuthors } from "../action/authorAndTags";

const getAuthorsData = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${baseURL}/admin/authors`);
    const data = await res.json();
    dispatch(getAuthors(data));
  };
};

export default getAuthorsData;
