import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-elements-container',
  template: `
    <div class="container">
      <div *ngFor="let item of listOfElements; let i = index; trackBy: trackByFn">
        <p>{{item}}</p>
      </div>
    </div>
  `,
  styles: [
    `.container {
      height: 98vh;
      width: 100%;
      overflow: auto;
      text-align: center;
    }`
  ]
})
export class ElementsContainerComponent {

  @Input() listOfElements: any = [];

  trackByFn(index: any, item: string): string {
    return item;
  }

}
