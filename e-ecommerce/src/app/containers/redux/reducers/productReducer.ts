//import { IProduct } from './../../../interface/product-interface';
import IAction from '../../../interface/action-interface';
import { ActionTypes } from './../contans/action-types';

const initialState = {
  products: [],

}

export const productReducer = (state = initialState, action : IAction) => {
  switch(action.type) {
    case ActionTypes.SET_PRODUCTS :
      return {...state,products : action.payload};
    case ActionTypes.CATEGORY_PRODUCTS :
      return {...state,products : action.payload};
    default: 
      return state;
  }
}