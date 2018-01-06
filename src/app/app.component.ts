import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <a routerLink="/clock" routerLinkActive="disabled">Clock</a> |
      <a routerLink="/stopwatch" routerLinkActive="disabled">Stopwatch</a>
    </p>
    <h1>
      <router-outlet></router-outlet>
    </h1>
  `,
  styles: [`
    .disabled {
      pointer-events: none;
      cursor: default;
      color: #404040;
      text-decoration: none;
    }`]
})
export class AppComponent {
}
