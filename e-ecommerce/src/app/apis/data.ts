import axios from "axios";


export const apiProducts  = () => axios.get('https://fakestoreapi.com/products');
export const categoryProduct = () => axios.get('https://fakestoreapi.com/products/categories');