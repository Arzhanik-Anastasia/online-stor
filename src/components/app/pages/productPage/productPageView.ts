import { BaseComponent } from '../../../common/baseComponent';
import { ProductDetailsController } from '../../controls/productDetails/productDetailsController';
import { ProductDetailsListener } from '../../controls/productDetails/productDetailsListner';
import { ProductDetails } from '../../view/productDetails/productDetails';
import { ProductLinkNav } from '../../view/productLinkNav/productLinkNav';
import { ProductSlider } from '../../view/productSlider/productSlider';
import './productPageView.css';

class ProductPage extends BaseComponent {
  productLinkNav: ProductLinkNav;

  productDetails: ProductDetails;

  productSlider: ProductSlider;

  productDetailsListener: ProductDetailsListener;

  productDetailsController: ProductDetailsController;

  constructor(id: number) {
    super('main', 'main', '');
    this.productLinkNav = new ProductLinkNav(id);
    this.productDetails = new ProductDetails(id);
    this.productSlider = new ProductSlider(id);
    this.productDetailsListener = new ProductDetailsListener();
    this.productDetailsController = new ProductDetailsController();
  }

  public renderPage(): void {
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.classList.add('wrapper__product-details');
    wrapper.append(this.productLinkNav.element);
    const productCard = document.createElement('div') as HTMLDivElement;
    productCard.classList.add('product__card');
    wrapper.append(productCard);
    productCard.append(this.productDetails.element);
    productCard.append(this.productSlider.element);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
    this.productDetailsListener.initListener();
  }
}

export default ProductPage;
