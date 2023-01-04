import { IProduct } from '../../../../types';
import data from '../../../../data';
import {
  findProduct,
  calcTotalPrice,
  setProductsInCart,
  getProductsInCart,
  getEachProductCount,
} from '../services/services';

export class ProductDetailsController {
  private allProducts: IProduct[] | [];

  private productsInCart: IProduct[];

  constructor() {
    this.allProducts = data;
    this.productsInCart = getProductsInCart();
  }

  // eslint-disable-next-line class-methods-use-this
  public changeSrcOfMainImg(currentImg: string): void {
    const productImgBlockNode = document.querySelector('.product__image') as HTMLElement;
    productImgBlockNode.setAttribute('src', currentImg);
  }

  public changeAddBtnText(id: number, selector: string): void {
    const addToCartBtn = document.querySelectorAll(selector) as NodeListOf<Element>;
    let btnText = 'Добавить в корзину' as string;
    if (findProduct(id, this.productsInCart)) {
      btnText = 'Удалить из корзины';
    }
    addToCartBtn.forEach((btn) => {
      if (Number(btn.getAttribute('data-product')) === id) {
        btn.innerHTML = btnText;
      }
    });
  }

  public addToCart(id: number, flag: string): void {
    this.productsInCart = getProductsInCart();
    if (!findProduct(id, this.productsInCart)) {
      this.productsInCart.push(findProduct(id, this.allProducts));
    } else if (flag === 'byCart') {
      this.productsInCart = this.productsInCart.filter((el) => el.id !== id);
    } else if (flag === 'inc') {
      this.productsInCart.push(findProduct(id, this.allProducts));
    }
    setProductsInCart(this.productsInCart);
  }

  public removeFromCart(id: number): void {
    const countProduct = getEachProductCount(this.productsInCart, id);
    this.productsInCart = this.productsInCart.filter((el: IProduct) => el.id !== id);
    for (let i = 0; i < countProduct - 1; i++) {
      this.productsInCart.push(findProduct(id, this.allProducts));
    }
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
