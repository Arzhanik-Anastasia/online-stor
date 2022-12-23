import { BaseComponent } from '../../../common/baseComponent';
import BrandSort from '../brandSort/brandSort';
import CategorySort from '../categorySort/categorySort';
import ColorSort from '../colorSort/colorSort';
import PriceRange from '../priceRange/priceRange';
import StockRange from '../stockRange/stockRange';

import './aside.css';

class Aside extends BaseComponent {
  stockRange: StockRange;

  priceRange: PriceRange;

  colorSort: ColorSort;

  brandSort: BrandSort;

  categorieSort: CategorySort;

  constructor() {
    super('aside', 'shop__filter', '');
    this.categorieSort = new CategorySort(this.element);
    this.brandSort = new BrandSort(this.element);
    this.stockRange = new StockRange(this.element);
    this.priceRange = new PriceRange(this.element);
    this.colorSort = new ColorSort(this.element);
  }
}

export default Aside;
