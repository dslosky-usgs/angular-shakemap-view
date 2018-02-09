webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<shakemap-view-map></shakemap-view-map>\n<shakemap-view-events></shakemap-view-events>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf_service__ = __webpack_require__("../../../../../src/app/conf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(c) {
        this.c = c;
        this.title = 'shakemap-view';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.c.getConfigs();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__conf_service__["a" /* ConfService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_layers_layer_service__ = __webpack_require__("../../../../../src/app/map/layers/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_event_service__ = __webpack_require__("../../../../../src/app/events/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__conf_service__ = __webpack_require__("../../../../../src/app/conf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_events_component__["a" /* EventsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__map_layers_layer_service__["a" /* LayerService */], __WEBPACK_IMPORTED_MODULE_7__events_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_8__map_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_9__conf_service__["a" /* ConfService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/conf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfService = /** @class */ (function () {
    function ConfService(http) {
        this.http = http;
        this.conf = {};
    }
    ConfService.prototype.getConfigs = function () {
        var _this = this;
        /* This is a description */
        this.http.get('configs.json')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (res) { return res.json(); })).subscribe(function (conf) {
            _this.conf = conf;
        });
    };
    ConfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ConfService);
    return ConfService;
}());



/***/ }),

/***/ "../../../../../src/app/events/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEventFeed = function () {
        return this.http.get('products.json')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (res) { return res.json(); }));
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"event-list\">\n    <div class=\"event\" *ngFor=\"let event of eventData\">\n      <h1 (click)=\"plot(event)\">{{ event.id }}</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events/events.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  position: fixed;\n  top: 0;\n  border: 2px black dashed;\n  background-color: white;\n  z-index: 500; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__("../../../../../src/app/events/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsComponent = /** @class */ (function () {
    function EventsComponent(eventService, mapService) {
        this.eventService = eventService;
        this.mapService = mapService;
        this.eventData = [];
        this.subs = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.eventService.getEventFeed().subscribe(function (data) {
            _this.eventData = data;
            if (data) {
                _this.plot(data[0]);
            }
        }));
    };
    EventsComponent.prototype.plot = function (event) {
        this.mapService.plotEvent.next(event);
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_2__map_map_service__["a" /* MapService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/layers/cont_mmi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mmiLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json);
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/cont_pga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgaLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var pgaLayer = {
    name: 'PGA Contours',
    id: 'pga_cont',
    productId: 'download/cont_pga.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json);
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/epicenter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return epicenterLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var epiIcon = __WEBPACK_IMPORTED_MODULE_0_leaflet__["icon"]({
    iconUrl: 'assets/images/star.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
var epicenterLayer = {
    name: 'Epicenter',
    id: 'epicenter',
    productId: 'download/grid.xml',
    type: 'text',
    generateLayer: function (xml) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xml, 'text/xml');
        var lat, lon, popupHtml;
        // open up the xml
        var children = xmlDoc.getElementsByTagName('shakemap_grid')[0].childNodes;
        var nodes = Array.prototype.slice.call(children);
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            if (node.nodeName === 'event') {
                lat = node.getAttribute('lat');
                lon = node.getAttribute('lon');
                popupHtml =
                    '<table>' +
                        '<tr><th>' + node.getAttribute('event_id') + '</th></tr>' +
                        '<tr><table><th>Magnitude:</th><td>' + node.getAttribute('magnitude') + '</td></table></tr>' +
                        '<tr><table><th>Depth:</th><td>' + node.getAttribute('depth') + '</td></table></tr>' +
                        '<tr><table><th>Location:</th><td>' + node.getAttribute('lat') + ', ' + node.getAttribute('lon') + '</td></table></tr>' +
                        '</table>';
                break;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["marker"]([lat, lon], { icon: epiIcon })
            .bindPopup(popupHtml)
            .openPopup();
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cont_mmi__ = __webpack_require__("../../../../../src/app/map/layers/cont_mmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cont_pga__ = __webpack_require__("../../../../../src/app/map/layers/cont_pga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__epicenter__ = __webpack_require__("../../../../../src/app/map/layers/epicenter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stations__ = __webpack_require__("../../../../../src/app/map/layers/stations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var layers = [__WEBPACK_IMPORTED_MODULE_6__epicenter__["a" /* epicenterLayer */], __WEBPACK_IMPORTED_MODULE_4__cont_mmi__["a" /* mmiLayer */], __WEBPACK_IMPORTED_MODULE_5__cont_pga__["a" /* pgaLayer */], __WEBPACK_IMPORTED_MODULE_7__stations__["a" /* stationLayer */]];
var LayerService = /** @class */ (function () {
    function LayerService(http) {
        this.http = http;
        this.nextLayer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.data = {};
        this.waiting = [];
    }
    LayerService.prototype.genLayers = function (event) {
        var _this = this;
        // stop waiting on old map layers
        this.stopWaiting();
        var contents = event['shakemap'][0]['contents'];
        var _loop_1 = function (layer) {
            // check if this layers product is available
            if (layer['productId'] in contents) {
                // get the product
                this_1.waiting.push(this_1.http.get(contents[layer['productId']]['url'])
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (res) {
                    if (layer.type === 'json') {
                        return res.json();
                    }
                    else {
                        return res.text();
                    }
                }))
                    .subscribe(function (product) {
                    // generate the layer
                    var l = {};
                    l['layer'] = layer.generateLayer(product);
                    l['name'] = layer.name;
                    // let the map know it's ready
                    _this.nextLayer.next(l);
                    // record data for later usage
                    _this.data[layer['id']] = product;
                }));
            }
        };
        var this_1 = this;
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var layer = layers_1[_i];
            _loop_1(layer);
        }
    };
    LayerService.prototype.stopWaiting = function () {
        // Stop existing request for layers
        for (var _i = 0, _a = this.waiting; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    LayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], LayerService);
    return LayerService;
}());



