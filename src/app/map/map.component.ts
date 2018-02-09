declare function require(string): string;

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as L from 'leaflet';

import { MapService } from './map.service';
import { LayerService } from './layers/layer.service';
import { ConfService } from '../conf.service';

@Component({
  selector: 'shakemap-view-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private map: any = null;
  private layersControl: any = null;
  private layers: any[] = [];

  constructor(private mapService: MapService,
              private layerService: LayerService,
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

    this.map = L.map('map').setView([51.505, -0.09], 13);
    let basemap = this.genBasemap()
    basemap.addTo(this.map);
    this.layersControl = L.control.layers({'Basemap': basemap});
  }

  plotEvent(event) {
    let basemap = this.genBasemap();
    basemap.addTo(this.map);
    this.layersControl = L.control.layers({'Basemap': basemap});
    this.layersControl.addTo(this.map);
    
    this.layerService.genLayers(event);
  }

  addLayer(layer) {
    this.layersControl.addOverlay(layer.layer, layer.name);

    if (this.c.conf['defaultLayers'].includes(layer.name)) {
      layer.layer.addTo(this.map);

      // Set bounds based on new default layers
      this.layers.push(layer.layer);
      let group = L.featureGroup(this.layers);
      this.map.fitBounds(group.getBounds().pad(0.1));
    }
  }

  genBasemap() {
    return L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoiZHNsb3NreSIsImEiOiJjaXR1aHJnY3EwMDFoMnRxZWVtcm9laWJmIn0.1C3GE0kHPGOpbVV9kTxBlQ', {
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
    this.map.eachLayer(layer => {
      this.map.removeLayer(layer);
    });

    this.layers = [];
  }

  ngOnDestroy() {
    for (let sub of this.subs) {
      sub.unsubscribe();
    }
  }
}
