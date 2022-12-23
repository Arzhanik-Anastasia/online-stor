import CartPage from './pages/cartPage/cartPageView';
import HomePage from './pages/homePage/homePageView';
import NotFoundPage from './pages/notFoundPage/notFoundPage';
import ProductPage from './pages/productPage/productPageView';
import Footer from './view/footer/footer';
import Header from './view/header/header';

export default class App {
  static header: Header;

  static footer: Footer;

  static rootElement: HTMLElement;

  static start():void {
    this.header = new Header();
    this.footer = new Footer();
    this.changeState();
    this.renderPage();
  }

  private static changeState(): void {
    window.addEventListener('hashchange', () => {
      const { hash } = window.location;
      localStorage.setItem('current-page', hash);
      this.cleanPage();
      this.renderPage();
    });
  }

  static renderPage(): void {
    document.body.append(this.header.element);
    document.body.append(this.footer.element);
    const path: string | null = localStorage.getItem('current-page');
    let currentPage: null | HomePage | ProductPage | CartPage | NotFoundPage = null;
    if (path) {
      if (path === '') {
        currentPage = new HomePage();
      } else if (path.includes('product')) {
        const idProduct:number = +path.split('=')[1];
        currentPage = new ProductPage(idProduct);
      } else if (path === '#cart') {
        currentPage = new CartPage();
      } else {
        currentPage = new NotFoundPage();
      }
    } else {
      currentPage = new HomePage();
    }
    currentPage!.renderPage();
  }

  static cleanPage(): void {
    document.querySelector('main')?.remove();
  }
}
