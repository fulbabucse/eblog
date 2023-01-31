import { ADD_CONTENT } from "../actionType/actionTypes";

const initialState = {
  authors: [],
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        products: [...state.authors, action.payload],
      };
    default:
      return state;
  }
};

export default blogsReducer;
