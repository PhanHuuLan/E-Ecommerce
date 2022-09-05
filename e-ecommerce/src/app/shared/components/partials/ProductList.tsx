import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiProducts } from "../../../apis/data";
import { setProducts } from "../../../containers/redux/actions/productAction";
import { IRootState } from "../../../interface/state-interface";
import Loader from "./Loader";
import Product from "./Product";

const ProductList: React.FC = () => {
  const products = useSelector(
    (state: IRootState) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response: any = await apiProducts().catch((err) => {
      console.log("ERROR", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [products]);

  const [data, setData] = useState(products);
  const filterResult = (catItem: any) => {
    const result = products.filter((curDate: any) => {
      return curDate.category === catItem;
    });
    setData(result);
  };

  if (data.length === 0) {
    data.push(...products);
  }
  const handleCategoryChange = (event: any) => {
    filterResult(event.target.value);
  };
  return (
    <section className="section-collection">
      <div className="container">
        <div className="collection-header">
          <h3 className="collection-title">Latest Products Collection</h3>
          <div className="category-product">
            <select
              name="category-list"
              id="category-list"
              onChange={handleCategoryChange}
            >
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
          </div>
        </div>
        <ul className="product-list row ">
        {Object.keys(data).length === 0 ? (
          <Loader/>
        ) : (
          <Product {...data} />
        )}
        </ul>
      </div>
    </section>
  );
};
export default ProductList;
