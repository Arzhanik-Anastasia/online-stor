import { CartPageController } from './cartPageController';

export class CartPageListener {
  private cartPageController: CartPageController;

  constructor() {
    this.cartPageController = new CartPageController();
  }

  public initListener():void {
    this.addListenerToIncBtn();
    this.addListenerToDecBtn();
  }

  private addListenerToIncBtn(): void {
    const incBtnControl = document.querySelectorAll('.inc__control-btn') as NodeListOf<Element>;
    incBtnControl.forEach((btn) => {
      btn.addEventListener('click', (e: Event) => {
        const currentBtn = e.currentTarget as HTMLDivElement;
        const productId = Number(currentBtn.getAttribute('data-product')) as number;
        this.cartPageController.incProductCount(productId);
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
}
