import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ScheduleService} from '../schedule.service';
import { LiveInfo } from '../live-info';

@Component({
  selector: 'app-schedule-list',
  styleUrls: ['./schedule-list.component.scss'],
  templateUrl: './schedule-list.component.html'
})

export class ScheduleListComponent implements OnInit {
  lives: LiveInfo[] = [];
  @Output() select: EventEmitter<LiveInfo> = new EventEmitter();

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.getEvents()
          .subscribe((events) => {
            this.lives = events;
          });
  }

  getDescription(info: LiveInfo): void {
    this.select.emit(info);
  }

}
