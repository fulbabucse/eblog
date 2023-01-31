import {
  ADD_AUTHOR,
  ADD_TAGS,
  GET_AUTHORS,
  GET_TAGS,
} from "../actionType/actionTypes";

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

export const addTags = (tags) => {
  return {
    type: ADD_TAGS,
    payload: tags,
  };
};

export const getTags = (tags) => {
  return {
    type: GET_TAGS,
    payload: tags,
  };
};
