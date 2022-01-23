import {Component, Input} from '@angular/core';
import {ManageDataService} from "../../services/manage-data/manage-data.service";

@Component({
  selector: 'app-show-elements',
  template: `
    <app-elements-container [listOfElements]="getNumbers()"></app-elements-container>
  `,
  styles: [
  ]
})
export class ShowElements {

  @Input() numberOfElements: number = 0;

  constructor(private manageDataService: ManageDataService) {
  }


  getNumbers(): number[] {
    this.manageDataService.setItems(this.numberOfElements);
    return this.manageDataService.getItems();
  }



}
