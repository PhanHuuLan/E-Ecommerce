import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailProduct } from "../../../apis/data";
import { selectedCart } from "../../../containers/redux/actions/cartAction";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../../../containers/redux/actions/productAction";
import { IProduct } from "../../../interface/product-interface";
import { IRootState } from "../../../interface/state-interface";
import { getStorage, listKeys, setStorage } from "../../common/common";
import Loader from "./Loader";

const ProductDetail: React.FC = () => {
  const product = useSelector((state: IRootState) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchDetailProducts = async () => {
    const response: any = await detailProduct(productId).catch((err) => {
      console.log("ERROR", err);
    });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchDetailProducts();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  let [quantity, setQuantity] = useState(+1);

  const handleIncreaseQuantity = () => {
    if (quantity < 10) {
      quantity = quantity + 1;
      setQuantity(quantity);
    }
  };
  const handleReuceQuantity = () => {
    if (quantity > 1) {
      quantity = quantity - 1;
      setQuantity(quantity);
    }
  };
  const handleInputQuantity = (e : any) => {
    const value : any = e.target.value;
    const newValue : any = value < 0 ? 1 : value && value > 10 ? 10 : value;
    setQuantity(newValue);
   
  };
  const handleAddToBad = (id: number) => {
    if (quantity > 10) {
      setQuantity(10);
      quantity = 10;
    } else if (quantity <= 0) {
      setQuantity(1);
      quantity = 1;
    }
    let cart: IProduct[] = getStorage(listKeys.cart);
    const existProduct: IProduct | undefined = cart.find(function (
      element: IProduct
    ) {
      return +element.id === +id;
    });
    if (!existProduct) {
      const newProductCart: IProduct = { ...product, quantity: quantity };
      cart.push(newProductCart);
    } else {
      cart[cart.indexOf(existProduct)].quantity += +quantity;
    }
    setStorage(listKeys.cart, cart);
    dispatch(selectedCart(product))
  };

  const { id, image, title, price, description, category } = product;

  return (
    <section className="section-detail">
      <div className="container">
        {Object.keys(product).length === 0 ? (
          <Loader/>
        ) : (
          <ul className="row detail-list">
            <li className="col-5 detail-item wrapper-detail">
              <div className="image-detail">
                <img src={image} alt={title} className="image" />
              </div>
            </li>
            <li className="col-7 detail-item">
              <div className="card-detail">
                <span className="detail-category">{category}</span>
                <h3 className="detail-title">{title}</h3>
                <span className="detail-price">Price: {price}$</span>
                <p className="detail-desc">Description: {description}</p>
                <div className="detail-quantity">
                  <button
                    onClick={handleReuceQuantity}
                    className="btn btn-quantity btn-reduce"
                  >
                    -
                  </button>
                  <input
                    min={1}
                    onChange={(e) => handleInputQuantity(e)}
                    className="input-quantity"
                    type="number"
                    value={quantity}
                  />
                  <button
                    onClick={handleIncreaseQuantity}
                    className="btn  btn-quantity "
                  >
                    +
                  </button>
                </div>
                <Link reloadDocument to={"/cart/all"}>
                  <button
                    onClick={() => handleAddToBad(id)}
                    className="btn btn-bag"
                  >
                    Add to Bag
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
