import { ProductDetailsController } from './productDetailsController';
import { getIdFromUrl } from '../services/services';

export class ProductDetailsListener {
  private productDetailsController: ProductDetailsController;

  constructor() {
    this.productDetailsController = new ProductDetailsController();
  }

  public initListener():void {
    this.addListenerToSlider();
    this.addListenerAddToChartBtn();
    this.addListenerBuyNowBtn();
  }

  private addListenerToSlider(): void {
    const productSliderItems = document.querySelectorAll('.slider__item') as NodeListOf<Element>;
    productSliderItems.forEach((item) => {
      item.addEventListener('click', (e: Event) => {
        const slide = e.currentTarget as HTMLDivElement;
        if (slide.classList.contains('slider__item')) {
          const allImg = Array.from(document.querySelectorAll('.slider__item')) as HTMLDivElement[];
          allImg.forEach((el) => {
            el.classList.remove('active');
          });
          slide.classList.add('active');
        }
        const currentImgSrc = slide.firstElementChild?.getAttribute('src') as string;
        this.productDetailsController.changeSrcOfMainImg(currentImgSrc);
      });
    });
  }

  private addListenerAddToChartBtn(): void {
    const toChartBtn = document.querySelector('.product__to-chart') as HTMLButtonElement;
    toChartBtn.addEventListener('click', () => {
      this.productDetailsController.addToCart(getIdFromUrl(), 'byCart');
      this.productDetailsController.changeAddBtnText(getIdFromUrl(), '.product__to-chart');
      this.productDetailsController.changeHeaderInfo();
    });
  }

  private addListenerBuyNowBtn(): void {
    const toChartBtn = document.querySelector('.product__buy') as HTMLButtonElement;
    toChartBtn.addEventListener('click', () => {
      this.productDetailsController.addToCart(getIdFromUrl(), 'now');
      this.productDetailsController.changeAddBtnText(getIdFromUrl(), '.product__to-chart');
      this.productDetailsController.changeHeaderInfo();
    });
  }
}
