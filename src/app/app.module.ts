import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
