import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {UiUrlUtils} from "./modules/shared/utils/ui-url-utils";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: UiUrlUtils.CREATE_DELETE_UPDATE_TEST,
    loadChildren: () => import('./modules/creat-delete-update-elements-test/creat-delete-update-elements-test.module').then(m => m.CreatDeleteUpdateElementsTestModule)
  },
  {
    path: UiUrlUtils.LAZY_LOADING_TEST,
    loadChildren: () => import('./modules/lazy-loading-test/lazy-loading-test.module').then(m => m.LazyLoadingTestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
