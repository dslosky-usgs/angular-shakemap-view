webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<shakemap-view-header></shakemap-view-header>\n\n<shakemap-view-map></shakemap-view-map>\n\n<div *ngIf=\"!c.conf?.display || c.conf?.display !== 'static'\">\n    <shakemap-view-bottom-panel></shakemap-view-bottom-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conf_service__ = __webpack_require__("./src/app/conf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_event_service__ = __webpack_require__("./src/app/events/event.service.ts");
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
        if (!this.eventFeed) {
            this.eService.getEventFeed();
        }
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.eService.manualEntry = this.eventFeed;
        if (this.eventFeed) {
            var events = [];
            events.push({
                id: this.eventFeed['properties']['products']['shakemap'][0]['code'],
                shakemap: this.eventFeed['properties']['products']['shakemap']
            });
            this.eService.events.next(events);
        }
        if (this.configs) {
            this.c.conf = this.configs;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "eventFeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "configs", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__conf_service__["a" /* ConfService */],
            __WEBPACK_IMPORTED_MODULE_2__events_event_service__["a" /* EventService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_layers_layer_service__ = __webpack_require__("./src/app/map/layers/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__events_events_component__ = __webpack_require__("./src/app/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__events_event_service__ = __webpack_require__("./src/app/events/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__map_map_service__ = __webpack_require__("./src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__conf_service__ = __webpack_require__("./src/app/conf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bottom_panel_bottom_panel_component__ = __webpack_require__("./src/app/bottom-panel/bottom-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__map_map_control_map_control_component__ = __webpack_require__("./src/app/map/map-control/map-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_map_control_map_control_service__ = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_earthquake_eventpages__ = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__events_event_filter_event_filter_component__ = __webpack_require__("./src/app/events/event-filter/event-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__events_event_list_event_list_component__ = __webpack_require__("./src/app/events/event-list/event-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__events_event_event_component__ = __webpack_require__("./src/app/events/event/event.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { InfoComponent } from './bottom-panel/info/info.component';
//import { InfoService } from './bottom-panel/info/info.service';
//import { StationListComponent } from './bottom-panel/station-list/station-list.component';
//import { StationService } from './bottom-panel/station-list/station.service';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_9__events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__bottom_panel_bottom_panel_component__["a" /* BottomPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_14__map_map_control_map_control_component__["a" /* MapControlComponent */],
                __WEBPACK_IMPORTED_MODULE_17__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__events_event_filter_event_filter_component__["a" /* EventFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__events_event_list_event_list_component__["a" /* EventListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__events_event_event_component__["a" /* EventComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_16_earthquake_eventpages__["b" /* EventpagesModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_earthquake_eventpages__["d" /* ShakemapModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__map_layers_layer_service__["a" /* LayerService */],
                __WEBPACK_IMPORTED_MODULE_10__events_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_11__map_map_service__["a" /* MapService */],
                __WEBPACK_IMPORTED_MODULE_12__conf_service__["a" /* ConfService */],
                __WEBPACK_IMPORTED_MODULE_15__map_map_control_map_control_service__["a" /* MapControlService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@panelState]='panelState'>\n    <div class=\"state-toggle\" (click)=\"toggleState()\">\n      <div class=\"arrow\">\n        <div class=\"up\" *ngIf=\"panelState === 'inactive'\">\n          <mat-icon class=\"md-32\">keyboard_arrow_up</mat-icon>\n        </div>\n        <div class=\"down\" *ngIf=\"panelState === 'active'\">\n          <mat-icon class=\"md-32\">keyboard_arrow_down</mat-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-container\">\n      \n      <div class=\"tabs\">\n\n        <h3 class=\"tab\" *ngIf=\"metadataService.metadata$.value != null\" (click)=\"selected='metadata'\">Metadata</h3>\n\n        <h3 class=\"tab\" *ngIf=\"stationService.stationsJson$.value != null && stationService.stationsJson$.value?.features?.length > 0\" (click)=\"selected='stations'\">Station List</h3>\n\n        <h3 class=\"tab\" (click)=\"selected='uncertainty'\">Uncertainty</h3>\n\n      </div>\n\n      <div class=\"exit\" *ngIf=\"selected\">\n        <mat-icon (click)=\"selected=null\">close</mat-icon>\n      </div>\n\n      <div class=\"data-container\">\n        <shakemap-metadata [hidden]=\"selected!='metadata'\"></shakemap-metadata>\n        <shakemap-station-list [hidden]=\"selected!='stations'\"></shakemap-station-list>\n\n        <shakemap-uncertainty [hidden]=\"selected!='uncertainty'\"></shakemap-uncertainty>\n      </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%);\n  z-index: 1000;\n  width: 100%;\n  background-color: #ffffff; }\n\n.container.show {\n  -webkit-transform: translateY(0);\n          transform: translateY(0); }\n\n.state-toggle {\n  position: absolute;\n  top: 0;\n  -webkit-transform: translateY(-30%) translateX(-50%);\n          transform: translateY(-30%) translateX(-50%);\n  height: 75px;\n  width: 150px;\n  border-radius: 40%;\n  left: 50%;\n  background-color: #ffffff; }\n\n.content-container {\n  position: relative;\n  padding: 10px;\n  z-index: 1001; }\n\n.arrow {\n  font-size: 32px;\n  -webkit-transform: translateY(-20%);\n          transform: translateY(-20%);\n  cursor: pointer;\n  text-align: center; }\n\n.tabs {\n  text-align: center; }\n\n.tab {\n  display: inline-block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 10px;\n  border: 2px solid #0099FF;\n  border-radius: 10px;\n  cursor: pointer; }\n\n.tab:hover {\n  background-color: #0099FF; }\n\n.exit {\n  text-align: right;\n  margin-right: 10px;\n  font-size: 34px; }\n\n.exit * {\n  cursor: pointer; }\n\n.material-icons.md-32 {\n  font-size: 32px;\n  height: 32px;\n  width: 32px; }\n\n.data-container {\n  max-height: 400px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/bottom-panel/bottom-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BottomPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_earthquake_eventpages__ = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
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
    function BottomPanelComponent(metadataService, stationService) {
        this.metadataService = metadataService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-bottom-panel',
            template: __webpack_require__("./src/app/bottom-panel/bottom-panel.component.html"),
            styles: [__webpack_require__("./src/app/bottom-panel/bottom-panel.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('panelState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                        transform: 'translateY(100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                        transform: 'translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_earthquake_eventpages__["c" /* MetadataService */],
            __WEBPACK_IMPORTED_MODULE_2_earthquake_eventpages__["e" /* StationService */]])
    ], BottomPanelComponent);
    return BottomPanelComponent;
}());



