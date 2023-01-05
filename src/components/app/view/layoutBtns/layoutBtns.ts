import { BaseComponent } from '../../../common/baseComponent';
import './layoutBtns.css';

export class LayoutBtns extends BaseComponent {
  constructor() {
    super('div', 'layout__btns', '');
    this.renderBlock();
  }

  private renderBlock():void {
    this.element.innerHTML = `
            <button class="layout__btn active" data-display="list">Список</button>
            <button class="layout__btn" data-display="grid">Сетка</button>
        `;
  }
}
