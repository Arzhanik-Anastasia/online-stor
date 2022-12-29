export class ProductDetailsController {
  public renderImg(currentImg: string): void {
    const productImgBlockNode = document.querySelector('.product__image') as HTMLElement;
    productImgBlockNode.setAttribute('src', currentImg);
    console.log(this.renderImg);
  }
}
