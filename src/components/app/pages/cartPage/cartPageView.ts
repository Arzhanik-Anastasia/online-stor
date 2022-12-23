/* eslint-disable import/no-named-as-default */
import BaseComponent from '../../../common/baseComponent';

class CartPage extends BaseComponent {
  constructor() {
    super('main', 'main', 'ЭТО СТРАНИЦА КОРЗИНЫ');
    this.renderPage();
  }

  public renderPage(): void {
    document.querySelector('header')?.after(this.element);
  }
}

export default CartPage;
