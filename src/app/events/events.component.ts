import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { EventService } from './event.service';
import { MapService } from '../map/map.service';

@Component({
  selector: 'shakemap-view-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public eventData: any = [];
  private subs: Subscription[] = [];

  constructor(public eventService: EventService,
              private mapService: MapService) { }

  ngOnInit() {
    this.subs.push(this.eventService.getEventFeed().subscribe(data => {
      this.eventData = data;

      if (data) {
        this.plot(data[0])
      }
    }));
  }

  plot(event) {
    this.mapService.plotEvent.next(event);
  }
}