/***/ }),

/***/ "./src/app/conf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfService);
    return ConfService;
}());



/***/ }),

/***/ "./src/app/events/event-filter/event-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<input\n    [(ngModel)]=\"filter\"\n    (ngModelChange)=\"updateEvents(filter)\"\n    placeholder=\"Search...\" />"

/***/ }),

/***/ "./src/app/events/event-filter/event-filter.component.scss":
/***/ (function(module, exports) {

module.exports = "input {\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/events/event-filter/event-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__("./src/app/events/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventFilterComponent = /** @class */ (function () {
    function EventFilterComponent(eService) {
        this.eService = eService;
        this.filter = '';
    }
    EventFilterComponent.prototype.ngOnInit = function () {
    };
    EventFilterComponent.prototype.updateEvents = function (filter) {
        this.eService.getFilteredEvents(filter);
    };
    EventFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-event-filter',
            template: __webpack_require__("./src/app/events/event-filter/event-filter.component.html"),
            styles: [__webpack_require__("./src/app/events/event-filter/event-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */]])
    ], EventFilterComponent);
    return EventFilterComponent;
}());



/***/ }),

/***/ "./src/app/events/event-list/event-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"eventData.length > 0\">\n  <div class=\"event-list\">\n    <div class=\"event\" *ngFor=\"let event of eventData\">\n      <shakemap-view-event\n          [event]=\"event\"\n          (click)=\"plot(event)\">\n      </shakemap-view-event>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".event {\n  display: inline-block;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/events/event-list/event-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__("./src/app/events/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventService) {
        this.eventService = eventService;
        this.eventData = [];
        this.init = false;
        this.subs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.add(this.eventService.events.subscribe(function (data) {
            _this.onEvents(data);
        }));
    };
    EventListComponent.prototype.onEvents = function (events) {
        if (events == null) {
            this.eventData = [];
            return;
        }
        this.eventData = events;
        if ((events.length) > 0 && !this.init) {
            this.plot(events[0]);
            this.init = true;
        }
    };
    EventListComponent.prototype.plot = function (event) {
        this.eventService.selectEvent(event);
    };
    EventListComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    EventListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-event-list',
            template: __webpack_require__("./src/app/events/event-list/event-list.component.html"),
            styles: [__webpack_require__("./src/app/events/event-list/event-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/events/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_service__ = __webpack_require__("./src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_earthquake_eventpages__ = __webpack_require__("./node_modules/earthquake-eventpages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
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
    function EventService(http, mapService, eventControl) {
        this.http = http;
        this.mapService = mapService;
        this.eventControl = eventControl;
        this.selectedEvent = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.events = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.manualEntry = null;
        this.allEvents = [];
    }
    EventService.prototype.getEventFeed = function () {
        var _this = this;
        this.http.get('products.json').subscribe(function (events) {
            _this.onEvents(events);
        }, function (error) {
        });
    };
    EventService.prototype.onEvents = function (events) {
        this.allEvents = events;
        this.events.next(events);
    };
    EventService.prototype.getFilteredEvents = function (filter) {
        if (!filter) {
            this.events.next(this.allEvents);
            return;
        }
        filter = this.parseFilter(filter);
        // make a copy of all events to be filtered
        var filtered = [];
        for (var _i = 0, _a = this.allEvents; _i < _a.length; _i++) {
            var event_ = _a[_i];
            /* check for known commands or match properties */
            var include = true;
            for (var command in filter.commands) {
                if (command == 'minMag') {
                    if (event_.shakemap[0].properties.magnitude <
                        filter.commands['minMag']) {
                        include = false;
                        break;
                    }
                } // else if match properties
            }
            if (include) {
                for (var _b = 0, _c = filter.search; _b < _c.length; _b++) {
                    var search = _c[_b];
                    if (JSON.stringify(event_)
                        .toLowerCase()
                        .indexOf(search.toLowerCase()) < 0) {
                        include = false;
                        break;
                    }
                }
            }
            if (include) {
                filtered.push(event_);
            }
        }
        if (!__WEBPACK_IMPORTED_MODULE_5_underscore__["isEqual"](this.events.getValue(), filtered)) {
            this.events.next(filtered);
        }
    };
    EventService.prototype.parseFilter = function (filter) {
        // break up filter
        var filterArr = filter.match(/(?:[^\s"]+|"[^"]*")+/g);
        var commands = {};
        var search = [];
        if (filterArr) {
            for (var _i = 0, filterArr_1 = filterArr; _i < filterArr_1.length; _i++) {
                var fil = filterArr_1[_i];
                // check for commands
                if (fil.indexOf(':') > 0) {
                    fil = fil.split(/:(.+)/);
                    commands[fil[0]] = fil[1];
                }
                else {
                    // trim parenthesis
                    fil = fil.replace(/"/g, '');
                    search.push(fil);
                }
            }
        }
        return { commands: commands, search: search };
    };
    EventService.prototype.selectEvent = function (event) {
        this.mapService.plotEvent.next(event);
        this.eventControl.product$.next(event.shakemap[0]);
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__map_map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_4_earthquake_eventpages__["a" /* EventService */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/events/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"event as event\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>\n        {{ event.id }}\n      </mat-card-title>\n\n      <mat-card-subtitle>\n        {{ event.shakemap[0].properties.event_description }}\n      </mat-card-subtitle>\n    </mat-card-header>\n\n    <mat-card-content>\n      <dl class=\"description-table\">\n        <dt>\n          Magnitude\n        </dt>\n        <dd>\n          {{ event.shakemap[0].properties.magnitude }}\n        </dd>\n        <dt>\n          Depth\n        </dt>\n        <dd>\n          {{ event.shakemap[0].properties.depth }}\n        </dd>\n      </dl>\n    </mat-card-content>\n  </mat-card>\n</ng-container>"

/***/ }),

/***/ "./src/app/events/event/event.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/events/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventComponent = /** @class */ (function () {
    function EventComponent() {
        this.event = null;
    }
    EventComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EventComponent.prototype, "event", void 0);
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-event',
            template: __webpack_require__("./src/app/events/event/event.component.html"),
            styles: [__webpack_require__("./src/app/events/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter\">\n  <shakemap-view-event-filter (click)=\"setFocus(true)\">\n  </shakemap-view-event-filter>\n\n  <div class=\"close\" *ngIf=\"focus\">\n    <mat-icon (click)=\"setFocus(false)\">close</mat-icon>\n  </div>\n</div>\n\n<div class=\"event-list\" [hidden]=\"!focus\">\n  <shakemap-view-event-list>\n  </shakemap-view-event-list>\n</div>\n"

/***/ }),

/***/ "./src/app/events/events.component.scss":
/***/ (function(module, exports) {

module.exports = ".filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 15px; }\n\n.close {\n  cursor: pointer; }\n\n.event-list {\n  max-width: 90vw;\n  overflow-x: auto;\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__);
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
    function EventsComponent() {
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["Subscription"]();
        this.focus = false;
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent.prototype.setFocus = function (focus) {
        this.focus = focus;
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-events',
            template: __webpack_require__("./src/app/events/events.component.html"),
            styles: [__webpack_require__("./src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"name-container\">\n        <div class=\"logo\">\n            <img src=\"favicon.ico\">\n        </div>\n        <h1>ShakeMap</h1>\n    </div>\n\n    <shakemap-view-events></shakemap-view-events>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  z-index: 1000;\n  left: 10%; }\n\n.name-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nimg {\n  height: 50px; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/map/layers/cont_mi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return miLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mmi_roman__ = __webpack_require__("./src/app/util/mmi_roman.ts");


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
    legendImages: ['assets/legend-intensity-scale.png'],
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

/***/ "./src/app/map/layers/cont_mmi.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mmiLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_mmi_colors__ = __webpack_require__("./src/app/util/mmi_colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_mmi_roman__ = __webpack_require__("./src/app/util/mmi_roman.ts");



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
    legendImages: ['assets/legend-intensity-scale.png'],
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

/***/ "./src/app/map/layers/cont_pga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgaLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
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

/***/ "./src/app/map/layers/cont_pgv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pgvLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
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

/***/ "./src/app/map/layers/epicenter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return epicenterLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

var epiIcon = __WEBPACK_IMPORTED_MODULE_0_leaflet__["icon"]({
    iconUrl: 'assets/star.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
var epicenterLayer = {
    name: 'Epicenter',
    id: 'epicenter',
    productId: 'download/info.json',
    productType: 'json',
    legendImages: ['assets/legend-epicenter.png'],
    generateLayer: function (info) {
        var event_info = info['input']['event_information'];
        var popupHtml = '<table>' +
            '<tr><th>' + event_info['event_id'] + '</th></tr>' +
            '<tr><table><th>Magnitude:</th><td>' + event_info['magnitude'] + '</td></table></tr>' +
            '<tr><table><th>Depth:</th><td>' + event_info['depth'] + '</td></table></tr>' +
            '<tr><table><th>Location:</th><td>' + event_info['latitude'] + ', ' + event_info['longitude'] + '</td></table></tr>' +
            '</table>';
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["marker"]([event_info['latitude'], event_info['longitude']], { icon: epiIcon })
            .bindPopup(popupHtml)
            .openPopup();
    }
};


/***/ }),

/***/ "./src/app/map/layers/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cont_mmi__ = __webpack_require__("./src/app/map/layers/cont_mmi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cont_mi__ = __webpack_require__("./src/app/map/layers/cont_mi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cont_pga__ = __webpack_require__("./src/app/map/layers/cont_pga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cont_pgv__ = __webpack_require__("./src/app/map/layers/cont_pgv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__epicenter__ = __webpack_require__("./src/app/map/layers/epicenter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stations__ = __webpack_require__("./src/app/map/layers/stations.ts");
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
        this.nextLayer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LayerService);
    return LayerService;
}());



/***/ }),

/***/ "./src/app/map/layers/stations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stationLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_leaflet_svg_shape_markers__ = __webpack_require__("./src/app/util/leaflet-svg-shape-markers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_mmi_colors__ = __webpack_require__("./src/app/util/mmi_colors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_mmi_roman__ = __webpack_require__("./src/app/util/mmi_roman.ts");




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
    legendImages: ['assets/legend-shakemap-station.png',
        'assets/legend-seismic-station.png',
        'assets/legend-intensity-scale.png'],
    generateLayer: function (json) {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["geoJson"](json, {
            pointToLayer: function (feature, latlng) {
                if ((feature.properties['station_type']) && feature.properties['station_type'] === 'macroseismic') {
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

/***/ "./src/app/map/map-control/map-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"!confService.conf?.display || confService.conf?.display !== 'static'\">\n  <div class=\"control\" \n        [ngClass]=\"{'collapsed': controlCollapsed}\" \n        (dblclick)=\"$event.stopPropagation();\">\n\n    <div class=\"collapsed-control\" *ngIf=\"controlCollapsed\" (click)=\"controlCollapsed=false\">\n      <div class=\"control-image\">\n        <img src=\"{{ layersImg }}\">\n      </div>\n    </div>\n\n    <div class=\"open\" *ngIf=\"!controlCollapsed\">\n      <div class=\"close\">\n        <div class=\"close-icon\" (click)=\"controlCollapsed=true\">\n          <mat-icon>close</mat-icon>\n        </div>\n      </div>\n\n      <div class=\"items\">\n        <p *ngFor=\"let item of control\" \n            (click)=\"toggleLayer(item);\"\n            class=\"layer-item\">\n          <input type=\"checkbox\" [checked]=\"plotting.indexOf(item.id) > -1\">\n          {{ item.name }}\n        </p>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- Clear the float to let legend sit under control -->\n  <br style=\"clear:both\" />\n\n  <div class=\"legend control\" \n          [ngClass]=\"{'collapsed': legendCollapsed}\" \n          (dblclick)=\"$event.stopPropagation();\">\n\n    <div class=\"collapsed-control\" *ngIf=\"legendCollapsed\" (click)=\"toggleLegend()\">\n      <div class=\"control-image\">\n        <mat-icon class=\"key\">vpn_key</mat-icon>\n      </div>\n    </div>\n    <div class=\"open\" *ngIf=\"!legendCollapsed\">\n      <div class=\"close\">\n        <div class=\"close-icon\" (click)=\"toggleLegend()\">\n          <mat-icon>close</mat-icon>\n        </div>\n      </div>\n\n      <div class=\"items\">\n        <div class=\"image\" *ngFor=\"let image of objKeys(legend)\">\n          <img *ngIf=\"legend[image].count>0\" class=\"legend-image\" src=\"{{ legend[image].url }}\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map-control/map-control.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  z-index: 501;\n  text-align: center;\n  position: fixed;\n  top: 5px;\n  right: 5px; }\n\n.control {\n  border: 2px solid #aaaaaa;\n  background-color: white;\n  display: block;\n  border-radius: 5px;\n  margin: 5px;\n  max-width: -webkit-max-content;\n  max-width: -moz-max-content;\n  max-width: max-content;\n  position: relative;\n  float: right;\n  cursor: auto; }\n\n.control.collapsed {\n  min-width: 45px;\n  height: 45px;\n  cursor: pointer; }\n\n.control.collapsed:hover {\n  border: 2px solid #0099FF; }\n\n.control .collapsed-control {\n  height: 100%;\n  width: 100%; }\n\n.control-image {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  color: #454545;\n  font-size: 18px; }\n\n.close {\n  text-align: right;\n  padding-right: 5px; }\n\n.close-icon {\n  display: inline-block;\n  cursor: pointer; }\n\n.layer-item {\n  margin: 0 0 0 5px;\n  padding: 5px 5px; }\n\n.items {\n  text-align: left; }\n\n.legend-image {\n  max-width: 200px; }\n\n.key {\n  vertical-align: top; }\n"

/***/ }),

/***/ "./src/app/map/map-control/map-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_control_service__ = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__("./src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conf_service__ = __webpack_require__("./src/app/conf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapControlComponent = /** @class */ (function () {
    function MapControlComponent(controlService, mapService, confService) {
        this.controlService = controlService;
        this.mapService = mapService;
        this.confService = confService;
        this.subs = [];
        this.controlCollapsed = true;
        this.legendCollapsed = true;
        this.allowLegend = false;
        this.control = [];
        this.plotting = [];
        this.legend = {};
        this.onMap = {};
        this.objKeys = Object.keys;
        this.layersImg = __webpack_require__("./node_modules/leaflet/dist/images/layers.png");
        this.initLoading = true; // True after first map layers render
        this.timeoutTimer = null;
    }
    MapControlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.controlService.addOverlay_.subscribe(function (overlay) {
            _this.newOverlay(overlay);
        }));
        this.subs.push(this.controlService.clear_.subscribe(function (overlay) {
            // remember which layers are plotted
            _this.clearAll();
        }));
        this.timeoutTimer = __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_TimerObservable__["TimerObservable"].create(5000, 1000).subscribe(function (time) {
            _this.initLoading = false;
            _this.timeoutTimer.unsubscribe();
        });
    };
    MapControlComponent.prototype.toggleLayer = function (overlay) {
        if (!this.onMap[overlay.id]) {
            this.addLayer(overlay);
        }
        else {
            this.removeLayer(overlay);
        }
    };
    MapControlComponent.prototype.newOverlay = function (overlay) {
        this.control.push(overlay);
        if (((this.confService.conf['defaultLayers'].includes(overlay.id))
            && (this.plotting.length === 0) ||
            ((this.confService.conf['defaultLayers'].includes(overlay.id))
                && this.initLoading)) ||
            (this.plotting.indexOf(overlay.id) > -1)) {
            // add the layer to the map
            this.addLayer(overlay);
            // align map
            var layers = [];
            for (var layer in this.onMap) {
                layers.push(this.onMap[layer].layer);
            }
            var group = __WEBPACK_IMPORTED_MODULE_6_leaflet__["featureGroup"](layers);
            this.mapService.setBounds.next(group.getBounds().pad(0.1));
        }
    };
    MapControlComponent.prototype.addLayer = function (overlay) {
        // if legend images exists, add them
        if (overlay['legendImages']) {
            for (var _i = 0, _a = overlay['legendImages']; _i < _a.length; _i++) {
                var url = _a[_i];
                if (!this.legend[url]) {
                    this.legend[url] = { 'count': 1,
                        'url': url };
                }
                else {
                    this.legend[url].count += 1;
                }
            }
        }
        this.onMap[overlay.id] = overlay;
        overlay['onMap'] = true;
        this.plotting.push(overlay.id);
        // add to map
        this.mapService.map.addLayer(overlay.layer);
        // check if the legend is available
        this.checkAllowLegend();
    };
    MapControlComponent.prototype.removeLayer = function (overlay) {
        if (this.onMap[overlay.id]) {
            delete this.onMap[overlay.id];
            overlay.onMap = false;
            if (overlay['legendImages']) {
                for (var _i = 0, _a = overlay['legendImages']; _i < _a.length; _i++) {
                    var url = _a[_i];
                    this.legend[url].count -= 1;
                }
            }
        }
        // remove from map
        this.mapService.map.removeLayer(overlay.layer);
        // stop tracking this layer
        this.plotting = this.plotting.filter(function (l) { return l !== overlay.id; });
        // check if the legend should be open
        this.checkAllowLegend();
    };
    MapControlComponent.prototype.clearAll = function () {
        for (var overlay in this.onMap) {
            this.mapService.map.removeLayer(this.onMap[overlay].layer);
        }
        this.control = [];
        this.legend = [];
        this.onMap = {};
    };
    MapControlComponent.prototype.checkAllowLegend = function () {
        for (var item in this.legend) {
            if (this.legend[item].count > 0) {
                this.allowLegend = true;
                return true;
            }
        }
        // no legends in use
        this.legendCollapsed = true;
        this.allowLegend = false;
        return false;
    };
    MapControlComponent.prototype.toggleLegend = function () {
        var allow = this.checkAllowLegend();
        if (!this.legendCollapsed) {
            this.legendCollapsed = true;
        }
        else if (allow) {
            this.legendCollapsed = false;
        }
    };
    MapControlComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            if (sub) {
                sub.unsubscribe();
            }
        }
    };
    MapControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-map-control',
            template: __webpack_require__("./src/app/map/map-control/map-control.component.html"),
            styles: [__webpack_require__("./src/app/map/map-control/map-control.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__map_control_service__["a" /* MapControlService */],
            __WEBPACK_IMPORTED_MODULE_2__map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_3__conf_service__["a" /* ConfService */]])
    ], MapControlComponent);
    return MapControlComponent;
}());



/***/ }),

/***/ "./src/app/map/map-control/map-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapControlService = /** @class */ (function () {
    function MapControlService() {
        this.addOverlay_ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.clear_ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
    }
    MapControlService.prototype.addOverlay = function (layer) {
        this.addOverlay_.next(layer);
    };
    MapControlService.prototype.clear = function () {
        this.clear_.next(true);
    };
    MapControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapControlService);
    return MapControlService;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\n    <shakemap-view-map-control></shakemap-view-map-control>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.scss":
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%;\n  min-height: 220px;\n  min-width: 200px; }\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__("./src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_layer_service__ = __webpack_require__("./src/app/map/layers/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_control_map_control_service__ = __webpack_require__("./src/app/map/map-control/map-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conf_service__ = __webpack_require__("./src/app/conf.service.ts");
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
    function MapComponent(mapService, layerService, controlService, c) {
        this.mapService = mapService;
        this.layerService = layerService;
        this.controlService = controlService;
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
        this.subs.push(this.mapService.setBounds.subscribe(function (bounds) {
            _this.setBounds(bounds);
        }));
        // eslint-disable-next-line  
        delete __WEBPACK_IMPORTED_MODULE_1_leaflet__["Icon"].Default.prototype._getIconUrl;
        // eslint-disable-next-line  
        __WEBPACK_IMPORTED_MODULE_1_leaflet__["Icon"].Default.mergeOptions({
            iconRetinaUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-icon.png"),
            shadowUrl: __webpack_require__("./node_modules/leaflet/dist/images/marker-shadow.png")
        });
        this.genBasemap();
        var mapControls = {};
        if (this.c.conf['display'] === 'static') {
            mapControls = {
                boxZoom: false,
                center: [0, 0],
                zoom: 0,
                doubleClickZoom: false,
                dragging: false,
                fadeAnimation: false,
                keyboard: false,
                markerZoomAnimation: false,
                scrollWheelZoom: false,
                tap: false,
                touchZoom: false,
                zoomAnimation: false,
                zoomControl: false
            };
        }
        else {
            mapControls = {
                scrollWheelZoom: false
            };
        }
        this.map = __WEBPACK_IMPORTED_MODULE_1_leaflet__["map"]('map', mapControls).setView([51.505, -0.09], 13);
        this.basemap.addTo(this.map);
        this.layersControl = __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers({ 'Basemap': this.basemap });
        this.mapService.map = this.map;
    };
    MapComponent.prototype.plotEvent = function (event) {
        this.layersControl = __WEBPACK_IMPORTED_MODULE_1_leaflet__["control"].layers({ 'Basemap': this.basemap });
        this.layerService.genLayers(event);
    };
    MapComponent.prototype.addLayer = function (layer) {
        this.controlService.addOverlay(layer);
    };
    MapComponent.prototype.setBounds = function (bounds) {
        this.map.fitBounds(bounds);
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
        this.controlService.clear();
    };
    MapComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subs; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shakemap-view-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__map_service__["a" /* MapService */],
            __WEBPACK_IMPORTED_MODULE_3__layers_layer_service__["a" /* LayerService */],
            __WEBPACK_IMPORTED_MODULE_4__map_control_map_control_service__["a" /* MapControlService */],
            __WEBPACK_IMPORTED_MODULE_5__conf_service__["a" /* ConfService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
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
        this.plotEvent = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.setBounds = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.mapKey = 'pk.eyJ1IjoiZHNsb3NreSIsImEiOiJjaXR1aHJnY3EwMDFoMnRxZWVtcm9laWJmIn0.1C3GE0kHPGOpbVV9kTxBlQ';
        this.map = null;
    }
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/util/leaflet-svg-shape-markers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet__ = __webpack_require__("./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_leaflet__);

/* Modified from leaflet-svg-shape-markers
https://www.npmjs.com/package/leaflet-svg-shape-markers
https://github.com/rowanwins/Leaflet.SvgShapeMarkers

The MIT License (MIT)

Copyright (c) 2016 Rowan Winsemius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
__WEBPACK_IMPORTED_MODULE_0_leaflet__["SVG"].include({
    _updateShape: function (layer) {
        var p = layer._point;
        var s = layer._radius;
        var shape = layer.options.shape;
        if (shape === "triangle") {
            var d = "M" + (p.x - s) + " " + (p.y + s) + " L" + (p.x) + " " + (p.y - s) + " L" + (p.x + s) + " " + (p.y + s) + " Z";
            this._setPath(layer, d);
        }
        if (shape === "circle") {
            this._updateCircle(layer);
        }
    }
});
__WEBPACK_IMPORTED_MODULE_0_leaflet__["ShapeMarker"] = __WEBPACK_IMPORTED_MODULE_0_leaflet__["Path"].extend({
    options: {
        fill: true,
        shape: 'triangle',
        radius: 10
    },
    initialize: function (latlng, options) {
        __WEBPACK_IMPORTED_MODULE_0_leaflet__["setOptions"](this, options);
        this._latlng = __WEBPACK_IMPORTED_MODULE_0_leaflet__["latLng"](latlng);
        this._radius = this.options.radius;
    },
    setLatLng: function (latlng) {
        this._latlng = __WEBPACK_IMPORTED_MODULE_0_leaflet__["latLng"](latlng);
        this.redraw();
        return this.fire('move', { latlng: this._latlng });
    },
    getLatLng: function () {
        return this._latlng;
    },
    setRadius: function (radius) {
        this.options.radius = this._radius = radius;
        return this.redraw();
    },
    getRadius: function () {
        return this._radius;
    },
    setStyle: function (options) {
        var radius = options && options.radius || this._radius;
        __WEBPACK_IMPORTED_MODULE_0_leaflet__["Path"].prototype.setStyle.call(this, options);
        this.setRadius(radius);
        return this;
    },
    _project: function () {
        this._point = this._map.latLngToLayerPoint(this._latlng);
        this._updateBounds();
    },
    _updateBounds: function () {
        var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [r + w, r2 + w];
        this._pxBounds = new __WEBPACK_IMPORTED_MODULE_0_leaflet__["Bounds"](this._point.subtract(p), this._point.add(p));
    },
    _update: function () {
        if (this._map) {
            this._updatePath();
        }
    },
    _updatePath: function () {
        this._renderer._updateShape(this);
    },
    _empty: function () {
        return this._size && !this._renderer._bounds.intersects(this._pxBounds);
    },
    toGeoJSON: function () {
        return __WEBPACK_IMPORTED_MODULE_0_leaflet__["GeoJSON"].getFeature(this, {
            type: 'Point',
            coordinates: __WEBPACK_IMPORTED_MODULE_0_leaflet__["GeoJSON"].latLngToCoords(this.getLatLng())
        });
    }
});
// @factory L.shapeMarker(latlng: LatLng, options? ShapeMarker options)
//
__WEBPACK_IMPORTED_MODULE_0_leaflet__["shapeMarker"] = function (latlng, options) {
    return new __WEBPACK_IMPORTED_MODULE_0_leaflet__["ShapeMarker"](latlng, options);
};


/***/ }),

/***/ "./src/app/util/mmi_colors.ts":
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

/***/ "./src/app/util/mmi_roman.ts":
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

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map