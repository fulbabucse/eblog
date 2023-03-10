import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
  GET_SINGLE_BLOG,
  UPDATE_CONTENT,
} from "../actionType/actionTypes";

const initialState = {
  blogs: [],
  blog: {},
  delete: null,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case GET_SINGLE_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        blog: action.payload,
      };
    case DELETE_CONTENT:
      return {
        ...state,
        delete: action.payload,
      };
    default:
      return state;
  }
};

export default blogsReducer;
