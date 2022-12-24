import { IProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import './productCard.css';

export class ProductCard extends BaseComponent {
  constructor() {
    super('div', 'product__item');
  }

  createProductContainer(model: IProduct): HTMLElement {
    this.element.innerHTML = `
      <a class="product__item-link" href='/#product?id=${model.id}'>
        <div class="product__image-block">
          <img class="product__image" src='./assets/img/id${model.id}/1.jpg' alt=${model.name}>
        </div>
        <div class="product__description">
          <h2 class="product__title">${model.name}</h2>
          <p class="product__count">Количество на складе:<span>${model.stock}</span></p>
          <p class="product__desc">Сезон: <span>${model.season}</span></p>
          <p class="product__use">Характеристики: <span>${model.use}</span></p>
          <p class="product__desctiption">Описание: <span>${model.description}</span></p>
          <p class="product__price">ЦЕНА: ${model.price}</p>
        </div>
        </a>
        <button class='product__buy' data-product=${model.id}>Купить</button>
      `;
    return this.element;
  }
}
