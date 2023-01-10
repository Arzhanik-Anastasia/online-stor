import { ICartProduct } from '../../../../types';
import {
  calcTotalCount,
  setProductsInCart,
  getProductsInCart,
  calcDicountPrice,
} from '../services/services';

export class ProductDetailsController {
  private productsInCart: ICartProduct;

  constructor() {
    this.productsInCart = getProductsInCart();
  }

  // eslint-disable-next-line class-methods-use-this
  public changeSrcOfMainImg(currentImg: string): void {
    const productImgBlockNode = document.querySelector('.product__image') as HTMLElement;
    productImgBlockNode.setAttribute('src', currentImg);
  }

  public changeAddBtnText(id: number, selector: string): void {
    this.productsInCart = getProductsInCart();
    const addToCartBtn = document.querySelectorAll(selector) as NodeListOf<Element>;
    let btnText = 'Добавить в корзину' as string;
    if (this.productsInCart[id]) {
      btnText = 'Удалить из корзины';
    }
    addToCartBtn.forEach((btn) => {
      if (Number(btn.getAttribute('data-product')) === id) {
        btn.innerHTML = btnText;
      }
    });
  }

  public addToCart(id: number): void {
    this.productsInCart = getProductsInCart();
    if (!this.productsInCart[id]) {
      this.productsInCart[id] = 1;
    } else {
      this.productsInCart[id] = this.productsInCart[`${id}`] + 1;
    }
    setProductsInCart(this.productsInCart);
  }

  public removeFromCart(id: number): void {
    this.productsInCart[id] = this.productsInCart[`${id}`] - 1;
    if (this.productsInCart[id] === 0) {
      delete this.productsInCart[id];
    }
    setProductsInCart(this.productsInCart);
  }

  public changeHeaderInfo(): void {
    this.productsInCart = getProductsInCart();
    const headerCart = document.querySelector('.header__count') as HTMLElement;
    const counter: number = calcTotalCount(this.productsInCart);
    const headerTotalPrice = document.querySelector('.header__total-price') as HTMLDivElement;
    const dicountPrice: number = Math.floor(calcDicountPrice());
    headerCart.innerHTML = counter.toString();
    headerTotalPrice.innerHTML = `Cart total: ${dicountPrice}`;
  }
}
