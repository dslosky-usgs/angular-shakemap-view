import * as L from 'leaflet';

export var miLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mi.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
