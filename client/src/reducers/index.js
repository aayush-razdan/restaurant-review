import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import restaurantReducer from "./restaurantReducer";
import cityReducer from "./cityReducer";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  blog: blogReducer,
  restaurant: restaurantReducer,
  city: cityReducer,
});
