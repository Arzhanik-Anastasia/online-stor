import { BaseComponent } from '../../../common/baseComponent';
import './productSlider.css';

export class ProductSlider extends BaseComponent {
  constructor(id: number) {
    super('div', 'product__slider');
    this.renderBlock(id);
  }

  private renderBlock(id: number): void {
    this.element.innerHTML = `
            <div class="slider__wrapper">
                <div class="slider__item active">
                    <img class="slider__img" src='./assets/img/id${id}/1.jpg' alt=productPhoto1>
                </div>
                <div class="slider__item">
                    <img class="slider__img" src='./assets/img/id${id}/2.jpg' alt=productPhoto1>
                </div>
                <div class="slider__item">
                    <img class="slider__img" src='./assets/img/id${id}/3.jpg' alt=productPhoto1>
                </div>
            </div>
        `;
  }
}
