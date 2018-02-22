import { Component, OnInit, Input } from '@angular/core';
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
    this.eService.manualEntry = this.eventFeed;
  }
}