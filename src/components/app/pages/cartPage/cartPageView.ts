import { BaseComponent } from '../../../common/baseComponent';
import { CartPageController } from '../../controls/cartPage/cartPageController';
import { CartPageListener } from '../../controls/cartPage/cartPageListner';
import { ProductsInCart } from '../../view/productsInCart/productsInCart';
import './cartPageView.css';

class CartPage extends BaseComponent {
  productsInCart: ProductsInCart;

  cartPageController: CartPageController;

  cartPageListener: CartPageListener;

  constructor() {
    super('main', 'main', '');
    this.productsInCart = new ProductsInCart();
    this.cartPageController = new CartPageController();
    this.cartPageListener = new CartPageListener();
  }

  public renderPage(): void {
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.classList.add('wrapper__cart');
    wrapper.append(this.productsInCart.element);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
    this.cartPageController.renderCartList();
    this.cartPageListener.initListener();
  }
}

export default CartPage;
