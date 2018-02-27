import { Component, OnInit, OnDestroy } from '@angular/core';
import { MapControlService } from './map-control.service';
import { MapService } from '../map.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'shakemap-view-map-control',
  templateUrl: './map-control.component.html',
  styleUrls: ['./map-control.component.scss']
})
export class MapControlComponent implements OnInit, OnDestroy {
  public controlCollapsed: boolean = true;
  public legendCollapsed: boolean = true;
  public control: any[] = [];
  public legend: any = {};
  public onMap: any = {};
  public subs: Subscription[] = [];
  public objKeys: any = Object.keys;

  constructor(public controlService: MapControlService,
              private mapService: MapService) { }

  ngOnInit() {
    this.subs.push(this.controlService.addOverlay_.subscribe((overlay:any) => {
      this.control.push(overlay);
    }))

    this.subs.push(this.controlService.clear_.subscribe((overlay:any) => {
      this.clearAll();
    }))
  }

  toggleLayer(overlay) {
    if (!this.onMap[overlay.name]) {
      this.addLayer(overlay);
    } else {
      this.removeLayer(overlay);
    }
  }

  addLayer(overlay) {
    // if legend images exists, add them
    if (overlay['images']) {
      for (let url of overlay['images']) {
        if (!this.legend[url]) {
          this.legend[url] = {'count': 1,
                                'url': url};
        } else {
          this.legend[url].count += 1;
        }
      }
    }

    this.onMap[overlay.name] = overlay;
    overlay['onMap'] = true;
  }

  removeLayer(overlay) {
    if (this.onMap[overlay.name]) {
      delete this.onMap[overlay.name]
      overlay.onMap = false;

      if (overlay['images']) {
        for (let url of overlay['images']) {
          this.legend[url].count -= 1;
        }
      }
    }
  }

  clearAll() {
    this.control = []
    this.legend = []
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

}
