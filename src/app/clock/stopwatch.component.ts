import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <p *ngIf="elapsedTime">
      {{elapsedTime | date:'HH:mm:ss'}} <span class="half-size">{{decisecond}}</span>
    </p>
  `,
  styles: ['.half-size {font-size: 50%;}']
})
export class StopwatchComponent implements OnInit {
  elapsedTime: Date;
  decisecond = 0;

  private startTimeSeconds = new Date().getTime();

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date().getTime();
      this.elapsedTime = new Date(now - this.startTimeSeconds);
      this.decisecond = Math.floor((now / 100) % 10);
    }, 100);
  }
}
