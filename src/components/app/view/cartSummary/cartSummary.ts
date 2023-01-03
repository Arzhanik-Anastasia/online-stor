import { BaseComponent } from '../../../common/baseComponent';
import { calcTotalPrice, getProductsInCart } from '../../controls/services/services';
import './cartSummary.css';

export class CartSummary extends BaseComponent {
  constructor() {
    super('div', 'cart__summary');
    this.renderBlock();
  }

  private renderBlock(): void {
    this.element.innerHTML = `
            <h2>Детали заказа</h2>
            <div class="total__count">Общее количество: ${getProductsInCart().length}</div>
            <div class="total__price">Общая стоимость: ${calcTotalPrice(getProductsInCart(), 'price')}</div>
            <div class="promo-code">Промокод</div>
            <button class="cart__summary-btn">К оплате</button>
        `;
  }
}
