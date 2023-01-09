import data from '../../../../data';
import { ICartProduct, IProduct } from '../../../../types';
import ModalBuy from '../../pages/modalBuy/modalBuy';
import { PromoActive } from '../../view/promoActive/promoActive';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import {
  getProductsInCart, getPromo, setPromo, calcDicountPrice,
} from '../services/services';
import { CartPageController } from './cartPageController';

export class CartPageListener {
  private cartPageController: CartPageController;

  private productDetailsController: ProductDetailsController;

  modal: ModalBuy;

  productsInCart:ICartProduct;

  promoCode: string[];

  applyPromo: string[];

  constructor() {
    this.cartPageController = new CartPageController();
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
    this.modal = new ModalBuy();
    this.promoCode = ['rss', 'js'];
    this.applyPromo = getPromo();
  }

  public initListener():void {
    this.addListenerToIncBtn();
    this.addListenerToDecBtn();
    this.addListenerBuy();
    this.addListenerPromo();
    this.addListenerToPromoDropBtn();
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
        this.applyPromo = getPromo();
        const promoBlockButton = document.createElement('button') as HTMLButtonElement;
        promoBlockButton.classList.add('btn__promo');
        if (this.promoCode.includes(inputPromo.value) && !this.applyPromo.includes(inputPromo.value)) {
          promoBlockButton.innerHTML = 'Add promo';
          promoBlock.append(promoBlockButton);
          promoBlockButton.addEventListener('click', () => {
            if (!this.applyPromo.includes(inputPromo.value)) {
              this.applyPromo.push(inputPromo.value);
            }
            setPromo(this.applyPromo);
            const activeBlock: PromoActive = new PromoActive();
            activeBlock.renderBlock(promoBlock, inputPromo.value);
            const newPriceBlock = document.querySelector('.new__price') as HTMLDivElement;
            const dicountPrice: number = Math.floor(calcDicountPrice());
            newPriceBlock.innerHTML = `Новая цена: ${dicountPrice}`;
            this.addListenerToPromoDropBtn();
            const totalPriceBlock = document.querySelector('.total__price') as HTMLDivElement;
            totalPriceBlock.classList.add('old');
            promoBlock.querySelector('.btn__promo')?.remove();
            this.productDetailsController.changeHeaderInfo();
          });
        } else if (!this.promoCode.includes(inputPromo.value)) {
          const btnPromo = document.querySelector('.btn__promo') as HTMLButtonElement;
          btnPromo?.remove();
        }
      });
    }
    this.cartPageController.applyPromoCode(this.applyPromo);
  }

  private addListenerToPromoDropBtn() {
    const dropButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.promo__button');
    dropButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const deletedPromo = btn.getAttribute('data-promo') as string;
        this.applyPromo = getPromo().filter((promo) => promo !== deletedPromo);
        setPromo(this.applyPromo);
        const dicountPrice: number = Math.floor(calcDicountPrice());
        const newPriceBlock = document.querySelector('.new__price') as HTMLDivElement;
        if (this.applyPromo.length) {
          newPriceBlock.innerHTML = `Новая цена ${dicountPrice}`;
        } else {
          newPriceBlock.innerHTML = '';
          document.querySelector('.total__price')?.classList.remove('old');
        }
        (document.querySelector('.promo') as HTMLInputElement).value = '';
        document.querySelector('.total__price')!.textContent = `Общая стоимость: ${dicountPrice}`;
        this.productDetailsController.changeHeaderInfo();
        const deletedBlock = document.querySelector(`[data-promo-block=${deletedPromo}]`) as HTMLDivElement;
        if (deletedBlock) deletedBlock.remove();
      });
    });
  }
}
