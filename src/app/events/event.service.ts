import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/replaysubject';
import { MapService } from '../map/map.service';
import { InfoService } from '../bottom-panel/info/info.service';

@Injectable()
export class EventService {
  public selectedEvent = new ReplaySubject(1);

  constructor(private http: HttpClient,
              private mapService: MapService,
              private infoService: InfoService) { }

  getEventFeed() {
    return this.http.get('products.json')
  }

  selectEvent(event) {
    this.mapService.plotEvent.next(event);
    this.infoService.getInfo(event);
  }

}
