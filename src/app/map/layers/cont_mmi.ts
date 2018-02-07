import * as L from 'leaflet';

export var mmiLayer = {
    name: 'MMI Contours',
    generateLayer: function () {
        let circle = L.circle([51.508, -0.11], 500, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5
            }).bindPopup("I am a circle.");

        return circle;
    }
};
