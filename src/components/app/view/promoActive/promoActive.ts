/* eslint-disable class-methods-use-this */
import { BaseComponent } from '../../../common/baseComponent';
import './promoActive.css';

export class PromoActive extends BaseComponent {
  constructor() {
    super('div', 'promo__active');
  }

  public renderBlock(parent: HTMLDivElement, promo:string): void {
    this.element.setAttribute('data-promo-block', promo);
    this.element.innerHTML = `
      Active promo ${promo}
      <p class="promoItem__sale">Sale: 10%</p>
      <button class="promo__button" data-promo='${promo}'>drop</button>
    </div>`;
    parent.append(this.element);
  }
}
