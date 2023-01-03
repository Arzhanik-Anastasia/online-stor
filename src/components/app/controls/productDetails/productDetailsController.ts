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

  public changeAddBtnText(id: number): void {
    const addToCartBtn = document.querySelector('.product__to-chart') as HTMLButtonElement;
    let btnText = 'Добавить в корзину' as string;
    if (findProduct(id, this.productsInCart)) {
      btnText = 'Удалить из корзины';
    }
    addToCartBtn.innerText = btnText;
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

  public changeHeaderInfo(): void {
    const headerCart = document.querySelector('.header__count') as HTMLElement;
    const counter = this.productsInCart.length;
    const headerTotalPrice = document.querySelector('.header__total-price') as HTMLDivElement;
    const totalPrice: number = calcTotalPrice(this.productsInCart, 'price');
    headerCart.innerHTML = counter.toString();
    headerTotalPrice.innerHTML = `Cart total: ${totalPrice}`;
  }
}
