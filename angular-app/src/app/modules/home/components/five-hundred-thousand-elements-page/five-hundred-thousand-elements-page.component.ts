import { Component } from '@angular/core';

@Component({
  selector: 'app-five-hundred-thousand-elements-page',
  template: `
    <app-show-elements [numberOfElements]="500000" ></app-show-elements>
  `,
  styles: [
  ]
})
export class FiveHundredThousandElementsPageComponent {
}
