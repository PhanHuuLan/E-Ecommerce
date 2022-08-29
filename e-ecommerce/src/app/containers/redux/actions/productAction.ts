import IAction from "../../../interface/action-interface"
import { ActionTypes } from "../contans/action-types"

export const setProducts = (products : IAction) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}
export const selectedProducts = (product : IAction) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  }
}
export const removeSelectedProducts = (product : IAction) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  }
}
export const categoryProduct = (product : IAction) => {
  return {
    type: ActionTypes.CATEGORY_PRODUCTS,
    payload: product,
  }
}