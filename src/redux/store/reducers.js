import { combineReducers } from "redux";
import blogsReducer from "../reducers/blogsReducers";

const reducers = combineReducers({
  blogs: blogsReducer,
});

export default reducers;
