import * as L from 'leaflet';
layer = {};
layer['generateLayer'] = function () {
    let circle = L.circle([51.508, -0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).bindPopup("I am a circle.");

    return circle;

};

layer['name'] = 'Epicenter';

export var layer;
