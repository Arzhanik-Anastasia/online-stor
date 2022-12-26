import { DEFAULT_FILTERS } from '../../../data';
import { IFilters } from '../../../types';

export class FilterController {
  filters: IFilters;

  constructor() {
    this.filters = { ...DEFAULT_FILTERS };
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
}
