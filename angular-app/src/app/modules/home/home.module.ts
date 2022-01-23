import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from "../shared/shared.module";
import { FiveHundredThousandElementsPageComponent } from './components/five-hundred-thousand-elements-page/five-hundred-thousand-elements-page.component';
import { TenThousandElementsPageComponent } from './components/ten-thousand-elements-page/ten-thousand-elements-page.component';
import { OneHundredThousandElementsPageComponent } from './components/one-hundred-thousand-elements-page/one-hundred-thousand-elements-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    FiveHundredThousandElementsPageComponent,
    TenThousandElementsPageComponent,
    OneHundredThousandElementsPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
