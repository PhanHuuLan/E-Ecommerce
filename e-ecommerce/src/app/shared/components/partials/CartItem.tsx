import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCart,
  updateDescreaseCart,
  updateInputCart,
  updateInscreaseCart,
} from "../../../containers/redux/actions/cartAction";
import { IRootState } from "../../../interface/state-interface";
import { handleSubTotal } from "../../common/base";
import Loader from "./Loader";

const CartItem: React.FC = (props) => {
  const products = useSelector((state: IRootState) => state.allCarts.cart);
  const dispatch = useDispatch();

  
  const updateQuantityCartItem = (action: string, id: number) => {
    switch (action) {
      case "inscrease":
        dispatch(updateInscreaseCart(id));
        break;
      case "descrease":
        dispatch(updateDescreaseCart(id));
        break;
      default:
        throw new Error("Invalid action");
    }
    handleSubTotal();
  };

  const removeCartItem = (id: number) => {
    dispatch(removeCart(id));
  };
  const updateInputQuantityCart = (id: number, e : any) =>  {
    
    dispatch(updateInputCart(id,e.target.value))
  }
  const renderCart: any  = () => products.map((product: any) => {
    const { id, title, image, price, category, quantity } = product;

    return (
      <li key={id} className="cart-item">
        {Object.keys(products).length === 0 ? (
          <Loader />
        ) : (
          <div className="product">
            <div className="product-image">
              <img src={image} />
            </div>
            <div className="product-details">
              <h4 className="product-title">{title}</h4>
              <span className="product-category">{category}</span>
            </div>
            <span className="product-price">{price}</span>
            <div className="product-quantity">
              <button
                onClick={() => updateQuantityCartItem("descrease", id)}
                className="btn-reduce btn-change"
              >
                -
              </button>
              <input onChange={(e) => updateInputQuantityCart(id, e)} className="input-quantity" type="number" value={quantity} />
              <button
                onClick={() => updateQuantityCartItem("inscrease", id)}
                className="btn-raise btn-change"
              >
                +
              </button>
            </div>
            <div className="product-removal">
              <button
                onClick={() => removeCartItem(id)}
                className="remove-product"
              >
                Remove
              </button>
            </div>
            <span className="product-line-price">
              {(price * quantity).toFixed(2)}$
            </span>
          </div>
        )}
      </li>
    );
  });
  return <>{renderCart()}</>;
};
export default CartItem;
