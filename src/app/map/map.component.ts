import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LayerService } from './layers/layer.service';

@Component({
  selector: 'shakemap-view-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private layerService: LayerService) { }

  ngOnInit() {
    var mymap = L.map('map').setView([51.505, -0.09], 13);

    this.genBasemap().addTo(mymap);

    L.marker([51.5, -0.09]).addTo(mymap)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(mymap).bindPopup("I am a polygon.");
    var popup = L.popup();

    var layers = this.layerService.getLayers();
    for (let layer in layers) {
      layers[layer].addTo(mymap);
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
}
