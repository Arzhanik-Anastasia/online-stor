import { ICartProduct, IProduct } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import './productDetails.css';
import { findProductFromData, getProductsInCart } from '../../controls/services/services';

export class ProductDetails extends BaseComponent {
  private product: IProduct;

  private productsInCart: ICartProduct;

  constructor(id: number) {
    super('div', 'product__details');
    this.product = findProductFromData(id);
    this.productsInCart = getProductsInCart();
    this.renderProductDetails();
  }

  private renderProductDetails(): void {
    this.element.innerHTML = `
        <div class="product__info">
            <div class="product__description">
                <h2 class="product__title">${this.product.name}</h2>
                <p class="product__count">Количество на складе:<span>${this.product.stock}</span></p>
                <p class="product__desc">Сезон: <span>${this.product.season}</span></p>
                <p class="product__use">Характеристики: <span>${this.product.use}</span></p>
                <p class="product__desctiption">Описание: <span>${this.product.description}</span></p>
                <p class="product__price">ЦЕНА: ${this.product.price}</p>
            </div>
            <div class="product__image-block">
                <img class="product__image" src='./assets/img/id${this.product.id}/1.jpg' alt=${this.product.name}>
            </div>
        </div>

        <button class='product__to-chart' data-product=${this.product.id}>
        ${this.productsInCart[this.product.id] ? 'Удалить из корзины' : 'Добавить в корзину'}
        </button>
        <a href='/#cart'>
        <button class='product__buy' data-product=${this.product.id}>Купить сейчас</button>
        </a>
        `;
  }
}
