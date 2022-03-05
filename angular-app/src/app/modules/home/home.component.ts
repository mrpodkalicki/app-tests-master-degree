import {Component} from '@angular/core';
import {UiUrlUtils} from "../shared/utils/ui-url-utils";

@Component({
  selector: 'app-home',
  template:`
    <p>Initial tests</p>
    <div class="btn-wrapper">
      <button class="btn" [routerLink]="['/'+ UI_URL.TEN_THOUSAND]">Go to 10 000 </button>
      <button  class="btn" [routerLink]="['/'+ UI_URL.ONE_HUNDRED_THOUSAND]">Go to 100 000 </button>
      <button  class="btn" [routerLink]="['/'+ UI_URL.FIVE_HUNDRED_THOUSAND]">Go to 500 000 </button>
    </div>
    <p>lazy-loading</p>
    <div class="btn-wrapper">
      <button class="btn" [routerLink]="['/' + UI_URL.LAZY_LOADING_TEST + '/' + UI_URL.TEN_THOUSAND]">Go to 10 000 </button>
      <button  class="btn" [routerLink]="['/' + UI_URL.LAZY_LOADING_TEST + '/'+ UI_URL.ONE_HUNDRED_THOUSAND]">Go to 100 000 </button>
      <button  class="btn" [routerLink]="['/' + UI_URL.LAZY_LOADING_TEST + '/'+ UI_URL.FIVE_HUNDRED_THOUSAND]">Go to 500 000 </button>
    </div>
    <p>Create / update</p>
    <div class="btn-wrapper">
      <button [routerLink]="['/'+ UI_URL.CREATE_DELETE_UPDATE_TEST]">Create/ updates tests </button>
    </div>
  `,
  styles: [`
    .btn-wrapper {
      display: flex;
      flex-direction: column;
    }

    .btn-wrapper > * {
      margin: 5px;
      width: 15rem;
      height: 2rem;
    }
  `]
})
export class HomeComponent {
  UI_URL = UiUrlUtils;
}
