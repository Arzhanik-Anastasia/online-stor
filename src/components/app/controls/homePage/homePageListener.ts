import { target } from 'nouislider';
import { DEFAULT_FILTERS } from '../../../../data';
import { ICartProduct } from '../../../../types';
import { ProductDetailsController } from '../productDetails/productDetailsController';
import { getProductsInCart, setProductsInCart } from '../services/services';
import { FilterController } from './filterController';
import { HomePageController } from './homePageController';

export class HomePageListener {
  filtersController: FilterController;

  homePageController: HomePageController;

  productDetailsController: ProductDetailsController;

  constructor() {
    this.filtersController = new FilterController();
    this.homePageController = new HomePageController();
    this.productDetailsController = new ProductDetailsController();
  }

  public initListener():void {
    this.addListenerToSortSelect();
    this.addListenerCategory();
    this.addListenerColors();
    this.addListenerBrand();
    this.addListenerPrice();
    this.addListenerStock();
    this.addListenerReset();
    this.filtersController.loadFilters();
  }

  private addListenerToSortSelect(): void {
    const sortSelect = document.querySelector('.sort-select') as HTMLSelectElement;
    sortSelect.addEventListener('change', () => {
      this.filtersController.changeFilterSort(sortSelect.value);
      this.homePageController.sortCards();
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerCategory(): void {
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
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerColors():void {
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
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerBrand():void {
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
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerPrice():void {
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
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerStock():void {
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
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerReset():void {
    const stockSlider = <target> document.getElementById('stock-slider')!;
    const priceSlider = <target> document.getElementById('price-slider')!;
    const btnReset = document.querySelector('.reset__filters') as HTMLButtonElement;
    btnReset.addEventListener('click', () => {
      const allActiveElement = document.querySelectorAll('.active');
      allActiveElement.forEach((elem) => {
        elem.classList.remove('active');
      });
      const allBrands = Array.from(document.querySelectorAll('.brands__input')) as HTMLInputElement[];
      allBrands.forEach((elem) => { elem.checked = false; });
      stockSlider.noUiSlider!.set([DEFAULT_FILTERS.minStock, DEFAULT_FILTERS.maxStock]);
      priceSlider.noUiSlider!.set([DEFAULT_FILTERS.minPrice, DEFAULT_FILTERS.maxPrice]);
      this.filtersController.resetFilter();
      this.homePageController.sortCards();
      this.homePageController.applyFilter();
      this.addListenerAddToChartBtn();
    });
  }

  private addListenerAddToChartBtn(): void {
    const toChartBtn = document.querySelectorAll('.product__buy') as NodeListOf<Element>;
    toChartBtn.forEach((btn) => {
      const id = Number(btn.getAttribute('data-product')) as number;
      btn.addEventListener('click', () => {
        const productsInCart:ICartProduct = getProductsInCart();
        if (!productsInCart[id]) {
          this.productDetailsController.addToCart(id/* , 'byCart' */);
        } else {
          delete productsInCart[id];
          setProductsInCart(productsInCart);
        }
        this.productDetailsController.changeHeaderInfo();
        this.productDetailsController.changeAddBtnText(id, '.product__buy');
      });
    });
  }
}
