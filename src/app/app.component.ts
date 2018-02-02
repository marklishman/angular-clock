import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header *ngIf="devMode">
      <a routerLink="/clock" routerLinkActive="disabled">Clock</a> |
      <a routerLink="/stopwatch" routerLinkActive="disabled">Stopwatch</a> |
      <a routerLink="/stopwatch-lite" routerLinkActive="disabled">Stopwatch Lite</a>
    </header>
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

  devMode = isDevMode();
}
