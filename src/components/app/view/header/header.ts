import { ICartProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import {
  getProductsInCart, calcTotalPrice, calcTotalCount, getDiscount, getPromo,
} from '../../controls/services/services';
import './header.css';

class Header extends BaseComponent {
  productsInCart: ICartProduct;

  constructor() {
    super('header', 'header', '');
    this.productsInCart = getProductsInCart();
    this.renderHeader();
  }

  private renderHeader():void {
    const discount: number | null = getDiscount(getPromo());
    this.element.innerHTML = `
    <div class="container header__wrapper">
        <div class="header__logo">
          <a href="/#" class="header__link"> SNEAKER HEAD </a>
        </div>
        <div class="header__total-price">Cart total: ${discount ? calcTotalPrice(getProductsInCart(), discount) : calcTotalPrice(getProductsInCart())}</div>
        <a class="header__cart" href="/#cart">
          <div class="cart__img"></div>
          <div class="header__count">${calcTotalCount(getProductsInCart())}</div>
        </a>
    </div>`;
  }
}

export default Header;
