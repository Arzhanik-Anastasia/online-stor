import { BaseComponent } from '../../../common/baseComponent';
import { ProductDetails } from '../../view/productDetails/productDetails';

class ProductPage extends BaseComponent {
  productDetails: ProductDetails;

  constructor(id: number) {
    super('main', 'main', '');
    this.productDetails = new ProductDetails(id);
  }

  public renderPage(): void {
    const wrapper = document.createElement('div');
    wrapper.append(this.productDetails.element);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
  }
}

export default ProductPage;
