import { target } from 'nouislider';
import { DEFAULT_FILTERS } from '../../../data';
import { FilterController } from './filterController';
import { HomePageController } from './homePageController';

export class HomePageListener {
  filtersController: FilterController;

  homePageController: HomePageController;

  constructor() {
    this.filtersController = new FilterController();
    this.homePageController = new HomePageController();
  }

  addListenerToSortSelect(): void {
    const sortSelect = document.querySelector('.sort-select') as HTMLSelectElement;
    sortSelect.addEventListener('change', () => {
      this.filtersController.changeFilterSort(sortSelect.value);
      this.homePageController.sortCards();
    });
  }

  addListenerCategory(): void {
    const controlsCategory = document.querySelector('.categories__list') as HTMLDivElement;
    controlsCategory.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLButtonElement).classList.contains('category__item')) {
        (e.target as HTMLButtonElement).classList.toggle('active');
      }
      const activeCategorie = Array.from(document.querySelectorAll('.category__item.active')) as HTMLButtonElement[];
      let categoryArr: string [] = [];
      activeCategorie.forEach((category) => {
        if (category.dataset.category) {
          categoryArr.push(category.dataset.category);
        }
      });
      if (!categoryArr.length) categoryArr = DEFAULT_FILTERS.category;

      this.filtersController.changeFilterCategory(categoryArr);
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
    });
  }

  addListenerColors():void {
    const controlsColor = document.querySelector('.controls__colors') as HTMLDivElement;
    controlsColor.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLButtonElement).classList.contains('colors-item')) {
        (e.target as HTMLButtonElement).classList.toggle('active');
      }
      const activeColors = Array.from(document.querySelectorAll('.colors-item.active')) as HTMLButtonElement[];
      let colorsArr: string [] = [];
      activeColors.forEach((color) => {
        if (color.dataset.color) {
          colorsArr.push(color.dataset.color);
        }
      });
      if (!colorsArr.length) colorsArr = DEFAULT_FILTERS.colors;

      this.filtersController.changeFilterColor(colorsArr);
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
    });
  }

  addListenerBrand():void {
    const controlsBrand = document.querySelector('.controls__brands') as HTMLDivElement;
    controlsBrand.addEventListener('click', () => {
      let brandsArr: string [] = [];
      const allBrands = Array.from(document.querySelectorAll('.brands__input')) as HTMLInputElement[];
      allBrands.forEach((brand) => {
        if (brand.checked) {
          brandsArr.push(brand.value);
        }
      });
      if (!brandsArr.length) brandsArr = DEFAULT_FILTERS.brands;
      this.filtersController.changeFilterBrands(brandsArr);
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
    });
  }

  addListenerPrice():void {
    const priceSlider = <target> document.getElementById('price-slider')!;
    priceSlider.noUiSlider!.on('update', () => {
      const priceSliderGet = priceSlider.noUiSlider!.get(true);
      const minPrice = typeof priceSliderGet === 'object' ? priceSliderGet[0] : priceSliderGet;
      const maxPrice = typeof priceSliderGet === 'object' ? priceSliderGet[1] : priceSliderGet;
      const wrapperMinPrice = (document.querySelector('.price-min') as HTMLElement);
      wrapperMinPrice.textContent = (Math.round(+(minPrice))).toString();
      const wrapperMaxPrice = (document.querySelector('.price-max') as HTMLElement);
      wrapperMaxPrice.textContent = (Math.round(+(maxPrice))).toString();
      this.filtersController.changeSliderPrice(+minPrice, +maxPrice);
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
    });
  }

  addListenerStock():void {
    const stockSlider = <target> document.getElementById('stock-slider')!;
    stockSlider.noUiSlider!.on('update', () => {
      const stockSliderGet = stockSlider.noUiSlider!.get(true);
      const minStock = typeof stockSliderGet === 'object' ? stockSliderGet[0] : stockSliderGet;
      const maxStock = typeof stockSliderGet === 'object' ? stockSliderGet[1] : stockSliderGet;
      const wrapperMinStock = (document.querySelector('.stock-min') as HTMLElement);
      wrapperMinStock.textContent = (Math.round(+(minStock))).toString();
      const wrapperMaxStock = (document.querySelector('.stock-max') as HTMLElement);
      wrapperMaxStock.textContent = (Math.round(+(maxStock))).toString();
      this.filtersController.changeSliderStock(+minStock, +maxStock);
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
    });
  }
}
