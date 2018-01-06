import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <p *ngIf="elapsedSeconds">
      {{elapsedTime | date:'HH:mm:ss'}} <span class="half-size">{{decisecond}}</span>
    </p>
  `,
  styles: ['.half-size {font-size: 50%;}']
})
export class StopwatchComponent implements OnInit {
  decisecond = 0;
  startTimeSeconds: number = Math.floor(new Date().getTime() / 1000);
  elapsedSeconds: number;

  ngOnInit(): void {
    this.calculateDeciseconds();
  }

  calculateDeciseconds(): void {
    setInterval(() => {
      const millis = new Date().getTime();
      this.elapsedSeconds = Math.floor(millis / 1000) - this.startTimeSeconds;
      this.decisecond = Math.floor(millis / 100 % 10);
    }, 1);
  }

  get elapsedTime(): Date {
    return new Date(this.elapsedSeconds * 1000);
  }

}
