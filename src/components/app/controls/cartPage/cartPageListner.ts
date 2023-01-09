import data from '../../../../data';
import { ICartProduct, IProduct } from '../../../../types';
import ModalBuy from '../../pages/modalBuy/modalBuy';
import { PromoActive } from '../../view/promoActive/promoActive';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import { calcTotalPrice, getProductsInCart } from '../services/services';
import { CartPageController } from './cartPageController';

export class CartPageListener {
  private cartPageController: CartPageController;

  modal: ModalBuy;

  productsInCart:ICartProduct;

  promoCode: string[];

  productDetailsController: ProductDetailsController;

  applyPromo: string[];

  constructor() {
    this.cartPageController = new CartPageController();
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
    this.modal = new ModalBuy();
    this.promoCode = ['rss', 'js'];
    this.applyPromo = [];
    this.getPromo();
  }

  public initListener():void {
    this.addListenerToIncBtn();
    this.addListenerToDecBtn();
    this.addListenerBuy();
    this.addListenerPromo();
    this.applyPromoCode();
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
    if (btnBuy) {
      btnBuy.addEventListener('click', () => {
        this.modal.renderView();
      });
    }
  }

  private addListenerPromo(): void {
    const inputPromo = document.querySelector('.promo') as HTMLInputElement;
    const promoBlock = document.querySelector('.promo-block') as HTMLDivElement;
    if (inputPromo) {
      inputPromo.addEventListener('input', () => {
        this.getPromo();
        const promoBlockButton = document.createElement('button');
        promoBlockButton.classList.add('btn__promo');
        if (this.promoCode.includes(inputPromo.value) && !this.applyPromo.includes(inputPromo.value)) {
          promoBlockButton.innerHTML = 'Add promo';
          promoBlock.append(promoBlockButton);
          promoBlockButton.addEventListener('click', () => {
            if (!this.applyPromo.includes(inputPromo.value)) {
              this.applyPromo.push(inputPromo.value);
            }
            const activeBlock = new PromoActive();
            activeBlock.renderBlock(promoBlock, inputPromo.value);
            const newPriceBlock = document.querySelector('.new__price') as HTMLDivElement;
            const discount = this.applyPromo ? this.applyPromo.length / 10 : null;
            const totalPrice: number = discount ? calcTotalPrice(getProductsInCart(), discount) : calcTotalPrice(getProductsInCart());
            newPriceBlock.innerHTML = `Новая цена ${totalPrice}`;
            const totalPriceBlock = document.querySelector('.total__price') as HTMLDivElement;
            totalPriceBlock.classList.add('old');
            localStorage.setItem('promo', JSON.stringify(this.applyPromo));
            promoBlock.querySelector('.btn__promo')?.remove();
            this.productDetailsController.changeHeaderInfo();
          });
        } else if (!this.promoCode.includes(inputPromo.value)) {
          const btnPromo = document.querySelector('.btn__promo') as HTMLButtonElement;
          if (btnPromo) btnPromo.remove();
        }
      });
    }
  }

  private getPromo(): void {
    const promoFromLocal = localStorage.getItem('promo') as string;
    this.applyPromo = promoFromLocal ? JSON.parse(promoFromLocal) : [];
  }

  private applyPromoCode(): void {
    this.getPromo();
    const promoBlock = document.querySelector('.promo-block') as HTMLDivElement;
    this.applyPromo.forEach((item) => {
      const activeBlock = new PromoActive();
      activeBlock.renderBlock(promoBlock, item);
    });
  }
}
