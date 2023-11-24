import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./slice";

const store = configureStore(resultReducer);

export default store;
