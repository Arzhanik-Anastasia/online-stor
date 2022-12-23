/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import { Category } from '../../../../data';
import { BaseComponent } from '../../../common/baseComponent';
import './categorySort.css';

const categories = Object.values(Category);
class CategorySort extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'controls__category', '');
    this.renderBlock(parentNode);
  }

  private renderBlock(parentNode:HTMLElement):void {
    const categoriesList = new BaseComponent('div', 'categories__list', '');
    categories.forEach((categorie) => {
      const categoryItem = new BaseComponent('button', 'category__item', categorie);
      categoryItem.element.setAttribute('category', categorie);
      categoriesList.element.append(categoryItem.element);
    });
    this.element.append(categoriesList.element);
    parentNode.append(this.element);
  }
}

export default CategorySort;
