import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingTestRoutingModule } from './lazy-loading-test-routing.module';
import { LazyLoadingTestComponent } from './lazy-loading-test.component';
import { OneHundredThousandElementsPageComponent } from './components/one-hundred-thousand-elements-page/one-hundred-thousand-elements-page.component';
import { FiveHundredThousandElementsPageComponent } from './components/five-hundred-thousand-elements-page/five-hundred-thousand-elements-page.component';
import {TenThousandElementsPageComponent} from "./components/ten-thousand-elements-page/ten-thousand-elements-page.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LazyLoadingTestComponent,
    TenThousandElementsPageComponent,
    OneHundredThousandElementsPageComponent,
    FiveHundredThousandElementsPageComponent,
  ],
  imports: [
    CommonModule,
    LazyLoadingTestRoutingModule,
    SharedModule,
  ]
})
export class LazyLoadingTestModule { }
