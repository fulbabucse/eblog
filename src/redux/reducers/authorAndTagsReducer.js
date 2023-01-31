import {
  ADD_AUTHOR,
  ADD_TAGS,
  GET_AUTHORS,
  GET_TAGS,
} from "../actionType/actionTypes";

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
    case ADD_TAGS:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };

    case GET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

export default authorAndTagsReducer;
