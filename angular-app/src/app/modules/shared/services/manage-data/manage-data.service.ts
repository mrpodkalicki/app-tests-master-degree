import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  listOfItems: number[] | string[] = [];

  setItems(numberOfElements: number): void {
    this.listOfItems = [...Array(numberOfElements).keys()].map(() => 'New element');
  }

  getItems(): number[] | string[] {
    return this.listOfItems;
  }

  deleteItems(): void {
    this.listOfItems.splice(0,this.listOfItems.length);
  }

  updateList(): void {
    this.listOfItems = this.listOfItems.map(() => 'Updated all');
  }
}
