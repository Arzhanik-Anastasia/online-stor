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
  const tens: number = Math.abs(numb) % 100;
  const ones: number = tens % 10;
  if (tens > 10 && tens < 20) { return `${verb[2]} ${numb} ${titles[2]}`; }
  if (ones > 1 && ones < 5) { return `${verb[1]} ${numb} ${titles[1]}`; }
  if (ones === 1) { return `${verb[0]} ${numb} ${titles[0]}`; }
  return `${verb[2]} ${numb} ${titles[2]}`;
}
