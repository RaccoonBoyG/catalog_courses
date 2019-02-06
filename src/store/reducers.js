import { combineReducers } from "redux";
import cards from "./cards/reducer";
import about from "./about/reducer";
import organizations from "./organizations/reducer";
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  cards,
  about,
  organizations
});