import { combineReducers } from "redux";
import cards from "./cards/reducer";
import about from "./about/reducer";

export default combineReducers({
  cards,
  about
});