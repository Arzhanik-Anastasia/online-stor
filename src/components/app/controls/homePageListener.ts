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
}
