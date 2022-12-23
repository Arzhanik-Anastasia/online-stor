import { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './stockRange.css';
import { IProduct } from '../../../../types';
import data from '../../../../data';
import Slider from '../slider/slider';

class StockRange extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'stock__range', '');
    this.renderView(parentNode);
  }

  private renderView(parentNode: HTMLElement):void {
    this.element.innerHTML = `
    <h3 class="stock__title">На складе</h3>
    <div class="stock-slider-container">
        <output class="slider-output start-stock">100</output>
        <div id="stock-slider"></div>
        <output class="slider-output end-stock">500</output>
    </div>
    `;
    parentNode.append(this.element);
    const targetElement = <target> this.element.querySelector('#stock-slider');
    const min: IProduct = data.reduce((prev, current) => (prev > current ? current : prev));
    const minValue = min.stock;
    const max: IProduct = data.reduce((prev, current) => (prev > current ? prev : current));
    const maxValue = max.stock;
    const slider = new Slider();
    slider.createSlider(targetElement, minValue, maxValue);
  }
}
export default StockRange;
