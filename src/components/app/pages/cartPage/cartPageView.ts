import { BaseComponent } from '../../../common/baseComponent';
import { CartPageController } from '../../controls/cartPage/cartPageController';
import { CartPageListener } from '../../controls/cartPage/cartPageListner';
import { CartSummary } from '../../view/cartSummary/cartSummary';
import { ProductsInCart } from '../../view/productsInCart/productsInCart';
import './cartPageView.css';

class CartPage extends BaseComponent {
  productsInCart: ProductsInCart;

  cartSummary: CartSummary;

  cartPageController: CartPageController;

  cartPageListener: CartPageListener;

  constructor() {
    super('main', 'main', '');
    this.productsInCart = new ProductsInCart();
    this.cartSummary = new CartSummary();
    this.cartPageController = new CartPageController();
    this.cartPageListener = new CartPageListener();
  }

  public renderPage(): void {
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.classList.add('wrapper__cart');
    wrapper.append(this.productsInCart.element);
    wrapper.append(this.cartSummary.element);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
    this.cartPageController.renderCartList();
    this.cartPageListener.initListener();
  }
}

export default CartPage;
