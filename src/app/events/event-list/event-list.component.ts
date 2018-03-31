import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from '../event.service';

@Component({
  selector: 'shakemap-view-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {
  public eventData: any = [];
  private init = false;
  private subs = new Subscription();

  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.subs.add(this.eventService.events.subscribe((data: any[]) => {
      this.onEvents(data);
    }));
  }

  onEvents(events) {
    if (events == null) {
      this.eventData = [];
      return;
    }

    this.eventData = events;

    if ((events.length) > 0 && !this.init) {
      this.plot(events[0])
      this.init = true;
    }
  }

  plot(event) {
    this.eventService.selectEvent(event);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
