import { IProduct } from '../../../../types';
import { ProductInCartItem } from '../../view/productInCartItem/productInCartItem';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import {
  findProduct, uniqCartArr, getProductsInCart, getEachProductCount, calcTotalPrice,
} from '../services/services';

export class CartPageController {
  private productsInCart: IProduct[] | [] | never;

  private productDetailsController: ProductDetailsController;

  constructor() {
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
  }

  private renderProducts(): HTMLElement[] {
    return uniqCartArr(this.productsInCart).map((el: IProduct, i: number) => new ProductInCartItem()
      .createProductItemContainer(el, i));
  }

  public renderCartList(): void {
    const productsInCartListNode = document.querySelector('.products__inCart') as HTMLDivElement;
    productsInCartListNode.innerHTML = '';
    if (this.productsInCart.length > 0) {
      productsInCartListNode.append(...this.renderProducts());
    } else {
      productsInCartListNode.textContent = 'Нет товаров в корзине';
    }
  }

  private changeCountInControl(id: number): void {
    this.productsInCart = getProductsInCart();
    const counts = document.querySelectorAll('.productInCart__count-in-cart') as NodeListOf<Element>;
    counts.forEach((count) => {
      if (Number(count.getAttribute('data-product')) === id) {
        count.innerHTML = String(getEachProductCount(this.productsInCart, id));
      }
    });
  }

  private changeCountInSummary(): void {
    const totalCount = document.querySelector('.total__count') as HTMLDivElement;
    totalCount.innerHTML = `Общее количество: ${String(this.productsInCart.length)}`;
    const totalPrice = document.querySelector('.total__price') as HTMLDivElement;
    totalPrice.innerHTML = `Общая стоимость: ${String(calcTotalPrice(this.productsInCart, 'price'))}`;
  }

  // eslint-disable-next-line class-methods-use-this
  private resetIndexes(): void {
    const allIndexes = document.querySelectorAll('.productInCart__index') as NodeListOf<Element>;
    allIndexes.forEach((el, i) => {
      el.innerHTML = `${String(i + 1)}.`;
    });
  }

  private deleteProductItem(id: number): void {
    const allItemsInCart = document.querySelectorAll('.productInCart__item') as NodeListOf<Element>;
    allItemsInCart.forEach((item) => {
      if (Number(item.getAttribute('data-product')) === id) {
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
    this.productDetailsController.addToCart(id, 'inc');
    this.productDetailsController.changeHeaderInfo();
    this.changeCountInControl(id);
    this.changeCountInSummary();
  }

  public decProductCount(id: number): void {
    this.productDetailsController.removeFromCart(id);
    this.productDetailsController.changeHeaderInfo();
    this.changeCountInControl(id);
    this.changeCountInSummary();
    if (!findProduct(id, this.productsInCart)) {
      this.deleteProductItem(id);
    }
  }
}
