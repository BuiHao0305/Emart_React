import { addCart } from "../action";
import { combineReducers } from "redux";
import handleCart from "./handleCart";

const rootReducers = combineReducers({
  addCart: handleCart,
});

export default rootReducers;
