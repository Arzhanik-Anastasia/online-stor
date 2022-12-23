import { BaseComponent } from '../../../common/baseComponent';

class ProductPage extends BaseComponent {
  constructor(id: number) {
    super('main', 'main', '');
  }

  public renderPage(): void {
    const wrapperSection = new BaseComponent('div', 'product__page', 'ЭТО СТРАНИЦА ТОВАРА');
    this.element.append(wrapperSection.element);
    document.querySelector('header')?.after(this.element);
  }
}

export default ProductPage;
