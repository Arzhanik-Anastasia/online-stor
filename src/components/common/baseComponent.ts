export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tagName = 'div', className = '', content = '') {
    this.element = document.createElement(tagName);
    this.element.classList.add(className);
    this.element.textContent = content;
  }
}

export default BaseComponent;
