import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MapService } from '../map/map.service';

import { EventService as EventControl } from 'earthquake-eventpages';

import * as _ from 'underscore';

@Injectable()
export class EventService {
  public selectedEvent = new BehaviorSubject(null);
  public events = new BehaviorSubject(null);
  public manualEntry: any = null;

  private allEvents: any = [];

  constructor(private http: HttpClient,
              private mapService: MapService,
              private eventControl: EventControl
              ) { }

  getEventFeed() {
    this.http.get('products.json').subscribe(events => {
        this.onEvents(events);
      },
      error => {
        
      }
    );
  }

  onEvents(events) {
    this.allEvents = events;
    this.events.next(events);
  }

  getFilteredEvents(filter) {
    if (!filter) {
      this.events.next(this.allEvents);
      return;
    }

    filter = this.parseFilter(filter);

    // make a copy of all events to be filtered
    let filtered: any[] = [];
    for (let event_ of this.allEvents) {

      /* check for known commands or match properties */
      let include = true; 
      for (const command in filter.commands) {
        if (command == 'minMag') {
          if (event_.shakemap[0].properties.magnitude < 
                filter.commands['minMag']) {
            include = false;
            break;
          }
        } // else if match properties
      }

      if (include) {
        for (let search of filter.search) {
          if (JSON.stringify(event_)
              .toLowerCase()
              .indexOf(search.toLowerCase()) < 0) {

            include = false;
            break;
            
          }
        }
      }

      if (include) {
        filtered.push(event_);
      }
    }
    
    if (!_.isEqual(this.events.getValue(), filtered)) {
      this.events.next(filtered);
    }
  }

  parseFilter(filter) {
    // break up filter
    const filterArr = filter.match(/(?:[^\s"]+|"[^"]*")+/g);

    let commands = {};
    let search = [];

    if (filterArr) {
      for (let fil of filterArr) {

        // check for commands
        if (fil.indexOf(':') > 0) {
          fil = fil.split(/:(.+)/);
          commands[fil[0]] = fil[1];
        } else {
          // trim parenthesis
          fil = fil.replace(/"/g, '');
          search.push(fil);
        }

      }
    }
    return {commands: commands, search: search};
  }

  selectEvent(event) {
    this.mapService.plotEvent.next(event);
    this.eventControl.product$.next(event.shakemap[0]);
  }

}
