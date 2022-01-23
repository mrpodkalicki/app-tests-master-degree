import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'create',
    loadChildren: () => import('./modules/creat-delete-update-elements-test/creat-delete-update-elements-test.module').then(m => m.CreatDeleteUpdateElementsTestModule)
  },
  {
    path: 'lazy-loading',
    loadChildren: () => import('./modules/lazy-loading-test/lazy-loading-test-routing.module').then(m => m.LazyLoadingTestRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
