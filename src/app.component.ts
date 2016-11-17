import { Component, OnInit } from '@angular/core';

import {ScheduleService} from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  lives: string[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getEvents()
          .subscribe((events) => {
            events.forEach((item:any) => {
              const date = new Date(item.start.dateTime);
              let ret = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + item.summary;
              this.lives.push(ret);
            });
          });
  }
}
