import * as L from 'leaflet';

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
    let color;
    switch (Math.round(Number(props.value))) {
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

function getLineStyle(feature) {
    let mmi;
    let color;
    switch (Math.round(Number(feature.properties.value))) {
        case 1: {
            color = '#EFEFF0'
            break;
        }
        case 2: {
            color = '#EFEFF0'
            break;
        }
        case 3: {
            color = '#67ACF0'
            break;
        }
        case 4: {
            color = '#67F0BC'
            break;
        }
        case 5: {
            color = '#FCFC48'
            break;
        }
        case 6: {
            color = '#FCE648'
            break;
        }
        case 7: {
            color = '#FABC15'
            break;
        }
        case 8: {
            color = '#FA7E45'
            break;
        }
        case 9: {
            color = '#FB1109'
            break;
        }
        case 10: {
            color = '#FF0800'
            break;
        }
        case 11: {
            color = '#FF0000'
            break;
        }
        case 12: {
            color = '#FF0000'
            break;
        }
        default: {
            color = '#FFFFFF'
        }
    }

    lineStyle.color = color;
    return lineStyle
}

export var mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return L.geoJson(json, {
            style: function (feature, latlng) {
                return getLineStyle(feature);
            },
            onEachFeature: onEachFeature
        });
    }
};
