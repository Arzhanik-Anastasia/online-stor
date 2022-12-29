import { ProductDetailsController } from './productDetailsController';

export class ProductDetailsListener {
  productDetailsController: ProductDetailsController;

  constructor() {
    this.productDetailsController = new ProductDetailsController();
  }

  public initListener():void {
    this.addListenerToSlider();
  }

  private addListenerToSlider(): void {
    const productSliderItems = Array.from(document.querySelectorAll('.slider__item')) as HTMLDivElement[];
    productSliderItems.forEach((item) => {
      item.addEventListener('click', (e: Event) => {
        if ((e.currentTarget as HTMLDivElement).classList.contains('slider__item')) {
          const allImg = Array.from(document.querySelectorAll('.slider__item')) as HTMLDivElement[];
          allImg.forEach((el) => {
            el.classList.remove('active');
          });
          (e.currentTarget as HTMLDivElement).classList.add('active');
        }
        const currentImg = e.currentTarget as HTMLDivElement;
        const currentImgSrc = currentImg.firstElementChild?.getAttribute('src') as string;
        this.productDetailsController.renderImg(currentImgSrc);
      });
    });
  }
}
