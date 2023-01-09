/* eslint-disable class-methods-use-this */
import { ICartProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import { ProductDetailsController } from '../../controls/productDetails/productDetailsController';
import { calcTotalPrice, getProductsInCart } from '../../controls/services/services';
import './promoActive.css';

export class PromoActive extends BaseComponent {
  productsInCart: ICartProduct;

  productDetailsController: ProductDetailsController;

  constructor() {
    super('div', 'promo__active');
    this.productsInCart = getProductsInCart();
    this.productDetailsController = new ProductDetailsController();
  }

  public renderBlock(parent: HTMLDivElement, promo:string): void {
    this.element.setAttribute('data-promo-block', promo);
    this.element.innerHTML = `
      Active promo ${promo}
      <p class="promoItem__sale">Sale: 10%</p>
      <button class="promo__button" data-promo='${promo}'>drop</button>
    </div>`;
    parent.append(this.element);
    this.initListener();
  }

  private initListener() {
    const dropButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.promo__button');
    dropButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const deletedPromo = btn.getAttribute('data-promo') as string;
        let applyPromo: string[] = JSON.parse(localStorage.getItem('promo') as string);
        applyPromo = applyPromo.filter((promo) => promo !== deletedPromo);
        localStorage.setItem('promo', JSON.stringify(applyPromo));
        const totalPrice:number = calcTotalPrice(this.productsInCart);
        const newPriceBlock = document.querySelector('.new__price') as HTMLDivElement;
        newPriceBlock.innerHTML = applyPromo.length ? `Новая цена ${totalPrice}` : '';
        (document.querySelector('.promo') as HTMLInputElement).value = '';
        document.querySelector('.total__price')!.textContent = `Общая стоимость: ${totalPrice}`;
        this.productDetailsController.changeHeaderInfo();
        const deletedBlock = document.querySelector(`[data-promo-block=${deletedPromo}]`) as HTMLDivElement;
        if (deletedBlock) deletedBlock.remove();
      });
    });
  }
}
