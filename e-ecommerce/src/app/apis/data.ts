import axios from "axios";


export const apiProducts  = () => axios.get('https://fakestoreapi.com/products');
export const detailProduct = (id : string | undefined ) => axios.get(`https://fakestoreapi.com/products/${id}`);