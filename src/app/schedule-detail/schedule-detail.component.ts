import { Component, Input } from '@angular/core';

import { LiveInfo } from '../live-info';

@Component({
  selector: 'app-schedule-detail',
  styleUrls: ['./schedule-detail.component.scss'],
  templateUrl: './schedule-detail.component.html'
})

export class ScheduleDetailComponent {
  @Input()
  selectedInfo: LiveInfo;
}
