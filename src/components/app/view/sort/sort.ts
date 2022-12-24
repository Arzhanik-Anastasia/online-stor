import { BaseComponent } from '../../../common/baseComponent';
import './sort.css';

export class Sort extends BaseComponent {
  constructor() {
    super('div', 'sort', '');
    this.renderSortBlock();
  }

  private renderSortBlock(): void {
    this.element.innerHTML = `
      <div class="select__title">Сортировка</div>
      <select class="sort-select">
        <option selected="" value="sort-name-max">По названию от «А» до «Я»</option>
        <option value="sort-name-min">По названию от «Я» до «А»</option>
        <option value="sort-price-max">По цене по возрастанию</option>
        <option value="sort-price-min">По цене по убыванию</option>
      </select>
      <button class="reset__filters">Сброс фильтров</button>
    `;
  }
}
