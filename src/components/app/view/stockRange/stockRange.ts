import { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './stockRange.css';
import data from '../../../../data';
import Slider from '../slider/slider';
import { getMaxMinValueByField } from '../../../common/utils';

class StockRange extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'stock__range', '');
    this.renderView(parentNode);
  }

  private renderView(parentNode: HTMLElement):void {
    const minMaxValue = getMaxMinValueByField('stock', data);
    this.element.innerHTML = `
    <h3 class="stock__title">На складе</h3>
    <div class="stock-slider-container">
        <output class="slider-output stock-min">${minMaxValue[0]}</output>
        <div id="stock-slider"></div>
        <output class="slider-output stock-max">${minMaxValue[1]}</output>
    </div>
    `;
    parentNode.append(this.element);
    const targetElement = <target> this.element.querySelector('#stock-slider');
    const slider = new Slider();
    slider.createSlider(targetElement, minMaxValue[0], minMaxValue[1]);
  }
}
export default StockRange;
