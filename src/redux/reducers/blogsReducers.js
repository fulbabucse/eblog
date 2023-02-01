import { ADD_CONTENT, GET_CONTENT } from "../actionType/actionTypes";

const initialState = {
  blogs: [],
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
    default:
      return state;
  }
};

export default blogsReducer;
