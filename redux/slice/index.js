import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const resultReducer = combineReducers({
  user: userSlice,
});

export default resultReducer;
