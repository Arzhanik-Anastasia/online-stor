/* eslint-disable class-methods-use-this */
import data from '../../../../data';
import { ICartProduct, IProduct } from '../../../../types';
import { ProductInCartItem } from '../../view/productInCartItem/productInCartItem';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import {
  getProductsInCart, calcTotalPrice, calcTotalCount,
} from '../services/services';

export class CartPageController {
  private productsInCart: ICartProduct;

  private productDetailsController: ProductDetailsController;

  constructor() {
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
  }

  private renderProducts(): HTMLElement[] {
    return Object.keys(this.productsInCart).map((item, index) => {
      const model = data.find((el: IProduct) => el.id === +item) as IProduct;
      return new ProductInCartItem().createProductItemContainer(model, index);
    });
  }

  public renderCartList(): void {
    const productsInCartListNode = document.querySelector('.products__inCart') as HTMLDivElement;
    productsInCartListNode.innerHTML = '';
    const counterProduct: string[] = Object.keys(this.productsInCart);
    if (counterProduct.length > 0) {
      productsInCartListNode.append(...this.renderProducts());
    } else {
      productsInCartListNode.textContent = 'Нет товаров в корзине';
    }
  }

  private changeCountInControl(id: number): void {
    this.productsInCart = getProductsInCart();
    const counts = document.querySelectorAll('.productInCart__count-in-cart') as NodeListOf<Element>;
    counts.forEach((count) => {
      const attrProduct = Number(count.getAttribute('data-product'));
      if (attrProduct === id) {
        count.innerHTML = String(this.productsInCart[id]);
      }
    });
  }

  private changeCountInSummary(): void {
    const totalCount = document.querySelector('.total__count') as HTMLDivElement;
    totalCount.innerHTML = `Общее количество: ${calcTotalCount(this.productsInCart)}`;
    const totalPrice = document.querySelector('.total__price') as HTMLDivElement;
    totalPrice.innerHTML = `Общая стоимость: ${calcTotalPrice(this.productsInCart)}`;
  }

  private resetIndexes(): void {
    const allIndexes = document.querySelectorAll('.productInCart__index') as NodeListOf<Element>;
    allIndexes.forEach((el, i) => {
      el.innerHTML = `${String(i + 1)}.`;
    });
  }

  private deleteProductItem(id: number): void {
    const allItemsInCart = document.querySelectorAll('.productInCart__item') as NodeListOf<Element>;
    allItemsInCart.forEach((item) => {
      const idDeletedProduct = Number(item.getAttribute('data-product'));
      if (idDeletedProduct === id) {
        item.remove();
      }
      if (!document.querySelector('.productInCart__item')) {
        const productsInCartListNode = document.querySelector('.products__inCart') as HTMLDivElement;
        productsInCartListNode.textContent = 'Нет товаров в корзине';
      }
    });
    this.resetIndexes();
  }

  public incProductCount(id: number): void {
    this.productDetailsController.addToCart(id/* , 'inc' */);
    this.productDetailsController.changeHeaderInfo();
    this.changeCountInControl(id);
    this.changeCountInSummary();
  }

  public decProductCount(id: number): void {
    this.productDetailsController.removeFromCart(id);
    this.productDetailsController.changeHeaderInfo();
    this.changeCountInControl(id);
    this.changeCountInSummary();
    if (!this.productsInCart[id]) {
      this.deleteProductItem(id);
    }
  }
}
