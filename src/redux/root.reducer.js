import { combineReducers } from "redux";
import currentUser from "./user/user.reducer";

const RootReducer = combineReducers({
  user: currentUser
});

export default RootReducer;
