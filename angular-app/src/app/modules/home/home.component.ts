import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-create-elements-on-init [numberOfElements]="10000"></app-create-elements-on-init>
<!--    <app-create-elements-on-init [numberOfElements]="50000"></app-create-elements-on-init>-->
<!--    <app-create-elements-on-init [numberOfElements]="100000"></app-create-elements-on-init>-->
  `,
  styles: [
  ]
})
export class HomeComponent {


}
