import { BaseComponent } from '../../../common/baseComponent';
import './colorSort.css';

class ColorSort extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super('div', 'controls__colors', '');
    this.renderBlock(parentNode);
  }

  private renderBlock(parentNode:HTMLElement):void {
    this.element.innerHTML = `
        <h3 class="color__title">Цвет: </h3>
            <button class="colors-item white" data-color="белый"></button>
            <button class="colors-item black" data-color="черный"></button>
            <button class="colors-item red" data-color="красный"></button>
            <button class="colors-item blue" data-color="синий"></button>
            <button class="colors-item green" data-color="зелёный"></button>
        `;
    parentNode.append(this.element);
  }
}

export default ColorSort;
