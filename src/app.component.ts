import { Component} from '@angular/core';

import { LiveInfo } from './live.info';

@Component({
  selector: 'app-schedule',
  styleUrls: ['./src/app.component.css'],
  templateUrl: './src/app.component.html'
})

export class AppComponent {
  selectedLiveInfo: LiveInfo;

  setInfo(info:LiveInfo): void {
    this.selectedLiveInfo = info;
  }
}
