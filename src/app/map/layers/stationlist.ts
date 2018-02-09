import * as L from 'leaflet';

export var stationLayer = {
    name: 'Stations',
    productId: 'download/stationlist.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
