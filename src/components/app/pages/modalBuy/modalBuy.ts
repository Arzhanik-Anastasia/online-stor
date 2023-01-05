import { BaseComponent } from '../../../common/baseComponent';
import { ModalListener } from '../../controls/modal/modalListener';
import './modalView.css';

class ModalBuy extends BaseComponent {
  modalListener: ModalListener;

  constructor() {
    super('div', 'modal');
    this.modalListener = new ModalListener();
  }

  public renderView(): void {
    this.element.innerHTML = `
    <form class="form__card">
    <div class="person__details">
      <h4 class="person__details-title">Personal details</h4>
      <div class="person-name-block">
        <input class="person-name" placeholder="Name" type="text" />
        <p class="name-err"></p>
      </div>
      <div class="person-phone-block">
        <input class="person-phone" placeholder="Phone" type="tel" />
        <p class="phone-err"></p>
      </div>
      <div class="person-adress-block">
        <input class="person-adress" placeholder="Adress" type="text" />
        <p class="adress-err"></p>
      </div>
      <div class="person-email-block">
        <input class="person-email" placeholder="Email" type="email" />
        <p class="email-err"></p>
      </div>
    </div>
    <div class="card__details">
      <h4 class="card__details-title">Credit card details</h4>
      <div class="card__number">
        <img
          class="card-img"
          src="./assets/png/default-card.png"
          width="50px"
          height="50px"
        />
        <input
          placeholder="Card number"
          class="card-number-input"
          type="number"
        />
      </div>
      <p class="card-err"></p>
      <div class="card__info">
        <div class="card-cvv-block">
          <input class="card-cvv-input" placeholder="CVV" type="number" />
          <p class="cvv-err"></p>
        </div>
        <div class="card-date-block">
          <input
            class="card-date"
            placeholder="Date"
            type="text"
          />
          <p class="date-err"></p>
        </div>
      </div>
    </div>
    <button class="btn__confirm" type="submit">CONFIRM</button>
  </form>
    `;
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);
    document.body.append(this.element);
    this.modalListener.initListener();
  }
}

export default ModalBuy;
