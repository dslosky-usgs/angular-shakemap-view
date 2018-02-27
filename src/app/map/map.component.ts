declare function require(string): string;

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import * as L from 'leaflet';

import { MapService } from './map.service';
import { LayerService } from './layers/layer.service';
import { ConfService } from '../conf.service';
import { MapControlService } from './map-control/map-control.service';

@Component({
  selector: 'shakemap-view-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private map: any = null;
  private basemap: any = null;
  private layersControl: any = null;
  private defLayers: any[] = [];
  private allLayers: any[] = [];

  constructor(private mapService: MapService,
              private layerService: LayerService,
              private controlService: MapControlService,
              private c: ConfService) { }

  ngOnInit() {
    this.subs.push(this.mapService.plotEvent.subscribe(event => {
      this.clearMap();
      this.plotEvent(event);
    }));

    this.subs.push(this.layerService.nextLayer.subscribe(layer => {
      this.addLayer(layer);
    }));


    // eslint-disable-next-line  
    delete L.Icon.Default.prototype._getIconUrl
    // eslint-disable-next-line  
    L.Icon.Default.mergeOptions({  
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
      iconUrl: require('leaflet/dist/images/marker-icon.png'),  
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
    })

    this.genBasemap();
    this.map = L.map('map', {
        scrollWheelZoom: false                    
      }).setView([51.505, -0.09], 13);
    this.basemap.addTo(this.map);
    this.layersControl = L.control.layers({'Basemap': this.basemap});

    this.mapService.map = this.map
  }

  plotEvent(event) {
    //this.basemap.addTo(this.map);
    this.layersControl = L.control.layers({'Basemap': this.basemap});
    //this.layersControl.addTo(this.map);
    
    this.layerService.genLayers(event);
  }

  addLayer(layer) {
    this.layersControl.addOverlay(layer.layer, layer.name);
    this.controlService.addOverlay(layer.layer, layer.name, layer['legendImages']);

    if (this.c.conf['defaultLayers'].includes(layer.id)) {
      layer.layer.addTo(this.map);

      // Set bounds based on new default layers
      this.defLayers.push(layer.layer);
      let group = L.featureGroup(this.defLayers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    }

    // track current non-base layers for later removal
    this.allLayers.push(layer.layer);
  }

  genBasemap() {
    this.basemap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + this.mapService.mapKey, {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery � <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        });
  }

  clearMap() {
    if (this.layersControl) {
      this.layersControl.remove();
    }

    /*
    this.map.eachLayer(layer => {
      this.map.removeLayer(layer);
    });
    */

    for (let layer of this.allLayers) {
      layer.removeFrom(this.map);
    }

    // clear the tracked layers
    this.defLayers = [];
    this.allLayers = [];
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
