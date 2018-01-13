import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <label>Seconds
      <input [(ngModel)]="showSeconds" type="checkbox">
    </label>
    <label>Date
      <input [(ngModel)]="showDate" type="checkbox">
    </label>
    <h1>{{date | date: timeFormat}}</h1>
    <h3 *ngIf="showDate">{{date | date: 'fullDate'}}</h3>
  `,
  styleUrls: ['./stopwatch.component.css']
})
export class ClockComponent implements OnInit {
  date: Date;
  showSeconds: boolean;
  showDate: boolean;

  get timeFormat(): string {
    return 'HH:mm' + (this.showSeconds ? ':ss' : '');
  }

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 500);
  }

}
