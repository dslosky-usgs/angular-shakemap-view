import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { EventService } from './event.service';

@Component({
  selector: 'shakemap-view-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public sub = new Subscription()
  public focus = false;

  constructor() { }

  ngOnInit() {
  }

  setFocus(focus) {
    this.focus = focus;
  }
}
