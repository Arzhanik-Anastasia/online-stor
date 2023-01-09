import { ICartProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import { calcTotalCount, calcTotalPrice, getProductsInCart } from '../../controls/services/services';
import './cartSummary.css';

export class CartSummary extends BaseComponent {
  productsInCart: ICartProduct;

  constructor() {
    super('div', 'cart__summary');
    this.productsInCart = getProductsInCart();
    this.renderBlock();
  }

  private renderBlock(): void {
    this.element.innerHTML = `
            <h2>Детали заказа</h2>
            <div class="total__count">Общее количество: ${calcTotalCount(getProductsInCart())}</div>
            <div class="total__price">Общая стоимость: ${calcTotalPrice(getProductsInCart())}</div>
            <div class="new__price"></div>
            <div class="promo-block">
              <div class="promo-code">Промокод</div>
              <input class="promo" type="text" placeholder="Promocode">
              <p class="promo__test">Test promo: rss, js</p>
              </div>
              <button class="cart__summary-btn">К оплате</button>
              `;
  }

  public renderNewPrice():void {
    const newPriceBlock = document.querySelector('.new__price') as HTMLDivElement;
    const promo = JSON.parse(localStorage.getItem('promo') as string);
    const discount = promo ? promo.length / 10 : null;
    if (discount) {
      newPriceBlock.innerHTML = `Новая цена ${calcTotalPrice(this.productsInCart) - (calcTotalPrice(this.productsInCart) * discount)}`;
    }
  }
}
