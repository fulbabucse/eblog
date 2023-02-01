import { TOGGLE_TAGS, UPLOADS_TIME } from "../actionType/actionTypes";

const initialState = {
  tags: [],
  uploadsTime: 0,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAGS:
      if (!state.tags.includes(action.payload)) {
        return {
          ...state,
          tags: [...state.tags, action.payload],
        };
      } else {
        return {
          ...state,
          tags: state.tags.filter((tag) => tag !== action.payload),
        };
      }
    case UPLOADS_TIME:
      return {
        ...state,
        uploadsTime: action.payload,
      };
    default:
      return state;
  }
};
