import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent implements AfterViewInit {

  perfData = window.performance.timing;

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.perfData)
    }, 2000)
  }
}
