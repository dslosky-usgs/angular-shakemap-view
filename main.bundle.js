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

module.exports = "<shakemap-view-map></shakemap-view-map>\n<shakemap-view-events></shakemap-view-events>\n<shakemap-view-bottom-panel></shakemap-view-bottom-panel>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_event_service__ = __webpack_require__("../../../../../src/app/events/event.service.ts");
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
    function AppComponent(c, eService) {
        this.c = c;
        this.eService = eService;
        this.title = 'shakemap-view';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.configs) {
            this.c.getConfigs();
        }
        this.eService.manualEntry = this.eventFeed;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "eventFeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "configs", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__conf_service__["a" /* ConfService */],
            __WEBPACK_IMPORTED_MODULE_2__events_event_service__["a" /* EventService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_layers_layer_service__ = __webpack_require__("../../../../../src/app/map/layers/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__events_events_component__ = __webpack_require__("../../../../../src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_event_service__ = __webpack_require__("../../../../../src/app/events/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__conf_service__ = __webpack_require__("../../../../../src/app/conf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bottom_panel_bottom_panel_component__ = __webpack_require__("../../../../../src/app/bottom-panel/bottom-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bottom_panel_info_info_component__ = __webpack_require__("../../../../../src/app/bottom-panel/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bottom_panel_info_info_service__ = __webpack_require__("../../../../../src/app/bottom-panel/info/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bottom_panel_station_list_station_list_component__ = __webpack_require__("../../../../../src/app/bottom-panel/station-list/station-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bottom_panel_station_list_station_service__ = __webpack_require__("../../../../../src/app/bottom-panel/station-list/station.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bottom_panel_bottom_panel_component__["a" /* BottomPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bottom_panel_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bottom_panel_station_list_station_list_component__["a" /* StationListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__map_layers_layer_service__["a" /* LayerService */], __WEBPACK_IMPORTED_MODULE_8__events_event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_9__map_map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_10__conf_service__["a" /* ConfService */], __WEBPACK_IMPORTED_MODULE_13__bottom_panel_info_info_service__["a" /* InfoService */], __WEBPACK_IMPORTED_MODULE_15__bottom_panel_station_list_station_service__["a" /* StationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-panel/bottom-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@panelState]='panelState'>\n    <div class=\"state-toggle\" (click)=\"toggleState()\">\n      <div class=\"arrow\">\n        <i class=\"fa fa-angle-up\" *ngIf=\"panelState === 'inactive'\"></i>\n        <i class=\"fa fa-angle-down\" *ngIf=\"panelState === 'active'\"></i>\n      </div>\n    </div>\n\n    <div class=\"content-container\">\n      <div class=\"tabs\">\n        <h3 class=\"tab\" *ngIf=\"infoService.hasData\" (click)=\"selected='metadata'\">Metadata</h3>\n        <h3 class=\"tab\" *ngIf=\"stationService.hasData\" (click)=\"selected='stations'\">Station List</h3>\n      </div>\n\n      <div class=\"exit\" *ngIf=\"selected\" (click)=\"selected=null\">\n        <i class=\"fa fa-times\"></i>\n      </div>\n\n      <shakemap-view-info *ngIf=\"selected==='metadata'\"></shakemap-view-info>\n      <shakemap-view-station-list *ngIf=\"selected==='stations'\"></shakemap-view-station-list>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bottom-panel/bottom-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  z-index: 1000;\n  width: 100%;\n  background-color: #ffffff;\n  text-align: center; }\n\n.container.show {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.state-toggle {\n  position: absolute;\n  top: 0;\n  -webkit-transform: translateY(-30%) translateX(-50%);\n          transform: translateY(-30%) translateX(-50%);\n  height: 75px;\n  width: 150px;\n  border-radius: 40%;\n  left: 50%;\n  background-color: #ffffff; }\n\n.content-container {\n  position: relative;\n  z-index: 1001; }\n\n.arrow {\n  font-size: 32px;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%);\n  cursor: pointer; }\n\n.tab {\n  display: inline-block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 10px;\n  border: 2px solid #0099FF;\n  border-radius: 10px;\n  cursor: pointer; }\n\n.tab:hover {\n  background-color: #0099FF; }\n\n.exit {\n  text-align: right;\n  margin-right: 10px;\n  font-size: 34px; }\n\n.exit .fa {\n  cursor: pointer; }\n\n.exit .fa:hover {\n  color: #0099FF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-panel/bottom-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info_service__ = __webpack_require__("../../../../../src/app/bottom-panel/info/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__station_list_station_service__ = __webpack_require__("../../../../../src/app/bottom-panel/station-list/station.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BottomPanelComponent = /** @class */ (function () {
    function BottomPanelComponent(infoService, stationService) {
        this.infoService = infoService;
        this.stationService = stationService;
        this.panelState = 'inactive';
        this.selected = null;
    }
    BottomPanelComponent.prototype.ngOnInit = function () {
        this.panelState = 'active';
    };
    BottomPanelComponent.prototype.select = function (tab) {
        if (tab === this.selected) {
            this.selected = null;
        }
        else {
            this.selected = tab;
        }
    };
    BottomPanelComponent.prototype.toggleState = function () {
        if (this.panelState === 'active') {
            this.panelState = 'inactive';
        }
        else {
            this.panelState = 'active';
        }
    };
    BottomPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-bottom-panel',
            template: __webpack_require__("../../../../../src/app/bottom-panel/bottom-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom-panel/bottom-panel.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('panelState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateY(100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: 'translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__info_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_3__station_list_station_service__["a" /* StationService */]])
    ], BottomPanelComponent);
    return BottomPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-panel/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"info-container\" *ngIf=\"info\">\n\n    <div class=\"input column\" *ngIf=\"info.input\">\n      <h2>Input</h2>\n\n      <div class=\"event-info group\" *ngIf=\"info.input.event_information\">\n        <h3>Event Information</h3>\n\n        <table>\n          <tr *ngFor=\"let name of name_order['event_information']\">\n            <th *ngIf=\"info.input.event_information[name]\">{{ names['event_information'][name] }}</th>\n            <td *ngIf=\"info.input.event_information[name]\">\n              {{ name !== 'dyfi' ? info.input.event_information[name] : info.input.event_information['intensity']}}\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n      \n\n    <div class=\"output column\" *ngIf=\"info.output\">\n      <h2>Output</h2>\n\n      <div class=\"ground-motion group\" *ngIf=\"info.output['ground_motions']\">\n        <h3>Ground Motion/Intensity Information</h3>\n\n        <table>\n          <thead>\n            <th>Type</th>\n            <th>Max value in grid</th>\n            <th>Max value on land</th>\n            <th>Bias</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let name of name_order['ground_motions']\">\n              <th *ngIf=\"info.output['ground_motions'][name]\">{{ names['ground_motions'][name] }}</th>\n              <td *ngIf=\"info.output['ground_motions'][name]\">\n                {{ info.output.ground_motions[name]['max_grid'] | number }}\n              </td>\n              <td *ngIf=\"info.output['ground_motions'][name]\">\n                {{ info.output.ground_motions[name]['max'] | number }}\n              </td>\n              <td *ngIf=\"info.output['ground_motions'][name]\">\n                {{ info.output.ground_motions[name]['bias'].toString().replace('[[', '').replace(']]', '') | number }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n      <div class=\"map-info group\" *ngIf=\"info.output['map_information']\">\n        <h3>Map Information</h3>\n\n        <table>\n          <thead>\n            <th>Type</th>\n            <th>Latitude</th>\n            <th>Longitude</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let name of name_order['map_information']\">\n              <th *ngIf=\"info.output['map_information'][name]\">{{ names['map_information'][name] }}</th>\n              <td *ngIf=\"info.output['map_information'][name]\">\n                {{ info.output['map_information'][name]['latitude'] | number }}\n                {{ info.output['map_information'][name]['units'] !== 'count' ? (info.output['map_information'][name]['units'] ) : ('') }}\n\n              </td>\n              <td *ngIf=\"info.output['map_information'][name]\">\n                {{ info.output['map_information'][name]['longitude'] | number }}\n                {{ info.output['map_information'][name]['units'] !== 'count' ? (info.output['map_information'][name]['units']) : ('') }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"uncertainty group\" *ngIf=\"info.output.uncertainty\">\n        <h3>Uncertainty</h3>\n\n        <table>\n          <tr *ngFor=\"let name of name_order['uncertainty']\">\n            <th *ngIf=\"info.output.uncertainty[name]\">{{ names['uncertainty'][name] }}</th>\n            <td *ngIf=\"info.output.uncertainty[name]\">\n              {{ isNaN(name) ? (info.output.uncertainty[name]) : (info.output.uncertainty[name] | number)}}\n            </td>\n          </tr>\n        </table>\n\n      </div>\n    </div>\n\n    <div class=\"processing column\" *ngIf=\"info.processing\">\n      <h2>Processing</h2>\n\n      <div class=\"ground-motion group\" *ngIf=\"info.processing['ground_motion_modules']\">\n        <h3>Ground Mation/Intensity Information</h3>\n\n        <table>\n          <thead>\n            <th>Type</th>\n            <th>Module</th>\n            <th>Reference</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let name of name_order['ground_motion_modules']\">\n              <th *ngIf=\"info.processing['ground_motion_modules'][name]\">{{ names['ground_motion_modules'][name] }}</th>\n              <td *ngIf=\"info.processing['ground_motion_modules'][name]\">\n                {{ info.processing['ground_motion_modules'][name]['module'] }}\n\n              </td>\n              <td *ngIf=\"info.processing['ground_motion_modules'][name]\">\n                {{ info.processing['ground_motion_modules'][name]['reference'] }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"misc group\" *ngIf=\"name_order['miscellaneous']\">\n        <h3>Miscellaneous</h3>\n\n        <table>\n          <tr *ngFor=\"let name of name_order['miscellaneous']\">\n            <th *ngIf=\"info.processing['miscellaneous'][name]\">{{ names['miscellaneous'][name] }}</th>\n            <td *ngIf=\"info.processing['miscellaneous'][name]\">\n              {{ info.processing['miscellaneous'][name] }}\n\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"shakemap group\" *ngIf=\"info.processing['shakemap_versions']\">\n        <h3>ShakeMap Versions</h3>\n\n        <table>\n          <tr *ngFor=\"let name of name_order['shakemap_versions']\">\n            <th *ngIf=\"info.processing['shakemap_versions'][name]\">{{ names['shakemap_versions'][name] }}</th>\n            <td *ngIf=\"info.processing['shakemap_versions'][name]\">\n              {{ info.processing['shakemap_versions'][name] }}\n\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"site-response group\" *ngIf=\"info.processing['site_response']\">\n        <h3>Site Response</h3>\n\n        <table>\n          <tr *ngFor=\"let name of name_order['site_response']\">\n            <th *ngIf=\"info.processing['site_response'][name]\">\n              {{ names['site_response'][name] }}</th>\n            <td *ngIf=\"info.processing['site_response'][name]\">\n              {{ info.processing['site_response'][name] }}\n\n            </td>\n          </tr>\n        </table>\n\n      </div>\n\n      <div class=\"roi group\" *ngIf=\"info.processing['roi']\">\n        <h3>ROI</h3>\n\n        <table>\n          <thead>\n            <th>Type</th>\n            <th>ROI</th>\n            <th>Observation Decay</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let name of name_order['roi']\">\n              <th *ngIf=\"info.processing['roi'][name]\">\n                {{ names['roi'][name] }}</th>\n              <td *ngIf=\"info.processing['roi'][name]\">\n                {{ info.processing['roi'][name]['roi'] }}\n\n              </td>\n              <td *ngIf=\"info.processing['roi'][name]\">\n                {{ info.processing['roi'][name]['decay'] }}\n\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/bottom-panel/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: left;\n  max-height: 500px;\n  overflow-y: scroll;\n  padding: 10px; }\n\n.column {\n  position: relative;\n  width: 48%;\n  float: left;\n  margin: 1%; }\n\n.group {\n  padding-top: 10px; }\n\ntable {\n  border-collapse: collapse;\n  border: 1px solid #ddd; }\n\ntable td, th {\n  border: 1px solid #ddd;\n  padding: .666em .75em; }\n\nth {\n  background-color: rgba(0, 0, 0, 0.04); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-panel/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_service__ = __webpack_require__("../../../../../src/app/bottom-panel/info/info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = /** @class */ (function () {
    function InfoComponent(infoService) {
        this.infoService = infoService;
        this.subs = [];
        this.info = null;
        this.objKeys = Object.keys;
        this.isNaN = isNaN;
        this.name_order = {
            'event_information': ['event_description', 'event_id', 'magnitude', 'depth', 'longitude', 'latitude', 'origin_time', 'src_mech', 'location', 'fault_ref', 'seismic_stations', 'intensity_observations'],
            'ground_motions': ['intensity', 'mmi', 'MMI', 'pga', 'PGA', 'pgv', 'PGV', 'SA(0.3)', 'psa03', 'SA(1.0)', 'psa10', 'SA(3.0)', 'psa30', 'bias'],
            'map_information': ['grid_span', 'grid_spacing', 'grid_points', 'min', 'max'],
            'uncertainty': ['mean_uncertainty_ratio', 'grade', 'total_flagged_mi', 'total_flagged_pgm'],
            'ground_motion_modules': ['gmpe', 'ipe', 'gmice', 'igmice', 'ccf', 'directivity', 'basin_correction'],
            'shakemap_versions': ['shakemap_revision', 'shakemap_revision_id', 'map_version', 'process_time'],
            'miscellaneous': ['bias_max_mag', 'bias_max_range', 'bias_log_amp', 'bias_max_bias', 'bias_min_bias', 'bias_min_stations', 'bias_norm', 'median_dist', 'outlier_deviation_level', 'outlier_max_mag'],
            'roi': ['gm', 'intensity'],
            'site_response': ['vs30default', 'site_correction']
        };
        this.names = {
            'event_information': {
                'location': 'Location',
                'longitude': 'Longitude',
                'seismic_stations': 'Number of Seismic Stations',
                'magnitude': 'Magnitude',
                'depth': 'Depth',
                'event_id': 'ID',
                'event_description': 'Description', 'origin_time': 'Origin Time',
                'latitude': 'Latitude',
                'fault_ref': 'Fault References',
                'src_mech': 'Mechanism Source',
                'intensity_observations': "Number of DYFI Stations"
            },
            'ground_motions': {
                'PGA': 'PGA (%g)',
                'PGV': 'PGV (cm/s)',
                'pga': 'PGA (%g)',
                'pgv': 'PGV (cm/s)',
                'SA(0.3)': 'PSA03',
                'SA(1.0)': 'PSA10',
                'SA(3.0)': 'PSA30',
                'psa03': 'PSA03',
                'psa10': 'PSA10',
                'psa30': 'PSA30',
                'bias': 'Bias',
                'MMI': 'Intensity'
            },
            'map_information': {
                'grid_spacing': 'Grid spacing',
                'grid_points': 'Number of points',
                'grid_span': 'Span',
                'min': 'Min',
                'max': 'Max'
            },
            'uncertainty': {
                'total_flagged_mi': "Flagged seismic stations",
                'grade': 'Empirical ShakeMap grade',
                'total_flagged_pgm': 'Flagged DYFI stations',
                'mean_uncertainty_ratio': 'Mean of map uncertainty'
            },
            'ground_motion_modules': {
                'basin_correction': 'Basin',
                'gmpe': 'GMPE',
                'directivity': 'Directivity',
                'gmice': 'GMICE',
                'ipe': 'IPE',
                'ccf': 'CCF',
                'igmice': 'IGMICE'
            },
            'shakemap_versions': {
                'map_version': 'Map',
                'shakemap_revision_id': 'GitHub commit',
                'shakemap_revision': 'Code',
                'process_time': 'Date'
            },
            'miscellaneous': {
                'bias_max_mag': 'Max magnitude to compute bias',
                'bias_max_range': 'Maximum distance to include station in bias',
                'bias_log_amp': 'Use log amp to compute bias',
                'bias_max_bias': 'Max allowed bias',
                'bias_min_bias': 'Min allowed bias',
                'bias_min_stations': 'Min # of stations necessary to compute bias',
                'bias_norm': 'Norm of the bias',
                'median_dist': 'Median distance used',
                'outlier_deviation_level': 'Outlier level (# of std dev)',
                'outlier_max_mag': 'Max magnitude to flag outliers',
            },
            'roi': {
                'gm': 'Ground Motion',
                'intensity': 'Intensity'
            },
            'site_response': {
                'site_correction': 'Site correction applied',
                'vs30default': 'Reference rock Vs30'
            }
        };
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.infoService.data.subscribe(function (info) {
            _this.info = info;
        }));
    };
    InfoComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-info',
            template: __webpack_require__("../../../../../src/app/bottom-panel/info/info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom-panel/info/info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__info_service__["a" /* InfoService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-panel/info/info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__ = __webpack_require__("../../../../rxjs/replaysubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoService = /** @class */ (function () {
    function InfoService(http) {
        this.http = http;
        this.data = new __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__["ReplaySubject"](1);
        this.hasData = false;
    }
    InfoService.prototype.getInfo = function (event) {
        var _this = this;
        var contents = event['shakemap'][0]['contents'];
        if (contents['download/info.json']) {
            this.http.get(contents['download/info.json']['url'])
                .subscribe(function (info) {
                _this.data.next(info);
                _this.hasData = true;
            });
        }
        else {
            this.data.next(null);
            this.hasData = false;
        }
    };
    InfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], InfoService);
    return InfoService;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-panel/station-list/station-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n    <div class=\"station\" *ngFor=\"let station of stations\">\n        <h3 class=\"station-name\">\n            {{ station.properties.code }}: {{ station.properties.name }}\n        </h3>\n\n        <div class=\"data-container\">\n\n          <table>\n              <tr>\n                  <td class=\"mmi-td\">\n                      <table class=\"mmi-table\"\n                              [style.backgroundColor]=\"getColor(station.properties.intensity)\">\n                          <tr>\n                              <th>\n                                  <h1>\n                                      {{ getRoman(station.properties.intensity) }}\n                                  </h1>\n                              </th>\n                          </tr>\n                          <tr>\n                              <td>\n                                  mmi\n                              </td>\n                          </tr>\n                      </table>\n                  </td>\n                  <td>\n                      <table>\n                          <tr>\n                              <th *ngIf=\"!isNaN(station.properties.pga)\">\n                                {{ station.properties.pga | number }} %g\n                              </th>\n                              <th *ngIf=\"isNaN(station.properties.pga)\">\n                                None\n                              </th>\n                          </tr>\n                          <tr>\n                              <td>\n                                  pga\n                              </td>\n                          </tr>\n                      </table>\n                  </td>\n                  <td>\n                      <table>\n                          <tr>\n                              <th *ngIf=\"!isNaN(station.properties.pgv)\">\n                                {{ station.properties.pgv | number }} cm/s\n                              </th>\n                              <th *ngIf=\"isNaN(station.properties.pgv)\">\n                                None\n                              </th>\n                          </tr>\n                          <tr>\n                              <td>\n                                  pgv\n                              </td>\n                          </tr>\n                      </table>\n                  </td>\n                  <td>\n                      <table>\n                          <tr>\n                              <th *ngIf=\"!isNaN(station.properties.distance)\">\n                                {{ station.properties.distance }} km\n                              </th>\n                              <th *ngIf=\"isNaN(station.properties.distance)\">\n                                None\n                              </th>\n                          </tr>\n                          <tr>\n                              <td>\n                                  distance\n                              </td>\n                          </tr>\n                      </table>\n                  </td>\n              </tr>\n          </table>\n\n          <div class=\"details-container\">\n            <div class=\"details-toggle link\">\n              <h3 (click)=\"toggleDetails(station)\">\n\n                <i class=\"fa fa-angle-up\" *ngIf=\"station.showDetails\"></i>\n                <i class=\"fa fa-angle-down\" *ngIf=\"!station.showDetails\"></i>\n                \n                <div class=\"link\">\n                  Details\n                </div>\n              </h3>\n            </div>\n\n            <div class=\"details\" *ngIf=\"station.showDetails\">\n              <div class = \"column\">\n                <dl class=\"station-metadata vertical\">\n                  <dt class=\"station-metadata-network\">Network</dt>\n                  <dd class=\"station-metadata-network\">{{ station.properties.network }}</dd>\n                  <dt class=\"station-metadata-location\">Location</dt>\n                  <dd class=\"station-metadata-location\">{{ station.geometry.coordinates[1] }}°N \n                                                        {{ station.geometry.coordinates[0] * -1 }}°W</dd>\n                  <dt class=\"station-metadata-source\">Source</dt>\n                  <dd class=\"station-metadata-source\">{{ station.properties.source }}</dd>\n                  <dt class=\"station-metadata-intensity\">Intensity</dt>\n                  <dd class=\"station-metadata-intensity\">{{ station.properties.intensity }}</dd>\n                </dl>\n              </div>\n              \n              <div class=\"column\">\n                <table class=\"data-table\">\n                  <thead>\n                    <th>name</th>\n                    <th>pga</th>\n                    <th>pgv</th>\n                    <th>psa03</th>\n                    <th>psa10</th>\n                    <th>psa30</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let channel of station.properties.channels\">\n                      <th>\n                        {{ channel.name }}\n                      </th>\n                      <td>{{ getAmp('pga', channel.amplitudes).value | number }}</td>\n                      <td>{{ getAmp('pgv', channel.amplitudes).value | number }}</td>\n                      <td>{{ getAmp('psa03', channel.amplitudes).value | number }}</td>\n                      <td>{{ getAmp('psa10', channel.amplitudes).value | number }}</td>\n                      <td>{{ getAmp('psa30', channel.amplitudes).value | number }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bottom-panel/station-list/station-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: left;\n  max-height: 500px;\n  overflow-y: scroll;\n  padding: 10px; }\n\n.station {\n  margin-bottom: 10px;\n  border-top: 1px solid #ddd; }\n\ntable table {\n  padding: 10px; }\n\ntable, th, td {\n  text-align: center; }\n\n.mmi-table {\n  border: 2px solid black;\n  border-radius: 3px;\n  width: 100%; }\n\n.mmi-td {\n  width: 80px;\n  padding-right: 10px; }\n\n.mmi-td h1 {\n  margin: 0; }\n\n.details-container {\n  margin-top: 15px; }\n\n.details-toggle {\n  position: relative;\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 5px;\n  cursor: default; }\n\n.details-toggle .link {\n  margin-left: 10px; }\n\n.details-toggle * {\n  display: inline-block;\n  margin: 0; }\n\n.fa {\n  text-decoration: none; }\n\n.data-container {\n  padding: 10px; }\n\ndl > dt {\n  font-weight: 700; }\n\ndd {\n  margin: 0; }\n\n.data-table {\n  border-collapse: collapse;\n  border: 1px solid #ddd; }\n\n.data-table td, .data-table th {\n  border: 1px solid #ddd;\n  padding: .666em .75em; }\n\n.data-table th {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.column {\n  display: inline-block;\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bottom-panel/station-list/station-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__station_service__ = __webpack_require__("../../../../../src/app/bottom-panel/station-list/station.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_mmi_roman__ = __webpack_require__("../../../../../src/app/util/mmi_roman.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_mmi_colors__ = __webpack_require__("../../../../../src/app/util/mmi_colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StationListComponent = /** @class */ (function () {
    function StationListComponent(stationService) {
        this.stationService = stationService;
        this.subs = [];
        this.stations = [];
        this.getColor = __WEBPACK_IMPORTED_MODULE_3__util_mmi_colors__["a" /* getMmiRgba */];
        this.getRoman = __WEBPACK_IMPORTED_MODULE_2__util_mmi_roman__["a" /* getRomanFromMmi */];
        this.isNaN = isNaN;
    }
    StationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.stationService.data.subscribe(function (data) {
            _this.stations = data;
        }));
    };
    StationListComponent.prototype.toggleDetails = function (station) {
        if (station['showDetails']) {
            station['showDetails'] = false;
        }
        else {
            station['showDetails'] = true;
        }
    };
    StationListComponent.prototype.getAmp = function (name, amps) {
        for (var _i = 0, amps_1 = amps; _i < amps_1.length; _i++) {
            var amp = amps_1[_i];
            if (amp['name'] === name) {
                return amp;
            }
        }
        return {};
    };
    StationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-station-list',
            template: __webpack_require__("../../../../../src/app/bottom-panel/station-list/station-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bottom-panel/station-list/station-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__station_service__["a" /* StationService */]])
    ], StationListComponent);
    return StationListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bottom-panel/station-list/station.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StationService = /** @class */ (function () {
    function StationService(http) {
        this.http = http;
        this.hasData = false;
        this.data = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
    }
    StationService.prototype.getInfo = function (event) {
        var _this = this;
        var contents = event['shakemap'][0]['contents'];
        if (contents['download/info.json']) {
            this.http.get(contents['download/stationlist.json']['url'])
                .subscribe(function (data) {
                _this.data.next(data.features);
                _this.hasData = true;
            });
        }
        else {
            this.data.next(null);
            this.hasData = false;
        }
    };
    StationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], StationService);
    return StationService;
}());



/***/ }),

