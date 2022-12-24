import { DEFAULT_FILTERS } from '../../../../data';
import { IFilters } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import { FilterController } from '../../controls/filterController';
import { HomePageController } from '../../controls/homePageController';
import { HomePageListener } from '../../controls/homePageListener';
import { Aside } from '../../view/aside/aside';
import { ProductList } from '../../view/productList/ProductList';
import { Sort } from '../../view/sort/sort';
import './homePageView.css';

export const applyFilters = { ...DEFAULT_FILTERS };

class HomePage extends BaseComponent {
  aside: Aside;

  sort: Sort;

  productsList: ProductList;

  homePageListener: HomePageListener;

  homePageController: HomePageController;

  filters: IFilters;

  constructor() {
    super('main', 'main', '');
    this.filters = new FilterController().getFilter();
    this.aside = new Aside();
    this.sort = new Sort(this.filters.sort);
    this.productsList = new ProductList();
    this.homePageListener = new HomePageListener();
    this.homePageController = new HomePageController();
  }

  public renderPage(): void {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper__main');
    wrapper.append(this.aside.element);
    wrapper.append(this.productsList.element);
    this.element.append(this.sort.element);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
    this.homePageController.renderList();
    this.homePageListener.addListenerToSortSelect();
    this.homePageListener.addListenerCategory();
  }
}

export default HomePage;
