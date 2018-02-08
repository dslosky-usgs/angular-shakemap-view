import * as L from 'leaflet';

export var mmiLayer = {
    name: 'MMI Contours',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
