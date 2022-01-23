import { Component } from '@angular/core';
import {ManageDataService} from "../shared/services/manage-data/manage-data.service";

@Component({
  selector: 'app-create-delete-update-elements',
  template: `
    <div>
      <div class="btn-wrapper">
        <button (click)="createElements(10000)">create elements 10 000</button>
        <button (click)="createElements(50000)">create elements  50 000</button>
        <button (click)="createElements(100000)">create elements  100 000</button>
        <button (click)="deleteElements()">delete elements</button>
        <button (click)="updateElements()">updates elements</button>
      </div>

      <div class="elements-wrapper">
        <app-elements-container [listOfElements]="getElements()"></app-elements-container>
      </div>
    </div>
  `,
  styles: [`
    .elements-wrapper {
      margin-top: 3rem;
    }

    .btn-wrapper {
      display: flex;
      flex-direction: column;
    }
    .btn-wrapper > * {
      margin: 5px;
      width: 15rem;
      height: 2rem;
    }


  `]
})
export class CreatDeleteUpdateElementsTestComponent {


  constructor(private manageDataService: ManageDataService) {
  }

  getElements(): number[] {
    return this.manageDataService.getItems();
  }

  createElements(numberOfElements: number = 0): void {
    this.manageDataService.setItems(numberOfElements);
  }

  deleteElements(): void {
    this.manageDataService.deleteItems()
  }

  updateElements(): void {
    this.manageDataService.updateList();
  }
}
