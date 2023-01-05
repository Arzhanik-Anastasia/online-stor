/* eslint-disable class-methods-use-this */
import noUiSlider, { target } from 'nouislider';

class Slider {
  public createSlider(targetElement: target, min:number, max:number, minValueLoad: number, maxValueLoad: number): void {
    noUiSlider.create(targetElement, {
      start: [minValueLoad, maxValueLoad],
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
