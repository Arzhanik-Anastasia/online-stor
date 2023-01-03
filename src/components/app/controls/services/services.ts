import { IProduct } from '../../../../types';

export function findProduct(id: number, data: IProduct[] | []): IProduct {
  return data.find((el: IProduct) => el.id === id) as IProduct;
}

export function calcTotalPrice(productsArr: IProduct[], prop: keyof IProduct): number {
  let totalPrice = 0;
  productsArr.forEach((el: IProduct) => {
    totalPrice += +el[prop];
  });
  return totalPrice;
}

export function getProductsInCart():IProduct[] | [] {
  return localStorage.getItem('cart-products') ? JSON.parse(localStorage.getItem('cart-products') as string) : [];
}

export function setProductsInCart(product: IProduct[]): void {
  localStorage.setItem('cart-products', JSON.stringify(product));
}
