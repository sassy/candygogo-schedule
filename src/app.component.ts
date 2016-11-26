import { Component, OnInit } from '@angular/core';

import {ScheduleService} from './schedule.service';
import { LiveInfo } from './live.info';

@Component({
  selector: 'app-schedule',
  styleUrls: ['./src/app.component.css'],
  templateUrl: './src/app.component.html'
})

export class AppComponent implements OnInit {
  lives: LiveInfo[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getEvents()
          .subscribe((events) => {
            events.forEach((item:any) => {
              const date = new Date(item.start.dateTime);
              let info = new LiveInfo();
              info.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
              info.summary = item.summary;
              info.description = item.description;
              this.lives.push(info);
            });
          });
  }


}
