import { combineReducers } from "redux";
import authorAndTagsReducer from "../reducers/authorAndTagsReducer";
import blogsReducer from "../reducers/blogsReducers";
import { filterReducer } from "../reducers/filterReducers";

const reducers = combineReducers({
  blogs: blogsReducer,
  authorTags: authorAndTagsReducer,
  filter: filterReducer,
});

export default reducers;
