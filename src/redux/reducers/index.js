import { combineReducers } from "redux";
import hotelReducer from "./hotelReducers";

const rootReducer = combineReducers({
  hotels: hotelReducer,
});

export default rootReducer;
