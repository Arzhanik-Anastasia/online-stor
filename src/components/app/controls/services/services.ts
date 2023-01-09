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
  return Math.floor(totalPrice);
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

export function getPromo(): string[] {
  return JSON.parse(localStorage.getItem('promo') as string) ?? [];
}

export function setPromo(promo: string[]): void {
  localStorage.setItem('promo', JSON.stringify(promo));
}

export function getDiscount(promo: string[]): number | null {
  return promo ? promo.length / 10 : null;
}

export function getIdFromUrl(): number {
  const path: string = window.location.hash;
  const idProduct:number = +path.split('=')[1];
  return idProduct;
}

export function calcDicountPrice(): number {
  const discount: number | null = getDiscount(getPromo());
  return discount ? calcTotalPrice(getProductsInCart()) * (1 - discount) : calcTotalPrice(getProductsInCart());
}
