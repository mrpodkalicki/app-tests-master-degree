import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsContainerComponent } from './components/elements-container/elements-container.component';



@NgModule({
  declarations: [
    ElementsContainerComponent
  ],
  exports: [
    ElementsContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
