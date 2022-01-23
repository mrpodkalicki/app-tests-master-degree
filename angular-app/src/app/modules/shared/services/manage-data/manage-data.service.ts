import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  listOfItems: number[] = [];

  setItems(numberOfElements: number): void {
    this.listOfItems = [...Array(numberOfElements).keys()]
  }

  getItems(): number[] {
    return this.listOfItems;
  }

  deleteItems(): void {
    this.listOfItems.splice(0,this.listOfItems.length)
  }

  updateList(): void {
    this.listOfItems = this.listOfItems.map(() => 0);
  }
}
