import { ADD_AUTHOR } from "../actionType/actionTypes";

const initialState = {
  authors: [],
};

const authorAndTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };
    default:
      return state;
  }
};

export default authorAndTagsReducer;
