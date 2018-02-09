import * as L from 'leaflet';

export var pgaLayer = {
    name: 'PGA Contours',
    id: 'pga_cont',
    productId: 'download/cont_pga.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
