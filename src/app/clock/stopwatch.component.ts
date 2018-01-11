import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div>
      <label for="tenths"
             [style.color]="intervalId ? 'DarkGray' : 'Black'">
        10ths
      </label>
      <input (click)="fractionFormat = 'S'"
             [disabled]="intervalId"
             id="tenths"
             type="radio"
             name="fraction">
      <label for="humdredths"
             [style.color]="intervalId ? 'DarkGray' : 'Black'">
        100ths
      </label>
      <input (click)="fractionFormat = 'SS'"
             [disabled]="intervalId"
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
      {{intervalId ? 'Pause' : 'Start'}}
    </button>
    <button (click)="reset()" [disabled]="totalMillis === 0">Reset</button>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  private previousMillis = 0;
  private currentMillis = 0;
  private _fractionFormat: string;
  private _intervalId: number = null;

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
  }

  get interval(): number {
    return this.fractionFormat === 'S' ? 100 : 10;
  }

  get intervalId(): number {
    return this._intervalId;
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
    this._intervalId = window.setInterval(() => {
      this.currentMillis = this.nowMillis - startMillis;
    }, this.interval);
  }

  private pause(): void {
    this.previousMillis += this.currentMillis;
    this.resetRefreshTimer();
  }

  private resetRefreshTimer(): void {
    clearInterval(this._intervalId);
    this._intervalId = null;
    this.currentMillis = 0;
  }

  private get nowMillis(): number {
    return new Date().getTime();
  }
}
