
import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IProduct } from "../../../interface/product-interface";
//import { IRootState } from "../../../interface/state-interface";

const Product : React.FC = (props) => {
    //const products = useSelector((state : IRootState ) => state.allProducts.products);



    const data : any = Object.values(props);
    
    
    const renderList : IProduct[] = data.map((product : IProduct) => {
    
      
      const {id, title, image, price, category} = product;
      
      return (
        <li className="product-item col-3" key={id}>
          <Link to={`/product.${id}`}>     
            <div className="card">
              <a href="" className="card-link">
                <div className="image-product">
                  <img src={image} alt={title} className="image" />
                </div>
                <div className="card-content">
                  <h4 className="card-title">{title.toUpperCase()}</h4>
                  <span className="card-price">{price}$</span>
                  <p className="card-category">{category}</p>
                </div>
                {/* <button className="btn btn-addToCart">ADD TOO CART</button> */}
              </a>
            </div>
          </Link>
        </li>
      )
    })
    
    
  return <>
      {renderList}
    </>
}

export default Product;