import { ADD_CONTENT, GET_CONTENT } from "../actionType/actionTypes";

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
