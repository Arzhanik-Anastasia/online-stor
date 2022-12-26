import { IFilters, IProduct } from '../../../types';
import { ProductCard } from '../view/productCard/productCard';
import { FilterController } from './filterController';
import data from '../../../data';

export class HomePageController {
  filterController: FilterController;

  allProduct: IProduct[] | [];

  filteredProduct: IProduct[] | [];

  filters: IFilters;

  constructor() {
    this.allProduct = data;
    this.filterController = new FilterController();
    this.filters = this.filterController.getFilter();
    this.filteredProduct = data;
  }

  private renderAllProduct(): HTMLElement[] {
    return this.filteredProduct.map((el) => new ProductCard().createProductContainer(el));
  }

  public renderList(): void {
    const productListNode = document.querySelector('.product__list') as HTMLDivElement;
    productListNode.innerHTML = '';
    if (this.filteredProduct.length > 0) {
      productListNode.append(...this.renderAllProduct());
    } else {
      productListNode.textContent = 'Совпадений не найдено';
    }
  }

  public sortCards():void {
    this.filters = this.filterController.getFilter();
    if (this.filters.sort === 'sort-name-max') {
      this.filteredProduct = this.filteredProduct.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (this.filters.sort === 'sort-name-min') {
      this.filteredProduct = this.filteredProduct.sort((a, b) => (a.name < b.name ? 1 : -1));
    } else if (this.filters.sort === 'sort-price-max') {
      this.filteredProduct = this.filteredProduct.sort((a, b) => (+(a.price) > +(b.price) ? 1 : -1));
    } else if (this.filters.sort === 'sort-price-min') {
      this.filteredProduct = this.filteredProduct.sort((a, b) => (+(a.price) < +(b.price) ? 1 : -1));
    }
    this.renderList();
  }

  public applyFilter(): void {
    this.filters = this.filterController.getFilter();
    this.filteredProduct = this.allProduct.filter(
      (item) => (this.filters.category.indexOf(item.category) !== -1
        && this.filters.colors.indexOf(item.color) !== -1
        && this.filters.brands.indexOf(item.brand) !== -1
        && item.price >= this.filters.minPrice
        && item.price <= this.filters.maxPrice
        && item.stock >= this.filters.minStock
        && item.stock <= this.filters.maxStock
      ),
    );
    this.sortCards();
    this.renderList();
  }
}
