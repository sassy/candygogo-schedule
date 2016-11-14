import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleService } from './schedule.service';

@NgModule({
  imports : [
    BrowserModule,
    HttpModule
  ],
  declarations: [AppComponent],
  providers: [ScheduleService],
  bootstrap: [AppComponent]
})

export class AppModule {}
