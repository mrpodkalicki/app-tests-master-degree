import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatDeleteUpdateElementsTestRoutingModule } from './creat-delete-update-elements-test-routing.module';
import {SharedModule} from "../shared/shared.module";
import {CreatDeleteUpdateElementsTestComponent} from "./creat-delete-update-elements-test.component";


@NgModule({
  declarations: [
    CreatDeleteUpdateElementsTestComponent
  ],
  imports: [
    CommonModule,
    CreatDeleteUpdateElementsTestRoutingModule,
    SharedModule
  ]
})
export class CreatDeleteUpdateElementsTestModule { }
