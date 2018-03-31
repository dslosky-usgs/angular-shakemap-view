import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'shakemap-view-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {
  public filter = '';
  constructor(private eService: EventService) { }

  ngOnInit() {
  }

  updateEvents(filter) {
    this.eService.getFilteredEvents(filter);
  }

}
