/* eslint-disable class-methods-use-this */
import {
  validateAdress, validateCardNumber, validateEmail, validateName, validatePhone, validateCardCVV, formatDate,
} from '../../../common/utils';
import { setProductsInCart } from '../services/services';

export class ModalListener {
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
      const isValid: boolean = this.checkedValidation();
      if (isValid) {
        const modal = document.querySelector('.modal') as HTMLElement;
        modal.innerHTML = 'Thank you for your order. In a few seconds you will be redirected to the main page';
        setTimeout(() => {
          document.location.href = '/';
          setProductsInCart({});
        }, 5000);
      }
    });
  }

  private checkedValidation(): boolean {
    const inputName = document.querySelector('.person-name') as HTMLInputElement;
    const errName = document.querySelector('.name-err') as HTMLDivElement;
    errName.textContent = validateName(inputName.value) ? '' : 'Name is invalid';
    const inputPhone = document.querySelector('.person-phone') as HTMLInputElement;
    const errPhone = document.querySelector('.phone-err') as HTMLDivElement;
    errPhone.textContent = validatePhone(inputPhone.value) ? '' : 'Phone is invalid';
    const inputAdress = document.querySelector('.person-adress') as HTMLInputElement;
    const errAdress = document.querySelector('.adress-err') as HTMLDivElement;
    errAdress.textContent = validateAdress(inputAdress.value) ? '' : 'Adress is invalid';
    const inputEmail = document.querySelector('.person-email') as HTMLInputElement;
    const errEmail = document.querySelector('.email-err') as HTMLDivElement;
    errEmail.textContent = validateEmail(inputEmail.value) ? '' : 'Email is invalid';
    const inputCard = document.querySelector('.card-number-input') as HTMLInputElement;
    const errCard = document.querySelector('.card-err') as HTMLDivElement;
    errCard.textContent = validateCardNumber(inputCard.value) ? '' : 'Card is invalid';
    const inputCVV = document.querySelector('.card-cvv-input') as HTMLInputElement;
    const errCVV = document.querySelector('.cvv-err') as HTMLDivElement;
    errCVV.textContent = validateCardCVV(inputCVV.value) ? '' : 'CVV is invalid';

    return validateName(inputName.value)
                          && validatePhone(inputPhone.value)
                          && validateAdress(inputAdress.value)
                          && validateEmail(inputEmail.value)
                          && validateCardNumber(inputCard.value)
                          && validateCardCVV(inputCVV.value);
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
    const inputDateCard = document.querySelector('.card-date') as HTMLInputElement;
    const pattern = '**/**';
    inputDateCard.addEventListener('input', () => {
      inputDateCard.value = formatDate(inputDateCard.value, pattern);
    });
    inputDateCard.value = formatDate(inputDateCard.value, pattern);
  }
}
