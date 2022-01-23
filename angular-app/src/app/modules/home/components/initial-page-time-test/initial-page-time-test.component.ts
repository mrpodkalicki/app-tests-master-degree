import {Component, Input} from '@angular/core';
import {ManageDataService} from "../../../shared/services/manage-data/manage-data.service";

@Component({
  selector: 'app-create-elements-on-init',
  template: `
    <app-elements-container [listOfElements]="getNumbers()"></app-elements-container>
  `,
  styles: [
  ]
})
export class InitialPageTimeTestComponent {

  @Input() numberOfElements: number = 1000;

  constructor(private manageDataService: ManageDataService) {
  }


  getNumbers(): number[] {
    this.manageDataService.setItems(this.numberOfElements);
    return this.manageDataService.getItems();
  }



}
