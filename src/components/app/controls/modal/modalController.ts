/* eslint-disable class-methods-use-this */
export class ModalController {
  fieldForm: any;

  constructor() {
    this.fieldForm = {
      name: {
        error: 'Name is invalid',
        validator: (value:string) => this.validateName(value),
      },
      phone: {
        error: 'Phone is invalid',
        validator: (value:string) => this.validatePhone(value),
      },
      adress: {
        error: 'Adress is invalid',
        validator: (value:string) => this.validateAdress(value),
      },
      email: {
        error: 'Email is invalid',
        validator: (value:string) => this.validateEmail(value),
      },
      number: {
        error: 'Card is invalid',
        validator: (value:string) => this.validateCardNumber(value),
      },
      cvv: {
        error: 'CVV is invalid',
        validator: (value:string) => this.validateCardCVV(value),
      },
      date: {
        error: 'Date is invalid',
        validator: (value:string) => this.validateDate(value),
      },
      errors: ['name', 'phone', 'adress', 'email', 'number', 'cvv', 'date'],
    };
  }

  public getFieldError(): string[] {
    return this.fieldForm.errors;
  }

  public checkedInputs(input: HTMLInputElement): boolean {
    const nameInput = input.dataset.name as string;
    const errElement = document.querySelector(`.${nameInput}-err`) as HTMLElement;
    const isValid = this.fieldForm[nameInput].validator(input.value);
    if (isValid) {
      this.fieldForm.errors.splice(this.fieldForm.errors.indexOf(nameInput), 1);
      errElement.textContent = '';
    } else {
      if (!this.fieldForm.errors.includes(nameInput)) {
        this.fieldForm.errors.push(nameInput);
      }
      errElement.textContent = this.fieldForm[nameInput].error;
    }
    return !!this.fieldForm.errors;
  }

  private validateName(name: string): boolean {
    const arr = name.trim().split(' ');
    return arr.length >= 2 && arr.every((item) => item.length >= 3);
  }

  private validatePhone(phone: string): boolean {
    const re = /^[+]{1}[1-9]{9,}$/;
    return re.test(phone);
  }

  private validateEmail(email: string): boolean {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
  }

  private validateAdress(adress: string): boolean {
    const arr = adress.trim().split(' ');
    return arr.length >= 3 && arr.every((item) => item.length >= 5);
  }

  private validateCardNumber(card: string): boolean {
    return card.length === 16;
  }

  private validateCardCVV(cvv: string): boolean {
    return cvv.length === 3;
  }

  private validateDate(date: string): boolean {
    const month:number = +date.slice(0, 2);
    const day:number = +date.slice(-2);
    return date.length >= 5 && month <= 12 && day <= 31;
  }
}
