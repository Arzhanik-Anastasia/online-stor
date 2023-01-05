import { BaseComponent } from '../../../common/baseComponent';
import './searchBar.css';

export class SearchBar extends BaseComponent {
  constructor() {
    super('div', 'search__bar', '');
    this.renderBlock();
  }

  private renderBlock():void {
    this.element.innerHTML = `
            <input type="search" placeholder="Найти..." class="search__input">
        `;
  }
}
