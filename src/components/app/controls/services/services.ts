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
  return Object.values(products).reduce((acc, curr) => acc + curr, 0);
}

export function getProductsInCart():ICartProduct {
  return JSON.parse(localStorage.getItem('cart-products') as string) ?? {};
}

export function setProductsInCart(product: ICartProduct): void {
  localStorage.setItem('cart-products', JSON.stringify(product));
}

export function getIdFromUrl(): number {
  const path: string = window.location.hash;
  const idProduct:number = +path.split('=')[1];
  return idProduct;
}

export function declOfNum(verb: string[], numb: number, titles: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${verb[(numb % 100 > 4 && numb % 100 < 20) ? 2 : cases[(numb % 10 < 5) ? numb % 10 : 5]]}
  ${numb}
  ${titles[(numb % 100 > 4 && numb % 100 < 20) ? 2 : cases[(numb % 10 < 5) ? numb % 10 : 5]]}`;
}
