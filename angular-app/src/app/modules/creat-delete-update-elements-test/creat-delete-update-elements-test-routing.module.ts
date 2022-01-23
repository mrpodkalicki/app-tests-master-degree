import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatDeleteUpdateElementsTestComponent} from "./creat-delete-update-elements-test.component";

const routes: Routes = [
  {
    path: '', component: CreatDeleteUpdateElementsTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatDeleteUpdateElementsTestRoutingModule { }
