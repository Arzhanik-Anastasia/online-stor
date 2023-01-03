import { IProduct } from '../../../../types';
import data from '../../../../data';
import {
  findProduct,
  calcTotalPrice,
  setProductsInCart,
  getProductsInCart,
} from '../services/services';

export class ProductDetailsController {
  private allProducts: IProduct[] | [];

  private productsInCart: IProduct[];

  constructor() {
    this.allProducts = data;
    this.productsInCart = getProductsInCart();
  }

  public changeSrcOfMainImg(currentImg: string): void {
    const productImgBlockNode = document.querySelector('.product__image') as HTMLElement;
    productImgBlockNode.setAttribute('src', currentImg);
    console.log(this.allProducts);
  }

  public addToCart(id: number): void {
    this.productsInCart = getProductsInCart();
    this.productsInCart.push(findProduct(id, this.allProducts));
    setProductsInCart(this.productsInCart);
  }

  public changeHeaderInfo(): void {
    const headerCart = document.querySelector('.header__count') as HTMLElement;
    const counter = this.productsInCart.length;
    const headerTotalPrice = document.querySelector('.header__total-price') as HTMLDivElement;
    const totalPrice: number = calcTotalPrice(this.productsInCart, 'price');
    headerCart.innerHTML = counter.toString();
    headerTotalPrice.innerHTML = `Cart total: ${totalPrice}`;
  }
}
