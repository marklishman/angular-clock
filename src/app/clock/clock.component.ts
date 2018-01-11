import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
      <h1>{{date | date:'HH:mm:ss'}}</h1>
  `
})
export class ClockComponent implements OnInit {
  date: Date;

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 500);
  }

}
