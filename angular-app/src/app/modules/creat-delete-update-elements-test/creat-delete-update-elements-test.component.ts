import {Component} from '@angular/core';
import {ManageDataService} from "../shared/services/manage-data/manage-data.service";

@Component({
  selector: 'app-create-delete-update-elements',
  template: `
    <div>
      <div class="btn-wrapper">
        <button (click)="createElements(10000)">create elements 10 000</button>
        <button (click)="createElements(25000)">create elements  25 000</button>
        <button (click)="createElements(50000)">create elements  50 000</button>
        <button (click)="deleteElements()">delete elements</button>
        <button (click)="updateElements()">updates elements</button>
      </div>

      <div class="elements-wrapper">
        <app-elements-container [listOfElements]="getElements()"></app-elements-container>
      </div>
      {{measureAfterRenderElements()}}
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
  markerNameA: any;
  markerNameB: any;

  constructor(private manageDataService: ManageDataService) {
  }

  measureAfterRenderElements():void {
    this.markerNameB = performance.now();
    console.log(this.markerNameA, this.markerNameB, this.markerNameB - this.markerNameA, 'render html')
  }

  getElements(): number[] | string[] {
    return this.manageDataService.getItems();
  }

  createElements(numberOfElements: number = 0): void {
    this.markerNameA = performance.now();
    this.manageDataService.setItems(numberOfElements);
  }

  deleteElements(): void {
    this.markerNameA = performance.now();
    this.manageDataService.deleteItems();
  }

  updateElements(): void {
    this.markerNameA = performance.now();
    this.manageDataService.updateList();
  }
}
