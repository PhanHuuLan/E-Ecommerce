import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../partials/Cart";
import ProductDetail from "../partials/ProductDetail";
import ProductList from "../partials/ProductList";

const Main : React.FC = () => {
  return (
      
    <main>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/product/:productId" element={<ProductDetail/>} />
          <Route path="/cart/all" element={<Cart/>} />
        </Routes>
    </main>
     
  );
};
export default Main;
