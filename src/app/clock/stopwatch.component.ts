import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div>
      {{totalTime | date:'HH:mm:ss'}} <span class="half-size">{{deciseconds}}</span>
    </div>
    <button (click)="toggleStartStop()">
      {{refreshTimer ? 'pause' : 'start'}}
    </button>
    <button (click)="reset()" [disabled]="isReset()">Reset</button>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  deciseconds = 0;
  refreshTimer: number = null;

  private totalMillis = 0;
  private currentMillis = 0;

  get totalTime(): Date {
    return new Date(this.totalMillis + this.currentMillis);
  }

  toggleStartStop(): void {
    if (this.refreshTimer) {
      this.pause();
    } else {
      this.start();
    }
  }

  reset(): void {
    this.resetRefreshTimer();
    this.totalMillis = 0;
    this.deciseconds = 0;
  }

  isReset(): boolean {
    return this.currentMillis + this.totalMillis === 0;
  }

  private start(): void {
    const startMillis = new Date().getTime();
    this.refreshTimer = window.setInterval(() => {
      const now = new Date().getTime();
      this.currentMillis = now - startMillis;
      this.deciseconds = Math.floor((now / 100) % 10);
    }, 100);
  }

  private pause(): void {
    this.totalMillis += this.currentMillis;
    this.resetRefreshTimer();
  }

  resetRefreshTimer(): void {
    clearInterval(this.refreshTimer);
    this.refreshTimer = null;
    this.currentMillis = 0;
  }
}
