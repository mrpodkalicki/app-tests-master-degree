import { Component } from '@angular/core';

@Component({
  selector: 'app-ten-thousand-elements-page',
  template: `
    <app-show-elements [numberOfElements]="10000" ></app-show-elements>
  `,
  styles: [
  ]
})
export class TenThousandElementsPageComponent {

}
