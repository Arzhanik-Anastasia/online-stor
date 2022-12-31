import { IProduct } from '../../../../types';
import { ProductController } from './productController';
import data from '../../../../data';

export class ProductDetailsController {
  productController: ProductController;

  allProduct: IProduct[] | [];

  productsInCart: IProduct[];

  constructor() {
    this.allProduct = data;
    this.productController = new ProductController();
    this.productsInCart = this.productController.getCartProducts();
  }

  // в каком классе этот метод описать?
  public renderImg(currentImg: string): void {
    const productImgBlockNode = document.querySelector('.product__image') as HTMLElement;
    productImgBlockNode.setAttribute('src', currentImg);
    console.log(this.allProduct);
  }

  public addToCart(id: number): void {
    this.productsInCart = this.productController.getCartProducts();
    this.productsInCart.push(this.allProduct[id]);
    this.productController.setCartProducts(this.productsInCart);
  }

  public changeHeaderInfo(): void {
    const headerCart = document.querySelector('.header__count') as HTMLElement;
    const counter = this.productsInCart.length;
    headerCart.innerHTML = counter.toString();
    const headerTotalPrice = document.querySelector('.header__total-price') as HTMLDivElement;
    //@ts-ignore
    // не получается типизировать reduce!
    const totalPrice = this.productsInCart.reduce((a, b) => a.price + b.price) as unknown as number;
    headerTotalPrice.innerHTML = `Cart total: ${totalPrice}`;
  }
}
