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
    const min: IProduct = data.reduce((prev, current) => (prev.stock > current.stock ? current : prev));
    const minValue = min.stock;
    const max: IProduct = data.reduce((prev, current) => (prev.stock > current.stock ? prev : current));
    const maxValue = max.stock;
    this.element.innerHTML = `
    <h3 class="stock__title">На складе</h3>
    <div class="stock-slider-container">
        <output class="slider-output stock-min">${minValue}</output>
        <div id="stock-slider"></div>
        <output class="slider-output stock-max">${maxValue}</output>
    </div>
    `;
    parentNode.append(this.element);
    const targetElement = <target> this.element.querySelector('#stock-slider');
    const slider = new Slider();
    slider.createSlider(targetElement, minValue, maxValue);
  }
}
export default StockRange;
