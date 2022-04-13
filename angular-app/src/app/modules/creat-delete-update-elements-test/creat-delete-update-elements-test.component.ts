import {AfterViewChecked, Component} from '@angular/core';
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
export class CreatDeleteUpdateElementsTestComponent implements AfterViewChecked {
  markA = 0;
  markB = 0;
  action = '';

  constructor(private manageDataService: ManageDataService) {
  }

  ngAfterViewChecked(): void {
      this.showTime();
  }

  showTime = () => {
    this.markB = performance.now();
    console.log("start:",  this.markA, 'stop:', this.markB);
    console.log('time:', this.markB -  this.markA, 'action:', this.action);
  }

  getElements(): number[] | string[] {
    return this.manageDataService.getItems();
  }

  createElements(numberOfElements: number = 0): void {
    this.action = 'create'
    this.markA = performance.now();
    this.manageDataService.setItems(numberOfElements);
  }

  deleteElements(): void {
    this.action = 'delete'
    this.markA = performance.now();
    this.manageDataService.deleteItems();
  }

  updateElements(): void {
    this.action = 'update'
    this.markA = performance.now();
    this.manageDataService.updateList();
  }
}
