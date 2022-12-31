import { BaseComponent } from '../../../common/baseComponent';
import './header.css';

class Header extends BaseComponent {
  constructor() {
    super('header', 'header', '');
    this.renderHeader();
  }

  private renderHeader():void {
    this.element.innerHTML = `
    <div class="container header__wrapper">
        <div class="header__logo">
          <a href="/#" class="header__link"> SNEAKER HEAD </a>
        </div>
        <div class="header__total-price">Cart total: 0</div>
        <a class="header__cart" href="/#cart">
          <div class="cart__img"></div>
          <div class="header__count"></div>
        </a>

    </div>`;
  }
}

export default Header;
