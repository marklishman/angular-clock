import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch-lite',
  template: `
    <h1>
      {{elapsedTime | date:'HH:mm:ss'}}
      <span class="half-size">{{elapsedTime | date:'S'}}</span>
    </h1>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchLiteComponent {
  private totalMillis = 0;
  private intervalId: number = null;

  get elapsedTime(): Date {
    return new Date(this.totalMillis);
  }

  get isRunning(): number {
    return this.intervalId;
  }

  get isTimeSet(): number {
    return this.totalMillis;
  }

  start(): void {
    const startMillis = this.nowMillis;
    this.intervalId = window.setInterval(() => {
      this.totalMillis = this.nowMillis - startMillis;
    }, 100);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset(): void {
    this.stop();
    this.totalMillis = 0;
  }

  private get nowMillis(): number {
    return new Date().getTime();
  }
}
