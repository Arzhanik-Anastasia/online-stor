import { Brand } from '../../../../data';
import { BaseComponent } from '../../../common/baseComponent';
import './brandSort.css';

const brands = Object.values(Brand);

class BrandSort extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'controls__brands', '');
    this.renderBlock(parentNode);
  }

  private renderBlock(parentNode:HTMLElement):void {
    const brandsList = new BaseComponent('ul', 'brands__list', '');
    brands.forEach((brand) => {
      const brandItem = new BaseComponent('li', 'brands__item', '');
      brandItem.element.innerHTML = `
          <label class="checkbox">
            <input class="brands__input" type="checkbox" name="brand" value="${brand}">
            <span class="checkbox__title">${brand}</span>
          </label>
        `;
      brandsList.element.append(brandItem.element);
    });
    this.element.append(brandsList.element);
    parentNode.append(this.element);
  }
}

export default BrandSort;
