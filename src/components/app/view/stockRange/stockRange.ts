import noUiSlider, { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './stockRange.css';
import { IProduct } from '../../../../types';
import data from '../../../../data';

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
    this.createSlider();
  }

  private createSlider(): void {
    const targetElement = <target> this.element.querySelector('#stock-slider');
    const maxObject: IProduct = data.reduce((prev, current) => (prev > current ? prev : current));
    const minObject: IProduct = data.reduce((prev, current) => (prev > current ? current : prev));
    noUiSlider.create(targetElement, {
      start: [minObject.stock, maxObject.stock],
      connect: true,
      range: {
        min: minObject.stock,
        max: maxObject.stock,
      },
      step: 1,
    });
  }
}
export default StockRange;
