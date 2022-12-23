import { BaseComponent } from '../../../common/baseComponent';
import Aside from '../../view/aside/aside';

const DEFAULT_FILTERS = {
  brand: ['Nike', 'Adidas', 'Jordan', 'Reebok', 'Joma', 'Puma'],
  colors: ['синий', 'белый', 'черный', 'зеленый', 'красный'],
  category: ['Lifestyle', 'Running', 'Boots', 'Slides', 'BasketBall'],
  minCount: 1,
  maxCount: 200,
  minPrice: 100,
  maxPrice: 500,
  sort: 'sort-name-max',
};

export const applyFilters = { ...DEFAULT_FILTERS };

class HomePage extends BaseComponent {
  aside: Aside;

  constructor() {
    super('main', 'main', '');
    this.aside = new Aside();
    this.renderPage();
  }

  public renderPage(): void {
    const wrapperSection = new BaseComponent('div', 'section__products', '');
    this.element.append(this.aside.element);
    this.element.append(wrapperSection.element);
    document.querySelector('header')?.after(this.element);
  }
}

export default HomePage;
