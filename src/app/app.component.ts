import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      <a routerLink="/clock" routerLinkActive="disabled">Clock</a> |
      <a routerLink="/stopwatch" routerLinkActive="disabled">Stopwatch</a> |
      <a routerLink="/stopwatch-lite" routerLinkActive="disabled">Stopwatch Lite</a>
    </p>
    <p>
      <router-outlet></router-outlet>
    </p>
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
