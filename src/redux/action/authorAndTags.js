import { ADD_AUTHOR } from "../actionType/actionTypes";

export const addAuthor = (data) => {
  return {
    type: ADD_AUTHOR,
    payload: data,
  };
};
