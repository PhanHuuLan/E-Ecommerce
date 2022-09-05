import React from "react";

const CartEmpty : React.FC = () => {
  return (
    <section className="cart-empty">
      <div className="container">
        <p className="empty-text">There are no products in the shopping cart.</p>
        <a href="/" className="btn btn-empty empy-link">Home</a>
      </div>
    </section>
  )

}
export default CartEmpty;