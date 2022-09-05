import React from "react";
import CartItem from "./CartItem";
import { handleSubTotal } from "../../common/base"; 

const CartList: React.FC = () => {
  
  return (
    <section className="cart">
        <div className="container">
          <h1>Shopping Cart</h1>

          <div className="shopping-cart">
            <div className="column-labels">
              <label className="product-image">Image</label>
              <label className="product-details">Product</label>
              <label className="product-price">Price</label>
              <label className="product-quantity">Quantity</label>
              <label className="product-removal">Remove</label>
              <label className="product-line-price">Total</label>
            </div>
            <ul className="js-cart-list">
              <CartItem/>
            </ul>
            <div className="totals">
              <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">
                {handleSubTotal().toFixed(2)}
                </div>
              </div>
              <div className="totals-item">
                <label>Tax (5%)</label>
                <div className="totals-value" id="cart-tax">
                  3.60
                </div>
              </div>
              <div className="totals-item">
                <label>Shipping</label>
                <div className="totals-value" id="cart-shipping">
                  15.00
                </div>
              </div>
              <div className="totals-item totals-item-total">
                <label>Grand Total</label>
                <div className="totals-value" id="cart-total">
                  {(handleSubTotal() + 3.60 + 15.00).toFixed(2)}
                </div>
              </div>
            </div>
            <button className="checkout">Checkout</button>
          </div>
        </div>
    </section>
  );
};

export default CartList;
