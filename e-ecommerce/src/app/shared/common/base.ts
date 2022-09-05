import { IProduct } from './../../interface/product-interface';
import { getStorage, listKeys } from './common';


export const handleSubTotal = () => {
  const cart : IProduct[] = getStorage(listKeys.cart);

  let total : number = 0;
  cart.forEach(function (product) {
    total += +(product.price * product.quantity).toFixed(2);
  });
  return total;
  
}
