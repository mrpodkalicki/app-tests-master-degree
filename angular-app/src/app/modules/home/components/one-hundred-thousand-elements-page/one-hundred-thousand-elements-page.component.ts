import { Component } from '@angular/core';

@Component({
  selector: 'app-one-hundred-thousand-elements-page',
  template: `
    <app-show-elements [numberOfElements]="100000" ></app-show-elements>

  `,
  styles: [
  ]
})
export class OneHundredThousandElementsPageComponent {
}
