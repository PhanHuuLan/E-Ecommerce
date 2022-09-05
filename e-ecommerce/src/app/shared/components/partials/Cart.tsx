import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../interface/state-interface";
import CartEmpty from "./CartEmpty";
import CartList from "./CartList";

const Cart : React.FC = () => {
  const cart = useSelector((state: IRootState) => state.allCarts.cart);

  const renderCart = () => {
    if(cart.length > 0) {
      return (
        <CartList/>
      )
    }
    else {
      return (
        <CartEmpty/>
      )
    }
  }
  return <>{renderCart()}</>
  
}

export default Cart;