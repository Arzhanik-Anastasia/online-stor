import { DEFAULT_FILTERS } from '../../../../data';
import { IFilters } from '../../../../types';

export class FilterController {
  filters: IFilters;

  constructor() {
    this.filters = this.getFilter();
  }

  public getFilter():IFilters {
    if (localStorage.getItem('store-filter')) {
      this.filters = JSON.parse(localStorage.getItem('store-filter') as string);
    } else {
      this.filters = { ...DEFAULT_FILTERS };
    }
    return this.filters;
  }

  public changeFilterSort(value: string): void {
    this.filters.sort = value;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public changeFilterCategory(category: string[]):void {
    this.filters.category = category;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public changeFilterColor(colors: string[]): void {
    this.filters.colors = colors;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public changeFilterBrands(brands: string[]): void {
    this.filters.brands = brands;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public changeSliderPrice(min:number, max: number): void {
    this.filters.minPrice = min;
    this.filters.maxPrice = max;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public changeSliderStock(min:number, max: number): void {
    this.filters.minStock = min;
    this.filters.maxStock = max;
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public resetFilter(): void {
    this.filters = { ...DEFAULT_FILTERS };
    localStorage.setItem('store-filter', JSON.stringify(this.filters));
  }

  public loadFilters(): void {
    const categories = this.filters.category;
    const { brands, colors, sort } = this.filters;
    if (colors && colors.length !== DEFAULT_FILTERS.colors.length) {
      colors.forEach((color:string) => {
        document.querySelector(`[data-color='${color}']`)?.classList.add('active');
      });
    }
    if (categories && categories.length !== DEFAULT_FILTERS.category.length) {
      categories.forEach((category:string) => {
        document.querySelector(`[data-category='${category}']`)?.classList.add('active');
      });
    }
    if (brands && brands.length !== DEFAULT_FILTERS.category.length) {
      brands.forEach((brand:string) => {
        (document.querySelector(`[data-brand='${brand}']`) as HTMLInputElement).checked = true;
      });
    }
    if (sort) {
      const sortSelect = document.querySelector('.sort-select') as HTMLSelectElement;
      sortSelect.value = sort;
    }
  }
}
