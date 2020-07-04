import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LiveInfo } from './live-info';

import { Observable }     from 'rxjs';
import { map, catchError} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private url: string;
  constructor (private http: HttpClient) {
    let today = new Date();
    this.url = 'https://www.googleapis.com/calendar/v3/calendars/4vfiijma3k6rjhm26j63tbvmgs@group.calendar.google.com/events?';
    this.url += 'key=AIzaSyBSv_tRfcR4vkmdXN8n2DPeIxIIzcIwnhU';
    this.url += '&timeMin=';
    this.url += today.toISOString();
  }

  getEvents(): Observable<LiveInfo[]> {
    return this.http.get(this.url).pipe(
                    map((json) => {
                      return json['items'];
                    }),
                    map(this.sortData),
                    map(this.convertLiveInfo),
                    catchError(this.handleError));
  }

  private sortData(items: Object[]) {
    items.sort((a:any, b:any) => {
      const dateA = new Date(a.start.dateTime);
      const dateB = new Date(b.start.dateTime);
      return dateA.getTime() < dateB.getTime() ? -1 : 1;
    });
    return items;
  }


  private convertLiveInfo(items: Object[]) : LiveInfo[] {
    const lives: LiveInfo[] = [];
    items.forEach((item:any) => {
      lives.push(new LiveInfo(
        new Date(item.start.dateTime),
        item.summary,
        item.description
      ));
    });
    return lives;
  }

  private handleError(error: any) {
    console.log(error.message);
    return Observable.throw(error.message);
  }
}
