import {
  ADD_CONTENT,
  GET_CONTENT,
  TOGGLE_TAGS,
} from "../actionType/actionTypes";

export const addBlogs = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};

export const getBlogs = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};

export const toggleTags = (tagsName) => {
  return {
    type: TOGGLE_TAGS,
    payload: tagsName,
  };
};
