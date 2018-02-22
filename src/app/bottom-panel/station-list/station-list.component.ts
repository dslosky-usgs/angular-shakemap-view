import { Component, OnInit } from '@angular/core';
import { StationService } from './station.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'shakemap-view-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {
  private subs: Subscription[] = [];
  public stations: any = [];
  constructor(public stationService: StationService) { }

  ngOnInit() {
    this.subs.push(this.stationService.data.subscribe((data: any) => {
      this.stations = data;
    }));
  }

}
