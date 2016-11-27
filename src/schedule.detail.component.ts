import { Component, Input } from '@angular/core';

import { LiveInfo } from './live.info';

@Component({
  selector: 'schedule-detail',
  styleUrls: ['./src/schedule.detail.component.css'],
  templateUrl: './src/schedule.detail.component.html'
})

export class ScheduleDetailComponent {
  @Input()
  selectedInfo: LiveInfo;
}
