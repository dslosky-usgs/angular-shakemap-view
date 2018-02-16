import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { EventService } from './event.service';

@Component({
  selector: 'shakemap-view-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public eventData: any = [];
  private subs: Subscription[] = [];

  constructor(public eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventFeed().subscribe(data => {
      this.eventData = data;

      if (data) {
        this.plot(data[0])
      }
    });
  }

  plot(event) {
    this.eventService.selectEvent(event);
  }
}
