import { combineReducers } from "redux";
import authorAndTagsReducer from "../reducers/authorAndTagsReducer";
import blogsReducer from "../reducers/blogsReducers";

const reducers = combineReducers({
  blogs: blogsReducer,
  authorTags: authorAndTagsReducer,
});

export default reducers;
