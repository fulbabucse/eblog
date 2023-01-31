import { ADD_AUTHOR,  GET_AUTHORS } from "../actionType/actionTypes";

const initialState = {
  authors: [],
  tags: [],
};

const authorAndTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };
    case GET_AUTHORS:
      return {
        ...state,
        authors: action.payload,
      };
    default:
      return state;
  }
};

export default authorAndTagsReducer;
