import * as L from 'leaflet';

var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "rgb(0, 255, 255)",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};

export var stationLayer = {
    name: 'Stations',
    productId: 'download/stationlist.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            }
        });
    }
};
