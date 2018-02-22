import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/replaysubject';
import { MapService } from '../map/map.service';
import { InfoService } from '../bottom-panel/info/info.service';

@Injectable()
export class EventService {
  public selectedEvent = new ReplaySubject(1);
  public events = new ReplaySubject(1)
  public manualEntry: any = null;

  constructor(private http: HttpClient,
              private mapService: MapService,
              private infoService: InfoService) { }

  getEventFeed() {
    this.http.get('products.json').subscribe(
      data => {
        this.events.next(data);
      },
      error => {
        let events = []
        if (this.manualEntry) {
          events.push({
            id: this.manualEntry['properties']['products']['shakemap'][0]['code'],
            shakemap: this.manualEntry['properties']['products']['shakemap']
          });
        }
        this.events.next(events);
      }
    );
  }

  parseFromEventJson(event) {

  }

  selectEvent(event) {
    this.mapService.plotEvent.next(event);
    this.infoService.getInfo(event);
  }

}
