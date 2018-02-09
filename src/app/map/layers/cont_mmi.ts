import * as L from 'leaflet';

export var mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
