import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiProducts, categoryProduct } from "../../../apis/data";
import { setProducts } from "../../../containers/redux/actions/productAction";
import { IProduct } from "../../../interface/product-interface";
import { IRootState } from "../../../interface/state-interface";
import Product from "./Product";


const ProductList : React.FC = () => {
  
  const products = useSelector((state : IRootState ) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response : any = await apiProducts()
    .catch((err) => {
      console.log("ERROR",err);  
    })
    dispatch(setProducts(response.data) );
  }

  useEffect(() => {
    fetchProducts()
  },[products]);
  
  const[data, setData] = useState(products);
  const filterResult = (catItem : any) => {
    const result = products.filter((curDate : any) => {
        return curDate.category === catItem;
    });
    setData(result);
  }
  
  if(data.length === 0) {  
    data.push(...products)
  }
  
  return (
    <section className="section-collection">
      <div className="container">
      <h3 className="collection-title">Latest Products Collection</h3>
      <div className="row">
              <div className="col">
                  <button className='btn' onClick={() => setData(products)}>All</button>
                  <button className='btn' onClick={() => filterResult("electronics")}>electronics</button>
                  <button className='btn' onClick={() => filterResult("jewelery")}>jewelery</button>
                  <button className='btn' onClick={() => filterResult("men's clothing")}>men's clothing</button>
                  <button className='btn' onClick={() => filterResult( "women's clothing")}>women's clothing</button>
              </div>
      </div>
      <ul className="product-list row ">
        <Product {...data} />
      </ul>
      </div>
    </section>
  )
}
export default ProductList;