import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UiUrlUtils} from "../shared/utils/ui-url-utils";
import {TenThousandElementsPageComponent} from "./components/ten-thousand-elements-page/ten-thousand-elements-page.component";
import {OneHundredThousandElementsPageComponent} from "./components/one-hundred-thousand-elements-page/one-hundred-thousand-elements-page.component";
import {FiveHundredThousandElementsPageComponent} from "./components/five-hundred-thousand-elements-page/five-hundred-thousand-elements-page.component";

const routes: Routes = [
  {
    path: UiUrlUtils.TEN_THOUSAND, component: TenThousandElementsPageComponent
  },
  {
    path: UiUrlUtils.ONE_HUNDRED_THOUSAND, component: OneHundredThousandElementsPageComponent
  },
  {
    path: UiUrlUtils.FIVE_HUNDRED_THOUSAND, component: FiveHundredThousandElementsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingTestRoutingModule { }
