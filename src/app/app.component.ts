import { Component} from '@angular/core';

import { LiveInfo } from './live-info';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  selectedLiveInfo: LiveInfo;
  title = 'candygogo-schedule';

  setInfo(info:LiveInfo): void {
    this.selectedLiveInfo = info;
  }
}
