import {
  ADD_CONTENT,
  GET_CONTENT,
  GET_SINGLE_BLOG,
  TOGGLE_TAGS,
  UPDATE_CONTENT,
  UPLOADS_TIME,
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

export const updateBlog = (blog) => {
  return {
    type: UPDATE_CONTENT,
    payload: blog,
  };
};

export const toggleTags = (tagsName) => {
  return {
    type: TOGGLE_TAGS,
    payload: tagsName,
  };
};

export const uploadsTime = (times) => {
  return {
    type: UPLOADS_TIME,
    payload: times,
  };
};

export const getSingleBlog = (blog) => {
  return {
    type: GET_SINGLE_BLOG,
    payload: blog,
  };
};
