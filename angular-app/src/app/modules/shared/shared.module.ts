import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsContainerComponent } from './components/elements-container/elements-container.component';
import { TenThousandElementsComponent } from './components/ten-thousand-elements/ten-thousand-elements.component';
import { FiveHundredThousandElementsComponent } from './components/five-hundred-thousand-elements/five-hundred-thousand-elements.component';
import { OneHundredThousandElementsComponent } from './components/one-hundred-thousand-elements/one-hundred-thousand-elements.component';
import {ShowElements} from "./components/show-elements/show-elements";



@NgModule({
  declarations: [
    ElementsContainerComponent,
    TenThousandElementsComponent,
    FiveHundredThousandElementsComponent,
    OneHundredThousandElementsComponent,
    ShowElements
  ],
  exports: [
    ElementsContainerComponent,
    ShowElements
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
