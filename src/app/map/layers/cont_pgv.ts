import * as L from 'leaflet';

export var pgvLayer = {
    name: 'PGV Contours',
    id: 'pgv_cont',
    productId: 'download/cont_pgv.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json)
    }
};
