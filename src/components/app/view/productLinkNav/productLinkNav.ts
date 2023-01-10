import { BaseComponent } from '../../../common/baseComponent';
import { IProduct } from '../../../../types';
import './productLinkNav.css';
import { findProductFromData } from '../../controls/services/services';

export class ProductLinkNav extends BaseComponent {
  private product: IProduct;

  constructor(id: number) {
    super('div', 'product__nav');
    this.product = findProductFromData(id);
    this.renderBlock();
  }

  private renderBlock(): void {
    this.element.innerHTML = `
            <ul class="product__ul">
                <li class="product__item store__category">
                    <a href="/#" class="main__link"> SNEAKER STORE </a>
                </li>
                <div>>></div>
                <li class="product__item store__category">${this.product.category.toUpperCase()}</li>
                <div>>></div>
                <li class="product__item store__category">${this.product.brand.toUpperCase()}</li>
                <div>>></div>
                <li class="product__item store__category">${this.product.name}</li>
            </ul>
        `;
  }
}
