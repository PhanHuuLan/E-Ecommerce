import { useState } from 'react';
import { ActionTypes } from "./../contans/action-types";
import { listKeys, setStorage } from "./../../../shared/common/common";
import { getStorage } from "../../../shared/common/common";
import IAction from "../../../interface/action-interface";

//const [quantity, setQuantity] = useState("all")
const initialState = {
  cart: getStorage(listKeys.cart) || [],
};

export const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SET_CARTS:
      return { ...state, products: action.payload };
    case ActionTypes.INSCREASE_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (cartNew[index].quantity <= 9) {
        cartNew[index].quantity += 1;
        setStorage(listKeys.cart, cartNew);
      }
      return {
        ...state,
        cart: [...cartNew],
      };
    }

    case ActionTypes.DESCREASE_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      cartNew[index].quantity -= 1;
      if (cartNew[index].quantity <= 0) {
        cartNew.splice(index, 1);
      }
      setStorage(listKeys.cart, cartNew);
      return {
        ...state,
        cart: [...cartNew],
      };
    }
    case ActionTypes.REMOVE_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      cartNew.splice(index, 1);
      setStorage(listKeys.cart, cartNew);
      return {
        ...state,
        cart: [...cartNew],
      };
    }
    case ActionTypes.INPUT_QUANTITY_CART: {
      const cartNew = [...state.cart];
      const index = cartNew.findIndex(
        (cartItem) => cartItem.id === action.payload.id
        );
        let newQuantity = action.payload.e < 0 ? 1 : action.payload.e 
        && action.payload.e > 10 ? 10 : action.payload.e
        if(newQuantity <= 0 && newQuantity !== '') {
          newQuantity = 1;
        }
        
          cartNew[index].quantity = parseFloat(newQuantity);
          if(cartNew[index].quantity === null) {   
            setStorage(listKeys.cart, cartNew);
          }

    
      return {
        ...state,
        cart: [...cartNew],
      };
    }

    default:
      return state;
  }
};