/***/ }),

/***/ "../../../../../src/app/map/layers/stations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stationLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

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
    var mmi;
    var color;
    switch (Math.round(Number(props.intensity))) {
        case 1: {
            mmi = 'I';
            color = '#EFEFF0';
            break;
        }
        case 2: {
            mmi = 'II';
            color = '#EFEFF0';
            break;
        }
        case 3: {
            mmi = 'III';
            color = '#67ACF0';
            break;
        }
        case 4: {
            mmi = 'IV';
            color = '#67F0BC';
            break;
        }
        case 5: {
            mmi = 'V';
            color = '#FCFC48';
            break;
        }
        case 6: {
            mmi = 'VI';
            color = '#FCE648';
            break;
        }
        case 7: {
            mmi = 'VII';
            color = '#FABC15';
            break;
        }
        case 8: {
            mmi = 'VIII';
            color = '#FA7E45';
            break;
        }
        case 9: {
            mmi = 'IX';
            color = '#FB1109';
            break;
        }
        case 10: {
            mmi = 'X';
            color = '#FF0800';
            break;
        }
        case 11: {
            mmi = 'XI';
            color = '#FF0000';
            break;
        }
        case 12: {
            mmi = 'XII';
            color = '#FF0000';
            break;
        }
        default: {
            mmi = '0';
            color = '#FFFFFF';
        }
    }
    return "\n    <div>\n        <h3 style=\"border-bottom:2px solid black\">" +
        props.network + ': ' + props.name +
        "</h3>\n        <table style=\"width:100%;text-align:center\">\n            <tr>\n                <td>\n                    <table style=\"background-color:" + color + ";\n                            border:2px solid black;\n                            border-radius:3px\">\n                        <tr>\n                            <th>\n                                <h1 style=\"margin:0;\">\n                                    " + mmi + "\n                                </h1>\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                mmi\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pga) + " %g\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pga\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pgv) + " cm/s\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pgv\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.distance) + " km\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                distance\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n    ";
};
var makeNumber = function (num) {
    return Number(Number(num).toPrecision(3));
};
var stationLayer = {
    name: 'Stations',
    id: 'stations',
    productId: 'download/stationlist.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            pointToLayer: function (feature, latlng) {
                return __WEBPACK_IMPORTED_MODULE_0_leaflet__["circleMarker"](latlng, geojsonMarkerOptions);
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_layer_service__ = __webpack_require__("../../../../../src/app/map/layers/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conf_service__ = __webpack_require__("../../../../../src/app/conf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(mapService, layerService, c) {
        this.mapService = mapService;
        this.layerService = layerService;
        this.c = c;
        this.subs = [];
        this.map = null;
        this.basemap = null;
        this.layersControl = null;
        this.defLayers = [];
        this.allLayers = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.mapService.plotEvent.subscribe(function (event) {
            _this.clearMap();
            _this.plotEvent(event);
        }));
        this.subs.push(this.layerService.nextLayer.subscribe(function (layer) {
            _this.addLayer(layer);
        }));
        // eslint-disable-next-line  
        delete __WEBPACK_IMPORTED_MODULE_1_leaflet__["Icon"].Default.prototype._getIconUrl;
        // eslint-disable-next-line  
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["Icon"].Default.mergeOptions({
            iconRetinaUrl: __webpack_require__("../../../../leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: __webpack_require__("../../../../leaflet/dist/images/marker-icon.png"),
            shadowUrl: __webpack_require__("../../../../leaflet/dist/images/marker-shadow.png")
        });
        this.genBasemap();
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('map').setView([51.505, -0.09], 13);
        this.basemap.addTo(this.map);
        this.layersControl = __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers({ 'Basemap': this.basemap });
    };
    MapComponent.prototype.plotEvent = function (event) {
        //this.basemap.addTo(this.map);
        this.layersControl = __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers({ 'Basemap': this.basemap });
        this.layersControl.addTo(this.map);
        this.layerService.genLayers(event);
    };
    MapComponent.prototype.addLayer = function (layer) {
        this.layersControl.addOverlay(layer.layer, layer.name);
        if (this.c.conf['defaultLayers'].includes(layer.name)) {
            layer.layer.addTo(this.map);
            // Set bounds based on new default layers
            this.defLayers.push(layer.layer);
            var group = __WEBPACK_IMPORTED_MODULE_1_leaflet__["featureGroup"](this.defLayers);
            this.map.fitBounds(group.getBounds().pad(0.1));
        }
        // track current non-base layers for later removal
        this.allLayers.push(layer.layer);
    };
    MapComponent.prototype.genBasemap = function () {
        this.basemap = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + 'pk.eyJ1IjoiZHNsb3NreSIsImEiOiJjaXR1aHJnY3EwMDFoMnRxZWVtcm9laWJmIn0.1C3GE0kHPGOpbVV9kTxBlQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery � <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        });
    };
    MapComponent.prototype.clearMap = function () {
        if (this.layersControl) {
            this.layersControl.remove();
        }
        /*
        this.map.eachLayer(layer => {
          this.map.removeLayer(layer);
        });
        */
        for (var _i = 0, _a = this.allLayers; _i < _a.length; _i++) {
            var layer = _a[_i];
            layer.removeFrom(this.map);
        }
        // clear the tracked layers
        this.defLayers = [];
        this.allLayers = [];
    };
    MapComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_3__layers_layer_service__["a" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_4__conf_service__["a" /* ConfService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = /** @class */ (function () {
    function MapService() {
        this.plotEvent = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map