import { productReducer } from './productReducer';
import { combineReducers } from "redux";

export const reducers = combineReducers( {
  allProducts : productReducer,
})