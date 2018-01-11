import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div>
      <label for="tenths">
        10ths
      </label>
      <input (click)="fractionFormat = 'S'"
             id="tenths"
             type="radio"
             name="fraction">
      <label for="hundredths">
        100ths
      </label>
      <input (click)="fractionFormat = 'SS'"
             id="hundredths"
             type="radio"
             name="fraction"
             checked>
    </div>
    <h1>
      {{elapsed | date:'HH:mm:ss'}}
      <span class="half-size">{{elapsed | date:fractionFormat}}</span>
    </h1>
    <button (click)="toggleStartStop()">
      {{isTimerRunning ? 'Pause' : 'Start'}}
    </button>
    <button (click)="reset()" [disabled]="totalMillis === 0">Reset</button>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  private previousMillis = 0;
  private currentMillis = 0;
  private intervalId: number = null;
  private _fractionFormat: string;

  ngOnInit(): void {
    this.fractionFormat = 'SS';
  }

  get elapsed(): Date {
    return new Date(this.totalMillis);
  }

  get totalMillis(): number {
    return this.previousMillis + this.currentMillis;
  }

  get fractionFormat(): string {
    return this._fractionFormat;
  }

  set fractionFormat(fractionFormat: string) {
    this._fractionFormat = fractionFormat;
    if (this.intervalId) {
      this.pause();
      this.start();
    }
  }

  get interval(): number {
    return this.fractionFormat === 'S' ? 100 : 10;
  }

  get isTimerRunning(): number {
    return this.intervalId;
  }

  toggleStartStop(): void {
    if (this.intervalId) {
      this.pause();
    } else {
      this.start();
    }
  }

  reset(): void {
    this.resetRefreshTimer();
    this.previousMillis = 0;
  }

  private start(): void {
    const startMillis = this.nowMillis;
    this.intervalId = window.setInterval(() => {
      this.currentMillis = this.nowMillis - startMillis;
    }, this.interval);
  }

  private pause(): void {
    this.previousMillis += this.currentMillis;
    this.resetRefreshTimer();
  }

  private resetRefreshTimer(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentMillis = 0;
  }

  private get nowMillis(): number {
    return new Date().getTime();
  }
}
