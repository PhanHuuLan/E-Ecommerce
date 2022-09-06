import IAction from "../../../interface/action-interface"
import { ActionTypes } from "../contans/action-types"


export const setCarts = (products : IAction) => {
  return {
    type: ActionTypes.SET_CARTS,
    payload: products,
  }
}

export const updateInscreaseCart = (id: number) => {
  return {
    type: ActionTypes.INSCREASE_CART,
    payload: id
  }
};

export const updateDescreaseCart = (id: number) => {
  return {
    type: ActionTypes.DESCREASE_CART,
    payload: id
  }
};
export const removeCart = (id: number) => {
  return {
    type: ActionTypes.REMOVE_CART,
    payload: id
  }
};
export const updateInputCart = (id: number, e : any) => {
  return {
    type: ActionTypes.INPUT_QUANTITY_CART,
    payload: {id, e},
  }
};