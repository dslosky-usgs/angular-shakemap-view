import * as L from 'leaflet';

var epiIcon = L.icon({
    iconUrl: 'assets/star.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

export var epicenterLayer = {
    name: 'Epicenter',
    id: 'epicenter',
    productId: 'download/info.json',
    productType: 'json',
    legendImages: ['assets/legend-epicenter.png'],
    generateLayer: function (info) {
        let event_info = info['input']['event_information']

        let popupHtml = 
            '<table>' +
            '<tr><th>' + event_info['event_id'] + '</th></tr>' +
            '<tr><table><th>Magnitude:</th><td>' + event_info['magnitude'] + '</td></table></tr>' +
            '<tr><table><th>Depth:</th><td>' + event_info['depth'] + '</td></table></tr>' +
            '<tr><table><th>Location:</th><td>' + event_info['latitude'] + ', ' + event_info['longitude'] + '</td></table></tr>' +
            '</table>';
            

        return L.marker([event_info['latitude'], event_info['longitude']], {icon: epiIcon})
                            .bindPopup(popupHtml)
                            .openPopup();

    }
};
