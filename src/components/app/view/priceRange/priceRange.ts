import { target } from 'nouislider';
import { BaseComponent } from '../../../common/baseComponent';
import '../../../../../node_modules/nouislider/dist/nouislider.css';
import './priceRange.css';
import data from '../../../../data';
import Slider from '../slider/slider';
import { getMaxMinValueByField } from '../../../common/utils';
import { FilterController } from '../../controls/homePage/filterController';
import { IFilters } from '../../../../types';

class PriceRange extends BaseComponent {
  filterController: FilterController;

  constructor(parentNode: HTMLElement) {
    super('div', 'price__range', '');
    this.renderView(parentNode);
    this.filterController = new FilterController();
  }

  private renderView(parentNode: HTMLElement):void {
    const minMaxValue = getMaxMinValueByField('price', data);
    const filters:IFilters = JSON.parse(localStorage.getItem('store-filter') as string);
    const minValueLoad = filters ? filters.minPrice : minMaxValue[0];
    const maxValueLoad = filters ? filters.maxPrice : minMaxValue[1];
    this.element.innerHTML = `
    <h3 class="price__title">Сортировать по цене</h3>
    <div class="price-slider-container">
        <output class="slider-output price-min">${minMaxValue[0]}</output>
        <div id="price-slider"></div>
        <output class="slider-output price-max">${minMaxValue[1]}</output>
    </div>
    `;
    parentNode.append(this.element);
    const targetElement = <target> this.element.querySelector('#price-slider');
    const slider = new Slider();
    slider.createSlider(targetElement, minMaxValue[0], minMaxValue[1], minValueLoad, maxValueLoad);
  }
}
export default PriceRange;
