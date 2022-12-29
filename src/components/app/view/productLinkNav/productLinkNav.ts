import data from '../../../../data';
import { BaseComponent } from '../../../common/baseComponent';
import { IProduct } from '../../../../types';
import './productLinkNav.css';

export class ProductLinkNav extends BaseComponent {
  product: IProduct;

  constructor(id: number) {
    super('div', 'product__nav');
    this.product = data[id];
    this.findProduct(id);
    this.renderBlock();
  }

  private findProduct(id: number): void {
    this.product = data.find((el: IProduct) => el.id === id) as IProduct;
  }

  private renderBlock(): void {
    this.element.innerHTML = `
            <ul class="product__ul">
                <li class="product__item store__category">SNEAKER STORE</li>
                <div>>></div>
                <li class="product__item store__category">${this.product.brand.toUpperCase()}</li>
                <div>>></div>
                <li class="product__item store__category">${this.product.name}</li>
            </ul>
        `;
  }
}
