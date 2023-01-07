import data from '../../../../data';
import { ICartProduct, IProduct } from '../../../../types';
import ModalBuy from '../../pages/modalBuy/modalBuy';
import { getProductsInCart } from '../services/services';
import { CartPageController } from './cartPageController';

export class CartPageListener {
  private cartPageController: CartPageController;

  modal: ModalBuy;

  productsInCart:ICartProduct;

  constructor() {
    this.cartPageController = new CartPageController();
    this.productsInCart = getProductsInCart();
    this.modal = new ModalBuy();
  }

  public initListener():void {
    this.addListenerToIncBtn();
    this.addListenerToDecBtn();
    this.addListenerBuy();
  }

  private addListenerToIncBtn(): void {
    const incBtnControl = document.querySelectorAll('.inc__control-btn') as NodeListOf<Element>;
    incBtnControl.forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        this.productsInCart = getProductsInCart();
        const currentBtn = e.currentTarget as HTMLDivElement;
        const productId = Number(currentBtn.getAttribute('data-product')) as number;
        const modelInStock:IProduct = data.find((product) => product.id === productId) as IProduct;
        if (modelInStock.stock > this.productsInCart[productId]) {
          this.cartPageController.incProductCount(productId);
        }
      });
    });
  }

  private addListenerToDecBtn(): void {
    const decBtnControl = document.querySelectorAll('.dec__control-btn') as NodeListOf<Element>;
    decBtnControl.forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        const currentBtn = e.currentTarget as HTMLDivElement;
        const productId = Number(currentBtn.getAttribute('data-product')) as number;
        this.cartPageController.decProductCount(productId);
      });
    });
  }

  private addListenerBuy(): void {
    const btnBuy = document.querySelector('.cart__summary-btn') as HTMLButtonElement;
    btnBuy.addEventListener('click', () => {
      this.modal.renderView();
    });
  }
}
