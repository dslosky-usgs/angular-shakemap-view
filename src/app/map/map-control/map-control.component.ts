import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapControlService } from './map-control.service';
import { MapService } from '../map.service';
import { Subscription } from 'rxjs/Subscription';
import { ConfService } from '../../conf.service';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/take';

@Component({
  selector: 'shakemap-view-map-control',
  templateUrl: './map-control.component.html',
  styleUrls: ['./map-control.component.scss']
})
export class MapControlComponent implements OnInit, OnDestroy {
  public controlCollapsed: boolean = true;
  public legendCollapsed: boolean = true;
  public control: any[] = [];
  public plotting: string[] = [];
  public legend: any = {};
  public onMap: any = {};
  public subs: Subscription[] = [];
  public objKeys: any = Object.keys;
  private initLoading: boolean = true; // True after first map layers render
  private timeoutTimer: any = null;

  constructor(public controlService: MapControlService,
              private mapService: MapService,
              private confService: ConfService) { }

  ngOnInit() {
    this.subs.push(this.controlService.addOverlay_.subscribe((overlay:any) => {
      this.newOverlay(overlay);
    }));

    this.subs.push(this.controlService.clear_.subscribe((overlay:any) => {
      // remember which layers are plotted
      this.clearAll();
    }));

    this.timeoutTimer = TimerObservable.create(5000, 1000).subscribe((time: any)=> {
      this.initLoading = false;
      this.timeoutTimer.unsubscribe();
    });
  }

  toggleLayer(overlay) {
    if (!this.onMap[overlay.id]) {
      this.addLayer(overlay);
    } else {
      this.removeLayer(overlay);
    }
  }

  newOverlay(overlay) {
    this.control.push(overlay);

    if (((this.confService.conf['defaultLayers'].includes(overlay.id)) 
              && (this.plotting.length === 0) || 
              ((this.confService.conf['defaultLayers'].includes(overlay.id)) 
              && this.initLoading)) || 
              (this.plotting.indexOf(overlay.id) > -1)) {
        
        // add the layer to the map
      this.addLayer(overlay);
    }
  }

  addLayer(overlay) {
    // if legend images exists, add them
    if (overlay['legendImages']) {
      for (let url of overlay['legendImages']) {
        if (!this.legend[url]) {
          this.legend[url] = {'count': 1,
                                'url': url};
        } else {
          this.legend[url].count += 1;
        }
      }
    }

    this.onMap[overlay.id] = overlay;
    overlay['onMap'] = true;
    this.plotting.push(overlay.id);

    // add to map
    this.mapService.map.addLayer(overlay.layer)
  }

  removeLayer(overlay) {
    if (this.onMap[overlay.id]) {
      delete this.onMap[overlay.id]
      overlay.onMap = false;

      if (overlay['legendImages']) {
        for (let url of overlay['legendImages']) {
          this.legend[url].count -= 1;
        }
      }
    }

    // remove from map
    this.mapService.map.removeLayer(overlay.layer)

    // stop tracking this layer
    this.plotting = this.plotting.filter(l => l !== overlay.id)
  }

  clearAll() {
    for (let overlay in this.onMap) {
      this.mapService.map.removeLayer(this.onMap[overlay].layer)
    }

    this.control = []
    this.legend = []
    this.onMap = {}
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

}
