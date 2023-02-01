import { TOGGLE_TAGS } from "../actionType/actionTypes";

const initialState = {
  tags: [],
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
    default:
      return state;
  }
};

/**
 * return {
          ...state,
          filters: {
            ...state.filters,
            brands: state.filters.brands.filter(
              (brand) => brand !== action.payload
            ),
          },
        };
 */
