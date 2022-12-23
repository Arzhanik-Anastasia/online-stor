/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Brand } from '../../../../data';
import { BaseComponent } from '../../../common/baseComponent';
import './brandSort.css';

const brands = Object.values(Brand);

class BrandSort extends BaseComponent {
  appFilters: any;

  constructor(parentNode: HTMLElement) {
    super('div', 'controls__brands', '');
    this.renderBlock(parentNode);
    /*     this.element.onchange = () => this.onChangeBrand(); */
  }

  private renderBlock(parentNode:HTMLElement):void {
    const brandsList = new BaseComponent('ul', 'brands__list', '');
    brands.forEach((brand) => {
      const brandItem = new BaseComponent('li', 'brands__item', '');
      brandItem.element.innerHTML = `
          <label class="checkbox">
            <input type="checkbox" name="brand" value="${brand}">
            <span class="checkbox__title">${brand}</span>
          </label>
        `;
      brandsList.element.append(brandItem.element);
    });
    this.element.append(brandsList.element);
    parentNode.append(this.element);
  }

/*   onChangeBrand() {
    const input = this.element.querySelectorAll('input');
    const brandsLS: string[] = [];
    input.forEach((i) => {
      if (i.checked) {
        brandsLS.push(i.value);
      }
    });
    if (brandsLS.length > 0) this.appFilters.brand = brandsLS;
  } */
}

export default BrandSort;