/***/ "../../../../../src/app/conf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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
            .subscribe(function (conf) {
            _this.conf = conf;
        });
    };
    ConfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfService);
    return ConfService;
}());



/***/ }),

/***/ "../../../../../src/app/events/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__ = __webpack_require__("../../../../rxjs/replaysubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_panel_info_info_service__ = __webpack_require__("../../../../../src/app/bottom-panel/info/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bottom_panel_station_list_station_service__ = __webpack_require__("../../../../../src/app/bottom-panel/station-list/station.service.ts");
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
    function EventService(http, mapService, infoService, stationService) {
        this.http = http;
        this.mapService = mapService;
        this.infoService = infoService;
        this.stationService = stationService;
        this.selectedEvent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__["ReplaySubject"](1);
        this.events = new __WEBPACK_IMPORTED_MODULE_2_rxjs_replaysubject__["ReplaySubject"](1);
        this.manualEntry = null;
    }
    EventService.prototype.getEventFeed = function () {
        var _this = this;
        this.http.get('products.json').subscribe(function (data) {
            _this.events.next(data);
        }, function (error) {
            var events = [];
            if (_this.manualEntry) {
                events.push({
                    id: _this.manualEntry['properties']['products']['shakemap'][0]['code'],
                    shakemap: _this.manualEntry['properties']['products']['shakemap']
                });
            }
            _this.events.next(events);
        });
    };
    EventService.prototype.parseFromEventJson = function (event) {
    };
    EventService.prototype.selectEvent = function (event) {
        this.mapService.plotEvent.next(event);
        this.infoService.getInfo(event);
        this.stationService.getInfo(event);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__map_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_4__bottom_panel_info_info_service__["a" /* InfoService */],
            __WEBPACK_IMPORTED_MODULE_5__bottom_panel_station_list_station_service__["a" /* StationService */]])
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
    function EventsComponent(eventService) {
        this.eventService = eventService;
        this.eventData = [];
        this.subs = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.eventService.events.subscribe(function (data) {
            _this.eventData = data;
            if (data) {
                _this.plot(data[0]);
            }
        }));
        this.eventService.getEventFeed();
    };
    EventsComponent.prototype.plot = function (event) {
        this.eventService.selectEvent(event);
    };
    EventsComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'shakemap-view-events',
            template: __webpack_require__("../../../../../src/app/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/layers/cont_mi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return miLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mmi_roman__ = __webpack_require__("../../../../../src/app/util/mmi_roman.ts");


var lineStyle = {
    "color": "#EFEFF0",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
function generatePopup(props) {
    var mmi = Object(__WEBPACK_IMPORTED_MODULE_1__util_mmi_roman__["a" /* getRomanFromMmi */])(props.value);
    var popupContent = "\n        <table style=\"background-color:" + props.color + ";\n                        border:2px solid black;\n                        border-radius:3px;\n                        width:100%;\n                        text-align:center\">\n            <tr>\n                <th>\n                    <h1 style=\"margin:0;\">\n                        " + mmi + "\n                    </h1>\n                </th>\n            </tr>\n            <tr>\n                <td>\n                    mmi\n                </td>\n            </tr>\n        </table>\n    ";
    return popupContent;
}
function getLineStyle(feature) {
    lineStyle.color = feature.properties.color;
    return lineStyle;
}
var miLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mi.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                lineStyle.color = feature.properties.color;
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/cont_mmi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mmiLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mmi_colors__ = __webpack_require__("../../../../../src/app/util/mmi_colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_mmi_roman__ = __webpack_require__("../../../../../src/app/util/mmi_roman.ts");



var lineStyle = {
    "color": "#EFEFF0",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
function generatePopup(props) {
    var mmi = Object(__WEBPACK_IMPORTED_MODULE_2__util_mmi_roman__["a" /* getRomanFromMmi */])(props.value);
    var color = Object(__WEBPACK_IMPORTED_MODULE_1__util_mmi_colors__["a" /* getMmiRgba */])(props.value);
    var popupContent = "\n        <table style=\"background-color:" + color + ";\n                        border:2px solid black;\n                        border-radius:3px;\n                        width:100%;\n                        text-align:center\">\n            <tr>\n                <th>\n                    <h1 style=\"margin:0;\">\n                        " + mmi + "\n                    </h1>\n                </th>\n            </tr>\n            <tr>\n                <td>\n                    mmi\n                </td>\n            </tr>\n        </table>\n    ";
    return popupContent;
}
var mmiLayer = {
    name: 'MMI Contours',
    id: 'mmi_cont',
    productId: 'download/cont_mmi.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            style: function (feature, latlng) {
                lineStyle.color = Object(__WEBPACK_IMPORTED_MODULE_1__util_mmi_colors__["a" /* getMmiRgba */])(feature.properties.value);
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/cont_pga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgaLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var lineStyle = {
    "color": "#ffffff",
    "weight": 2,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup('PGA: ' + feature.properties.value);
    }
}
var pgaLayer = {
    name: 'PGA Contours',
    id: 'pga_cont',
    productId: 'download/cont_pga.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
    }
};


/***/ }),

/***/ "../../../../../src/app/map/layers/cont_pgv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgvLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var lineStyle = {
    "color": "#ffffff",
    "weight": 4,
    "opacity": 1
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup('PGV: ' + feature.properties.value);
    }
}
var pgvLayer = {
    name: 'PGV Contours',
    id: 'pgv_cont',
    productId: 'download/cont_pgv.json',
    type: 'json',
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            style: function (feature, latlng) {
                if (lineStyle.weight == 4) {
                    lineStyle.weight = 2;
                }
                else {
                    lineStyle.weight = 4;
                }
                return lineStyle;
            },
            onEachFeature: onEachFeature
        });
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
    productType: 'text',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cont_mmi__ = __webpack_require__("../../../../../src/app/map/layers/cont_mmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cont_mi__ = __webpack_require__("../../../../../src/app/map/layers/cont_mi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cont_pga__ = __webpack_require__("../../../../../src/app/map/layers/cont_pga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cont_pgv__ = __webpack_require__("../../../../../src/app/map/layers/cont_pgv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__epicenter__ = __webpack_require__("../../../../../src/app/map/layers/epicenter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stations__ = __webpack_require__("../../../../../src/app/map/layers/stations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var layers = [__WEBPACK_IMPORTED_MODULE_7__epicenter__["a" /* epicenterLayer */], __WEBPACK_IMPORTED_MODULE_3__cont_mmi__["a" /* mmiLayer */], __WEBPACK_IMPORTED_MODULE_4__cont_mi__["a" /* miLayer */], __WEBPACK_IMPORTED_MODULE_5__cont_pga__["a" /* pgaLayer */], __WEBPACK_IMPORTED_MODULE_6__cont_pgv__["a" /* pgvLayer */], __WEBPACK_IMPORTED_MODULE_8__stations__["a" /* stationLayer */]];
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
                this_1.waiting.push(this_1.http.get(contents[layer['productId']]['url'], { responseType: layer['productType'] })
                    .subscribe(function (product) {
                    // generate the layer
                    layer['layer'] = layer.generateLayer(product);
                    // let the map know it's ready
                    _this.nextLayer.next(layer);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_svg_shape_markers__ = __webpack_require__("../../../../leaflet-svg-shape-markers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet_svg_shape_markers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet_svg_shape_markers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_mmi_colors__ = __webpack_require__("../../../../../src/app/util/mmi_colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_mmi_roman__ = __webpack_require__("../../../../../src/app/util/mmi_roman.ts");




var shapeMarkerOptions = {
    shape: 'circle',
    fillColor: '#ffffff',
    fillOpacity: 1,
    color: '#444444',
    radius: 6,
    weight: 1,
};
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties) {
        layer.bindPopup(generatePopup(feature.properties));
    }
}
var generatePopup = function (props) {
    var mmi = Object(__WEBPACK_IMPORTED_MODULE_3__util_mmi_roman__["a" /* getRomanFromMmi */])(props.intensity);
    var color = Object(__WEBPACK_IMPORTED_MODULE_2__util_mmi_colors__["a" /* getMmiRgba */])(props.intensity);
    return "\n    <div>\n        <h3 style=\"border-bottom:2px solid black\">" +
        props.network + ': ' + props.name +
        "</h3>\n        <table style=\"width:100%;\n                    text-align:center;\">\n            <tr>\n                <td style=\"width:60px;\n                        padding-right:10px;\">\n                    <table style=\"background-color:" + color + ";\n                            border:2px solid black;\n                            border-radius:3px;\n                            width:100%\">\n                        <tr>\n                            <th>\n                                <h1 style=\"margin:0;\">\n                                    " + mmi + "\n                                </h1>\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                mmi\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pga) + " %g\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pga\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.pgv) + " cm/s\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                pgv\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n                <td>\n                    <table>\n                        <tr>\n                            <th>\n                                " + makeNumber(props.distance) + " km\n                            </th>\n                        </tr>\n                        <tr>\n                            <td>\n                                distance\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </div>\n    ";
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
                if (feature.id.toLowerCase().includes('dyfi')) {
                    shapeMarkerOptions.shape = 'circle';
                }
                else {
                    shapeMarkerOptions.shape = 'triangle';
                }
                shapeMarkerOptions.fillColor = Object(__WEBPACK_IMPORTED_MODULE_2__util_mmi_colors__["a" /* getMmiRgba */])(feature.properties.intensity);
                return __WEBPACK_IMPORTED_MODULE_0_leaflet__["shapeMarker"](latlng, shapeMarkerOptions);
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
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('map', {
            scrollWheelZoom: false
        }).setView([51.505, -0.09], 13);
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
        if (this.c.conf['defaultLayers'].includes(layer.id)) {
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
        this.basemap = __WEBPACK_IMPORTED_MODULE_1_leaflet__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + this.mapService.mapKey, {
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
        this.mapKey = 'pk.eyJ1IjoiZHNsb3NreSIsImEiOiJjaXR1aHJnY3EwMDFoMnRxZWVtcm9laWJmIn0.1C3GE0kHPGOpbVV9kTxBlQ';
    }
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/util/mmi_colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMmiRgba;
var colormap = {
    0: { 'r': 255, 'g': 255, 'b': 255 },
    1: { 'r': 255, 'g': 255, 'b': 255 },
    2: { 'r': 191, 'g': 204, 'b': 255 },
    3: { 'r': 160, 'g': 230, 'b': 255 },
    4: { 'r': 128, 'g': 255, 'b': 255 },
    5: { 'r': 122, 'g': 255, 'b': 147 },
    6: { 'r': 255, 'g': 255, 'b': 0 },
    7: { 'r': 255, 'g': 200, 'b': 0 },
    8: { 'r': 255, 'g': 145, 'b': 0 },
    9: { 'r': 255, 'g': 0, 'b': 0 },
    10: { 'r': 200, 'g': 0, 'b': 0 },
    13: { 'r': 128, 'g': 0, 'b': 0 },
};
function getMmiRgba(mmi, opacity) {
    if (opacity === void 0) { opacity = 1; }
    if (mmi === 'null') {
        mmi = .1;
    }
    var low = Math.floor(mmi);
    var lowC = colormap[low];
    var high = low + 1;
    var highC = colormap[high];
    var colors = { 'r': 0, 'g': 0, 'b': 0 };
    for (var color in colors) {
        var cNum = (high - mmi) * highC[color] +
            (mmi - low) * lowC[color];
        colors[color] = Math.round(cNum);
    }
    return 'rgba(' + colors['r'] + ',' +
        colors['g'] + ',' +
        colors['b'] + ',' +
        opacity + ')';
}
/*

DEFAULT COLOR MAP

0       255     255     255     1       255     255     255
1       255     255     255     2       191     204     255
2       191     204     255     3       160     230     255
3       160     230     255     4       128     255     255
4       128     255     255     5       122     255     147
5       122     255     147     6       255     255     0
6       255     255     0       7       255     200     0
7       255     200     0       8       255     145     0
8       255     145     0       9       255     0       0
9       255     0       0       10      200     0       0
#10      200     0       0       13      128     0       0

*/ 


/***/ }),

/***/ "../../../../../src/app/util/mmi_roman.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRomanFromMmi;
function getRomanFromMmi(mmiIn) {
    var mmi;
    switch (Math.round(Number(mmiIn))) {
        case 1: {
            mmi = 'I';
            break;
        }
        case 2: {
            mmi = 'II';
            break;
        }
        case 3: {
            mmi = 'III';
            break;
        }
        case 4: {
            mmi = 'IV';
            break;
        }
        case 5: {
            mmi = 'V';
            break;
        }
        case 6: {
            mmi = 'VI';
            break;
        }
        case 7: {
            mmi = 'VII';
            break;
        }
        case 8: {
            mmi = 'VIII';
            break;
        }
        case 9: {
            mmi = 'IX';
            break;
        }
        case 10: {
            mmi = 'X';
            break;
        }
        case 11: {
            mmi = 'XI';
            break;
        }
        case 12: {
            mmi = 'XII';
            break;
        }
        default: {
            mmi = '0';
        }
    }
    return mmi;
}


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