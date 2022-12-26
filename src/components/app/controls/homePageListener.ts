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
}
