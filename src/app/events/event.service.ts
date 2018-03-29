import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MapService } from '../map/map.service';

import { EventService as EventControl } from 'earthquake-eventpages';

@Injectable()
export class EventService {
  public selectedEvent = new BehaviorSubject(null);
  public events = new BehaviorSubject(null);
  public manualEntry: any = null;

  constructor(private http: HttpClient,
              private mapService: MapService,
              private eventControl: EventControl
              ) { }

  getEventFeed() {
    this.http.get('products.json').subscribe(
      data => {
        this.events.next(data);
      },
      error => {
        
      }
    );
  }

  parseFromEventJson(event) {

  }

  selectEvent(event) {
    this.mapService.plotEvent.next(event);
    this.eventControl.product$.next(event.shakemap[0]);
  }

}
