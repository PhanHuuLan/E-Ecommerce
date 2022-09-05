import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product-interface";

const Product: React.FC = (props) => {

  const data: any = Object.values(props);

  const renderList: IProduct[] = data.map((product: IProduct) => {
    const { id, title, image, price, category } = product;

    return (
      <li className="product-item col-3" key={id}>
        <Link to={`/product/${id}`}>
          <div className="card">
            <div className="image-product">
              <img src={image} alt={title} className="image" />
            </div>
            <div className="card-content">
              <h4 className="card-title">{title.toUpperCase()}</h4>
              <span className="card-price">{price}$</span>
              <p className="card-category">{category}</p>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  return <>{renderList}</>;
};

export default Product;
