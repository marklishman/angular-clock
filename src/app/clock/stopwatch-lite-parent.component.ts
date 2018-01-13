import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch-lite-parent',
  template: `
    <app-stopwatch-lite #stopwatch></app-stopwatch-lite>
    <button (click)="stopwatch.start()" [disabled]="stopwatch.isTimeSet">Start</button>
    <button (click)="stopwatch.stop()" [disabled]="!stopwatch.isRunning">Stop</button>
    <button (click)="stopwatch.reset()" [disabled]="!stopwatch.isTimeSet">Reset</button>
  `
})
export class StopwatchLiteParentComponent {
}
