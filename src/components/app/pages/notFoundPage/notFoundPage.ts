import { BaseComponent } from '../../../common/baseComponent';

class NotFoundPage extends BaseComponent {
  constructor() {
    super('main', 'not_found-page', 'СТРАНИЦА НЕ НАЙДЕНА');
  }

  public renderPage(): void {
    document.querySelector('header')?.after(this.element);
  }
}

export default NotFoundPage;
