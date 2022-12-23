import { BaseComponent } from '../../../common/baseComponent';
import './footer.css';

class Footer extends BaseComponent {
  constructor() {
    super('footer', 'footer', '');
    this.renderFooter();
  }

  private renderFooter():void {
    this.element.innerHTML = `
    <div class="footer-wrapper container">
      <a class="footer__rss" href="https://rs.school/js/" target="_blank">
        <img src="./assets/svg/rss.svg" alt="logo RS-School">
      </a>
      <div class='footer__gits'>
        <a class="footer__git" href="https://github.com/Arzhanik-Anastasia" target="_blank">
          <img src="./assets/png/github.png" alt="logo github" width="50" height="50">
        </a>
        <a class="footer__git" href="https://github.com/aleksmazur/" target="_blank">
          <img src="./assets/png/github.png" alt="logo github" width="50" height="50">
        </a>
      </div>
    `;
  }
}

export default Footer;
