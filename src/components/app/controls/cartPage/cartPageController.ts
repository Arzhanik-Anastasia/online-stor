import { IProduct } from '../../../../types';
import { ProductInCartItem } from '../../view/productInCartItem/productInCartItem';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import { getProductsInCart } from '../services/services';

export class CartPageController {
  productsInCart: IProduct[] | [];

  productDetailsController: ProductDetailsController;

  constructor() {
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
  }

  private renderProducts(): HTMLElement[] {
    // изменить на только уникальные значения
    return this.productsInCart.map((el: IProduct, i: number) => new ProductInCartItem()
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

  public incProductCount(id: number): void {
    this.productDetailsController.addToCart(id, 'inc');
    this.productDetailsController.changeHeaderInfo();
  }

  public decProductCount(id: number): void {
    this.productDetailsController.addToCart(id, 'dec');
    this.productDetailsController.changeHeaderInfo();
  }
}
