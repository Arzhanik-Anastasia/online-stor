import { DEFAULT_FILTERS } from '../../../../data';
import { IFilters } from '../../../../types';
import { BaseComponent } from '../../../common/baseComponent';
import { FilterController } from '../../controls/homePage/filterController';
import { HomePageController } from '../../controls/homePage/homePageController';
import { HomePageListener } from '../../controls/homePage/homePageListener';
import { Aside } from '../../view/aside/aside';
import { LayoutBtns } from '../../view/layoutBtns/layoutBtns';
import { ProductList } from '../../view/productList/ProductList';
import { SearchBar } from '../../view/searchBar/searchBar';
import { Sort } from '../../view/sort/sort';
import './homePageView.css';

export const applyFilters = { ...DEFAULT_FILTERS };

class HomePage extends BaseComponent {
  aside: Aside;

  layoutBtns: LayoutBtns;

  searchBar: SearchBar;

  sort: Sort;

  productsList: ProductList;

  homePageListener: HomePageListener;

  homePageController: HomePageController;

  filters: IFilters;

  constructor() {
    super('main', 'main', '');
    this.filters = new FilterController().getFilter();
    this.aside = new Aside();
    this.layoutBtns = new LayoutBtns();
    this.searchBar = new SearchBar();
    this.sort = new Sort(this.filters.sort);
    this.productsList = new ProductList();
    this.homePageListener = new HomePageListener();
    this.homePageController = new HomePageController();
  }

  public renderPage(): void {
    const wrapper = document.createElement('div') as HTMLDivElement;
    wrapper.classList.add('wrapper__main');
    wrapper.append(this.aside.element);
    wrapper.append(this.productsList.element);
    const topPanel = document.createElement('div') as HTMLDivElement;
    topPanel.classList.add('top__panel');
    topPanel.append(this.layoutBtns.element);
    topPanel.append(this.searchBar.element);
    topPanel.append(this.sort.element);
    this.element.append(topPanel);
    this.element.append(wrapper);
    document.querySelector('header')?.after(this.element);
    this.homePageController.renderList();
    this.homePageListener.initListener();
  }
}

export default HomePage;
