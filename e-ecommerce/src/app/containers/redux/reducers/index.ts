import { cartReducer } from './cartReducer';
import { productReducer, selectedProductReducer } from './productReducer';
import { combineReducers } from "redux";

export const reducers = combineReducers( {
  allProducts : productReducer,
  product : selectedProductReducer,
  allCarts : cartReducer,
  
})