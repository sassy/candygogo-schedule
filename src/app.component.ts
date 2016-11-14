import { Component, OnInit } from '@angular/core';

import {ScheduleService} from './schedule.service';

@Component({
  selector: 'app-schedule',
  template:`
  <ul>
    <li *ngFor="let live of lives">{{live}}</li>
  </ul>
  `
})

export class AppComponent implements OnInit {
  lives: string[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getEvents()
          .subscribe((events) => {
            console.log(events);
            events.forEach((item:any) => {
              const date = new Date(item.start.dateTime);
              let ret = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + item.summary;
              this.lives.push(ret);
            });
          });
  }
}
