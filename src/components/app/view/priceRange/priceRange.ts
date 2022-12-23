import noUiSlider, { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './priceRange.css';
import { IProduct } from '../../../../types';
import data from '../../../../data';
import Slider from '../slider/slider';

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

    const targetElement = <target> this.element.querySelector('#price-slider');
    const min: IProduct = data.reduce((prev, current) => (prev > current ? current : prev));
    const minValue = min.price;
    const max: IProduct = data.reduce((prev, current) => (prev > current ? prev : current));
    const maxValue = max.price;
    const slider = new Slider();
    slider.createSlider(targetElement, minValue, maxValue);
  }
}
export default PriceRange;
