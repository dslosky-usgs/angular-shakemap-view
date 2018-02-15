import * as L from 'leaflet';

var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "rgb(0, 255, 255)",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.4
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}

var generatePopup = function (props) {
    let mmi;
    let color;
    switch (Math.round(Number(props.intensity))) {
        case 1: {
            mmi = 'I'
            color = '#EFEFF0'
            break;
        }
        case 2: {
            mmi = 'II'
            color = '#EFEFF0'
            break;
        }
        case 3: {
            mmi = 'III'
            color = '#67ACF0'
            break;
        }
        case 4: {
            mmi = 'IV'
            color = '#67F0BC'
            break;
        }
        case 5: {
            mmi = 'V'
            color = '#FCFC48'
            break;
        }
        case 6: {
            mmi = 'VI'
            color = '#FCE648'
            break;
        }
        case 7: {
            mmi = 'VII'
            color = '#FABC15'
            break;
        }
        case 8: {
            mmi = 'VIII'
            color = '#FA7E45'
            break;
        }
        case 9: {
            mmi = 'IX'
            color = '#FB1109'
            break;
        }
        case 10: {
            mmi = 'X'
            color = '#FF0800'
            break;
        }
        case 11: {
            mmi = 'XI'
            color = '#FF0000'
            break;
        }
        case 12: {
            mmi = 'XII'
            color = '#FF0000'
            break;
        }
        default: {
            mmi = '0'
            color = '#FFFFFF'
        }   
    }
    

    return `
    <div>
        <h3 style="border-bottom:2px solid black">` + 
            props.network + ': ' + props.name + 
        `</h3>
        <table style="width:100%;
                    text-align:center;">
            <tr>
                <td style="width:60px;
                        padding-right:10px;">
                    <table style="background-color:` + color + `;
                            border:2px solid black;
                            border-radius:3px;
                            width:100%">
                        <tr>
                            <th>
                                <h1 style="margin:0;">
                                    ` + mmi + `
                                </h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                mmi
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr>
                            <th>
                                ` + makeNumber(props.pga) + ` %g
                            </th>
                        </tr>
                        <tr>
                            <td>
                                pga
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr>
                            <th>
                                ` + makeNumber(props.pgv) + ` cm/s
                            </th>
                        </tr>
                        <tr>
                            <td>
                                pgv
                            </td>
                        </tr>
                    </table>
                </td>
                <td>
                    <table>
                        <tr>
                            <th>
                                ` + makeNumber(props.distance) + ` km
                            </th>
                        </tr>
                        <tr>
                            <td>
                                distance
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    `
}

var makeNumber = function (num) {
    return Number(Number(num).toPrecision(3));
}

export var stationLayer = {
    name: 'Stations',
    id: 'stations',
    productId: 'download/stationlist.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, geojsonMarkerOptions);
            },
            onEachFeature: onEachFeature
        });
    }
};

