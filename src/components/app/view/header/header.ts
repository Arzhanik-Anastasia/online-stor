import { ICartProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import {
  getProductsInCart, calcDicountPrice, calcTotalCount,
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
    this.element.innerHTML = `
    <div class="container header__wrapper">
        <div class="header__logo">
          <a href="/#" class="header__link"> SNEAKER HEAD </a>
        </div>
        <div class="header__total-price">Cart total: ${Math.floor(calcDicountPrice())}</div>
        <a class="header__cart" href="/#cart">
          <div class="cart__img"></div>
          <div class="header__count">${calcTotalCount(getProductsInCart())}</div>
        </a>
    </div>`;
  }
}

export default Header;
