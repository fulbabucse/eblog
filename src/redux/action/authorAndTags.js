import { ADD_AUTHOR, GET_AUTHORS } from "../actionType/actionTypes";

export const addAuthor = (data) => {
  return {
    type: ADD_AUTHOR,
    payload: data,
  };
};

export const getAuthors = (authors) => {
  return {
    type: GET_AUTHORS,
    payload: authors,
  };
};
