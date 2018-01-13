import { Component } from '@angular/core';

enum FractionFormat {
  TENTHS = 'S',
  HUNDREDTHS = 'SS'
}

@Component({
  selector: 'app-stopwatch',
  template: `
    <div>
      <input (click)="showTenths()"
             id="tenths"
             type="radio"
             name="fraction">
      <label for="tenths">10ths</label>
      <input (click)="showHundredths()"
             id="hundredths"
             type="radio"
             name="fraction"
             checked>
      <label for="hundredths">100ths</label>
    </div>
    <h1>
      {{elapsed | date:'HH:mm:ss'}}
      <span class="half-size">{{elapsed | date:fractionFormat}}</span>
    </h1>
    <button (click)="toggleStartStop()">
      {{isTimerRunning ? 'Pause' : 'Start'}}
    </button>
    <button (click)="reset()" [disabled]="!totalMillis">Reset</button>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {

  private previousMillis = 0;
  private currentMillis = 0;
  private intervalId: number = null;
  private _fractionFormat: FractionFormat = FractionFormat.HUNDREDTHS;

  get elapsed(): Date {
    return new Date(this.totalMillis);
  }

  get totalMillis(): number {
    return this.previousMillis + this.currentMillis;
  }

  get fractionFormat(): FractionFormat {
    return this._fractionFormat;
  }

  get isTimerRunning(): number {
    return this.intervalId;
  }

  showTenths(): void {
    this._fractionFormat = FractionFormat.TENTHS;
    this.restartTimer();
  }

  showHundredths(): void {
    this._fractionFormat = FractionFormat.HUNDREDTHS;
    this.restartTimer();
  }

  toggleStartStop(): void {
    this.isTimerRunning ? this.stop() : this.start();
  }

  reset(): void {
    this.resetTimer();
    this.previousMillis = 0;
  }

  private start(): void {
    const startMillis = this.nowMillis;
    this.intervalId = window.setInterval(() => {
      this.currentMillis = this.nowMillis - startMillis;
    }, this.interval);
  }

  private stop(): void {
    this.previousMillis += this.currentMillis;
    this.resetTimer();
  }

  private restartTimer(): void {
    if (this.isTimerRunning) {
      this.stop();
      this.start();
    }
  }

  private resetTimer(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.currentMillis = 0;
  }

  private get interval(): number {
    return this.fractionFormat === FractionFormat.TENTHS ? 100 : 10;
  }

  private get nowMillis(): number {
    return new Date().getTime();
  }
}
