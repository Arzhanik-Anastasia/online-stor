import { IProduct } from '../../../../types';

export class ProductController {
  productInCart: IProduct[];

  constructor() {
    this.productInCart = [];
  }

  public getCartProducts():IProduct[] {
    if (localStorage.getItem('cart-products')) {
      this.productInCart = JSON.parse(localStorage.getItem('cart-products') as string);
    } else {
      this.productInCart = [];
    }
    return this.productInCart;
  }

  public setCartProducts(product: IProduct[]): void {
    this.productInCart = product;
    localStorage.setItem('cart-products', JSON.stringify(this.productInCart));
  }
}
