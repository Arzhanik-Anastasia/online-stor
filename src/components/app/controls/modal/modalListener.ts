/* eslint-disable class-methods-use-this */

import { formatDate } from '../../../common/utils';
import { setProductsInCart } from '../services/services';
import { ModalController } from './modalController';

export class ModalListener {
  modalController: ModalController;

  constructor() {
    this.modalController = new ModalController();
  }

  public initListener():void {
    this.addListenerToOverlay();
    this.addListenerConfirm();
    this.addListenerCardChange();
    this.addListenerChangeCVV();
    this.addListenerChangeDateCard();
  }

  private addListenerToOverlay(): void {
    document.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLElement).classList.contains('overlay')) {
        (e.target as HTMLElement).remove();
        this.removeModal();
      }
    });
  }

  private removeModal(): void {
    const modal = document.querySelector('.modal') as HTMLElement;
    if (modal) {
      modal.remove();
    }
  }

  private addListenerConfirm(): void {
    const btnConfirm = document.querySelector('.btn__confirm');
    btnConfirm?.addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.querySelector('form') as HTMLElement;
      const inputsForm = form.querySelectorAll('input');
      inputsForm.forEach((input) => this.modalController.checkedInputs(input));
      const isValid = this.modalController.getFieldError();

      if (!isValid.length) {
        const modal = document.querySelector('.modal') as HTMLElement;
        modal.innerHTML = 'Thank you for your order. In a few seconds you will be redirected to the main page';
        setTimeout(() => {
          document.location.href = '/';
          setProductsInCart({});
        }, 5000);
      }
    });
  }

  private addListenerCardChange():void {
    const inputCard = document.querySelector('.card-number-input') as HTMLInputElement;
    inputCard.addEventListener('input', () => {
      (document.querySelector('.card-img') as HTMLImageElement).src = this.changeLogoCart(inputCard.value[0]);
      if (inputCard.value.length > 16) {
        inputCard.value = inputCard.value.slice(0, 16);
      }
    });
  }

  private changeLogoCart(firstNumber: string): string {
    let srcLogo = './assets/png/default-card.png';
    switch (firstNumber) {
      case '3':
        srcLogo = './assets/svg/amex.svg';
        break;
      case '4':
        srcLogo = './assets/svg/visa.svg';
        break;
      case '5':
        srcLogo = './assets/svg/mc-logo.svg';
        break;
      default:
        break;
    }
    return srcLogo;
  }

  private addListenerChangeCVV(): void {
    const inputCVV = document.querySelector('.card-cvv-input') as HTMLInputElement;
    inputCVV.addEventListener('input', () => {
      if (inputCVV.value.length > 3) {
        inputCVV.value = inputCVV.value.slice(0, 3);
      }
    });
  }

  private addListenerChangeDateCard():void {
    const inputDateCard = document.querySelector('.card-date-input') as HTMLInputElement;
    const pattern = '**/**';
    inputDateCard.addEventListener('input', () => {
      inputDateCard.value = formatDate(inputDateCard.value, pattern);
    });
    inputDateCard.value = formatDate(inputDateCard.value, pattern);
  }
}
