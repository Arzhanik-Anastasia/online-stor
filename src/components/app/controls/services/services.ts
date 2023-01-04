import data from '../../../../data';
import { ICartProduct, IProduct } from '../../../../types';

export function findProductFromData(id: number):IProduct {
  return data.find((el: IProduct) => el.id === id) as IProduct;
}

export function calcTotalPrice(products: ICartProduct): number {
  let totalPrice = 0;
  Object.keys(products).forEach((key) => {
    const modelProduct = data.find((el: IProduct) => el.id === +key);
    totalPrice += products[`${+key}`] * modelProduct!.price;
  });
  return totalPrice;
}
export function calcTotalCount(products:ICartProduct): number {
  let count = 0;
  Object.keys(products).forEach((key) => {
    count += products[`${+key}`];
  });
  return count;
}

export function getProductsInCart():ICartProduct {
  return localStorage.getItem('cart-products') ? JSON.parse(localStorage.getItem('cart-products') as string) : {};
}

export function setProductsInCart(product: ICartProduct): void {
  localStorage.setItem('cart-products', JSON.stringify(product));
}

export function getIdFromUrl(): number {
  const path: string = window.location.hash;
  const idProduct:number = +path.split('=')[1];
  return idProduct;
}
