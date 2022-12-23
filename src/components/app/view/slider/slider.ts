/* eslint-disable class-methods-use-this */
import noUiSlider, { target } from 'nouislider';

class Slider {
  public createSlider(targetElement: target, min:number, max:number): void {
    noUiSlider.create(targetElement, {
      start: [min, max],
      connect: true,
      range: {
        min,
        max,
      },
      step: 1,
    });
  }
}

export default Slider;
