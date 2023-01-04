import { IProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import { getEachProductCount, getProductsInCart } from '../../controls/services/services';
import './productInCartItem.css';

export class ProductInCartItem extends BaseComponent {
  constructor() {
    super('div', 'productInCart__item');
  }

  public createProductItemContainer(model: IProduct, i: number): HTMLElement {
    this.element.innerHTML = `
      <a class="productInCart__item-link" href='/#product?id=${model.id}'>
        <div class="productInCart__index">${i + 1}.</div>
        <div class="productInCart__image-block">
          <img class="product__image" src='./assets/img/id${model.id}/1.jpg' alt=${model.name}>
        </div>
        <div class="productInCart__description">
          <h2 class="productInCart__title">${model.name}</h2>
          <p class="productInCart__desc"><span>${model.season}</span></p>
          <p class="productInCart__use">Характеристики: <span>${model.use}</span></p>
        </div>
        </a>
        <div class="productInCart__control">
          <p class="productInCart__count">На складе: <span>${model.stock}</span></p>
          <div class="incDec__control">
            <button class="dec__control-btn" data-product=${model.id}>-</button>
            <div class="productInCart__count-in-cart" data-product=${model.id}>
              ${getEachProductCount(getProductsInCart(), model.id)}
            </div>
            <button class="inc__control-btn" data-product=${model.id}>+</button>
          </div>
          <p class="productInCart__price">ЦЕНА: ${model.price}</p>
        </div>
      `;
    this.element.setAttribute('data-product', String(model.id));
    return this.element;
  }
}
