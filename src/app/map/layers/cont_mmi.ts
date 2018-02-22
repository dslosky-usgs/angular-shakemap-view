import * as L from 'leaflet';
import { getMmiRgba } from './mmi_colors';

var lineStyle = {
    "color": "#EFEFF0",
    "weight": 5,
    "opacity": .8
};

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}

function generatePopup(props) {
    let mmi;
    let color = getMmiRgba(props.value);
    switch (Math.round(Number(props.value))) {
        case 1: {
            mmi = 'I'
            break;
        }
        case 2: {
            mmi = 'II'
            break;
        }
        case 3: {
            mmi = 'III'
            break;
        }
        case 4: {
            mmi = 'IV'
            break;
        }
        case 5: {
            mmi = 'V'
            break;
        }
        case 6: {
            mmi = 'VI'
            break;
        }
        case 7: {
            mmi = 'VII'
            break;
        }
        case 8: {
            mmi = 'VIII'
            break;
        }
        case 9: {
            mmi = 'IX'
            break;
        }
        case 10: {
            mmi = 'X'
            break;
        }
        case 11: {
            mmi = 'XI'
            break;
        }
        case 12: {
            mmi = 'XII'
            break;
        }
        default: {
            mmi = '0'
        }
    }

    let popupContent = `
        <table style="background-color:` + color + `;
                        border:2px solid black;
                        border-radius:3px;
                        width:100%;
                        text-align:center">
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
    `

    return popupContent;
}

export var mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                lineStyle.color = getMmiRgba(feature.properties.value);
                if (lineStyle.weight == 5) {
                    lineStyle.weight = 3;
                } else {
                    lineStyle.weight = 5;
                }

                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};
