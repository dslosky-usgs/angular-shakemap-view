import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ConfService } from './conf.service';
import { EventService } from './events/event.service';

@Component({
  selector: 'shakemap-view-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() eventFeed: any;
  @Input() configs: any;

  title = 'shakemap-view';

  constructor(private c: ConfService,
              private eService: EventService) { }

  ngOnInit() {
    if (!this.configs) {
      this.c.getConfigs();
    } 

    if (!this.eventFeed) {
      this.eService.getEventFeed();
    }
  }

  ngOnChanges() {
    this.eService.manualEntry = this.eventFeed;

    if (this.eventFeed) {
      let events = []

      events.push({
        id: this.eventFeed['properties']['products']['shakemap'][0]['code'],
        shakemap: this.eventFeed['properties']['products']['shakemap']
      });

      this.eService.events.next(events);
    }
    

    if (this.configs) {
      this.c.conf = this.configs;
    }
  }
}