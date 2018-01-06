import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
      {{date | date:'HH:mm:ss'}}
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
