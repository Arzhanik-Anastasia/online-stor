import noUiSlider, { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './priceRange.css';
import { IProduct } from '../../../../types';
import data from '../../../../data';

class PriceRange extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'price__range', '');
    this.renderView(parentNode);
  }

  private renderView(parentNode: HTMLElement):void {
    this.element.innerHTML = `
    <h3 class="price__title">Сортировать по цене</h3>
    <div class="price-slider-container">
        <output class="slider-output price-min">10</output>
        <div id="price-slider"></div>
        <output class="slider-output price-max">200</output>
    </div>
    `;
    parentNode.append(this.element);
    this.createSlider();
  }

  private createSlider():void {
    const targetElement = <target> this.element.querySelector('#price-slider');
    const maxObject: IProduct = data.reduce((prev, current) => (prev > current ? prev : current));
    const minObject: IProduct = data.reduce((prev, current) => (prev > current ? current : prev));
    noUiSlider.create(targetElement, {
      start: [minObject.price, maxObject.price],
      connect: true,
      range: {
        min: minObject.price,
        max: maxObject.price,
      },
      step: 1,
    });
  }
}
export default PriceRange;
