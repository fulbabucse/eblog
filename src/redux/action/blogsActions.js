import {
  ADD_CONTENT,
  GET_CONTENT,
  TOGGLE_TAGS,
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
