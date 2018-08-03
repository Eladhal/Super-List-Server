(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Data/storage.ts":
/*!*********************************!*\
  !*** ./src/app/Data/storage.ts ***!
  \*********************************/
/*! exports provided: superNames, sizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superNames", function() { return superNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
var superNames = [
    "Tiv-Taam",
    "Rami-Levi",
    "Super-Sal",
    "Mega",
    "Victory",
    "Super-Cofix"
];
var sizes = [
    "Small",
    "Medium",
    "Large"
];


/***/ }),

/***/ "./src/app/Data/super-data.ts":
/*!************************************!*\
  !*** ./src/app/Data/super-data.ts ***!
  \************************************/
/*! exports provided: SuperData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperData", function() { return SuperData; });
var SuperData = /** @class */ (function () {
    function SuperData() {
    }
    return SuperData;
}());



/***/ }),

/***/ "./src/app/Services/Nav.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/Nav.service.ts ***!
  \*****************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavService = /** @class */ (function () {
    function NavService() {
        this.navStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NavService.prototype.setNavStatus = function (value) {
        this.navStatus.next(value); // publishing this value to all
    };
    NavService.prototype.getNavStatus = function () {
        return this.navStatus.asObservable();
    };
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/Services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.add = function (superData) {
        return this.http.post('api/super-list', superData);
    };
    HttpService.prototype.Update = function (superData, Id) {
        return this.http.put("api/super-list/" + Id, superData);
    };
    HttpService.prototype.getSuperList = function () {
        return this.http.get('api/super-list');
    };
    HttpService.prototype.DeleteSuper = function (Id) {
        return this.http.delete("api/super-list/" + Id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/Services/super-data-management.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/Services/super-data-management.service.ts ***!
  \***********************************************************/
/*! exports provided: SuperDataManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperDataManagementService", function() { return SuperDataManagementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.service */ "./src/app/Services/Nav.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperDataManagementService = /** @class */ (function () {
    function SuperDataManagementService(messageService, httpService) {
        this.messageService = messageService;
        this.httpService = httpService;
        this._supers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.loadInitialData();
    }
    Object.defineProperty(SuperDataManagementService.prototype, "supers", {
        get: function () {
            return this._supers.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SuperDataManagementService.prototype.getCurrentSupers = function () {
        return this._supers.getValue();
    };
    SuperDataManagementService.prototype.loadInitialData = function () {
        var _this = this;
        this.httpService.getSuperList()
            .subscribe(function (supers) { return _this._supers.next(supers); }, function (err) { return console.log('Error retrieving Todos'); });
    };
    SuperDataManagementService.prototype.add = function (superData) {
        var _this = this;
        this.httpService.add(superData).subscribe(function (sup) {
            var newSupers = _this._supers.getValue();
            newSupers.push(sup);
            console.log(sup);
            _this._supers.next(newSupers);
        });
    };
    SuperDataManagementService.prototype.Update = function (superData, Id) {
        var _this = this;
        this.httpService.Update(superData, Id).subscribe(function (sup) {
            var newSupers = _this._supers.getValue();
            var index = newSupers.findIndex(function (s) { return s.id === Id; });
            newSupers[index].numOfEmployees = sup.numOfEmployees;
            newSupers[index].brand = sup.brand;
            newSupers[index].owner = sup.owner;
            newSupers[index].info = sup.info;
            newSupers[index].size = sup.size;
            _this._supers.next(newSupers);
        });
    };
    SuperDataManagementService.prototype.DeleteSuper = function (Id) {
        var _this = this;
        this.httpService.DeleteSuper(Id).subscribe(function (sup) {
            var newSupers = _this._supers.getValue();
            var index = newSupers.findIndex(function (s) { return s.id === Number(Id); });
            newSupers.splice(index, 1);
            _this._supers.next(newSupers);
        });
    };
    SuperDataManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"], _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SuperDataManagementService);
    return SuperDataManagementService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  padding: 0px;\n  margin: 0;\n}\n\n.SuperItem {\n  width: 70%;\n  height: 100%;\n}\n\n.Links {\n  width: 15%;\n  height: 25%;\n  margin-left: 0.5%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header>\n<div class=\"container\">\n  <div class =\"SuperItem\">\n    <router-outlet></router-outlet>\n    <app-bottom-nav></app-bottom-nav>\n  </div>\n  <div class =\"Links\">\n    <app-links></app-links>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
/* harmony import */ var _super_item_super_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./super-item/super-item.component */ "./src/app/super-item/super-item.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Services/Nav.service */ "./src/app/Services/Nav.service.ts");
/* harmony import */ var _Services_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/http.service */ "./src/app/Services/http.service.ts");
/* harmony import */ var _welcome_comp_welcome_comp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcome-comp/welcome-comp.component */ "./src/app/welcome-comp/welcome-comp.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _no_search_results_no_search_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./no-search-results/no-search-results.component */ "./src/app/no-search-results/no-search-results.component.ts");
/* harmony import */ var _super_item_container_super_item_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./super-item-container/super-item-container.component */ "./src/app/super-item-container/super-item-container.component.ts");
/* harmony import */ var _bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bottom-nav/bottom-nav.component */ "./src/app/bottom-nav/bottom-nav.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_11__["PopupComponent"],
                _super_item_super_item_component__WEBPACK_IMPORTED_MODULE_13__["SuperItemComponent"],
                _links_links_component__WEBPACK_IMPORTED_MODULE_14__["LinksComponent"],
                _welcome_comp_welcome_comp_component__WEBPACK_IMPORTED_MODULE_17__["WelcomeCompComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_18__["SearchResultsComponent"],
                _no_search_results_no_search_results_component__WEBPACK_IMPORTED_MODULE_19__["NoSearchResultsComponent"],
                _super_item_container_super_item_container_component__WEBPACK_IMPORTED_MODULE_20__["SuperItemContainerComponent"],
                _bottom_nav_bottom_nav_component__WEBPACK_IMPORTED_MODULE_21__["BottomNavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_7__["RoutingModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDividerModule"]
            ],
            providers: [_Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_12__["SuperDataManagementService"], _Services_Nav_service__WEBPACK_IMPORTED_MODULE_15__["NavService"], _Services_http_service__WEBPACK_IMPORTED_MODULE_16__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_11__["PopupComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom-nav/bottom-nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Nav{\n  justify-content: flex-start;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.5rem;;\n  display: block;\n}\n\n#Top{\n  margin-left: 5px;\n}\n"

/***/ }),

/***/ "./src/app/bottom-nav/bottom-nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id = \"Nav\">\n  <div *ngIf=\"navigation?.showNav\" class=\"Navbuttons\">\n    <a mat-raised-button routerLink=\"/super-branch\" color=\"primary\" >Back</a>\n    <a *ngIf=\"navigation?.showTopBtn\" href=\"{{getRefForTopClick()}}\" mat-raised-button id = \"Top\"\n       color=\"primary\">TOP</a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/bottom-nav/bottom-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/bottom-nav/bottom-nav.component.ts ***!
  \****************************************************/
/*! exports provided: BottomNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomNavComponent", function() { return BottomNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BottomNavComponent = /** @class */ (function () {
    function BottomNavComponent(router, messageService, actRoute) {
        this.router = router;
        this.messageService = messageService;
        this.actRoute = actRoute;
    }
    BottomNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (data) {
            _this.queryParam = data.For;
        });
        this.subscription = this.messageService.getNavStatus().subscribe(function (nav) {
            _this.navigation = nav._bottomNav;
        });
    };
    BottomNavComponent.prototype.getRefForTopClick = function () {
        return ("/super-branch/search?For=" + this.queryParam + "#Top");
    };
    BottomNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-nav',
            template: __webpack_require__(/*! ./bottom-nav.component.html */ "./src/app/bottom-nav/bottom-nav.component.html"),
            styles: [__webpack_require__(/*! ./bottom-nav.component.css */ "./src/app/bottom-nav/bottom-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_Nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BottomNavComponent);
    return BottomNavComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#add {\n  flex-direction: row;\n  margin-left: 5px;\n\n}\n#edit {\n  flex-direction: row;\n  margin-left: 0px;\n}\n#delete {\n  flex-direction: row;\n  margin-left: 5px;\n}\n#search {\n  display: flex;\n  flex-direction: row;\n}\nsearchInput{\n  flex-direction: row;\n}\n#searchBtn {\n  flex-direction: row;\n  margin-left: 5px;\n}\n#Top{\n  justify-content: flex-start;\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  padding-bottom: 0.5rem;\n  padding-left: 0.5rem;;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" id =\"Top\">\n    <div *ngIf=\"navigation?.searchBtn\" id = \"search\">\n      <input class=\"form-control searchInput\"  placeholder=\"Search\" aria-label=\"Search\" #search>\n      <button id = \"searchBtn\" mat-raised-button color=\"primary\" (click)=\"SearchBtn(search.value)\">Search</button>\n    </div>\n  <button *ngIf=\"navigation?.addBtn\" mat-raised-button id =\"add\" color=\"primary\" (click)=\"addSuper()\" >Add</button>\n  <button *ngIf=\"navigation?.editBtn\" mat-raised-button color=\"primary\" (click)=\"EditSuper()\" >Edit</button>\n  <button *ngIf=\"navigation?.deleteBtn\" mat-raised-button id =\"delete\" color=\"primary\" (click)=\"DeleteBtn()\" >Delete</button>\n</nav>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dialog, dataManagService, messageService, route) {
        this.dialog = dialog;
        this.dataManagService = dataManagService;
        this.messageService = messageService;
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.messageService.getNavStatus().subscribe(function (nav) {
            _this.navigation = nav._topNav;
        });
    };
    HeaderComponent.prototype.addSuper = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopupComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('add');
                _this.dataManagService.add(result);
            }
        });
    };
    HeaderComponent.prototype.EditSuper = function () {
        var _this = this;
        var id = Number(this.route.url.slice(-1));
        var selectedSuper = this.dataManagService.getCurrentSupers().find(function (sup) { return sup.id === id; });
        var dialogRef = this.dialog.open(_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopupComponent"], { disableClose: true, autoFocus: true, data: { selectedSuper: selectedSuper } });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.dataManagService.Update(result, id);
            }
        });
    };
    ;
    HeaderComponent.prototype.DeleteBtn = function () {
        var id = Number(this.route.url.slice(-1));
        this.dataManagService.DeleteSuper(id);
        this.route.navigate(['super-branch']);
    };
    HeaderComponent.prototype.SearchBtn = function (search) {
        this.route.navigate(['/super-branch/search'], { queryParams: { For: search } });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__["SuperDataManagementService"],
            _Services_Nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/links/links.component.css":
/*!*******************************************!*\
  !*** ./src/app/links/links.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n* {margin: 0; padding: 0;}\n\ndiv {\n  margin: 2px;\n}\n\nul {\n  list-style-type: none;\n  width: 500px;\n}\n\nh3 {\n  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;\n}\n\nli img {\n  float: left;\n  margin: 0 5px 5px 0;\n}\n\nli p {\n  font: 200 12px/1.5 Georgia, Times New Roman, serif;\n}\n\nli{\n  padding: 10px;\n  overflow: auto;\n  box-shadow: 1px 1.5px 6px hsl(0, 0%, 85%);\n}\n\nli:hover {\n  background: #eee;\n  cursor: pointer;\n}\n\nimg {\n  width: 50px;\n}\n\n"

/***/ }),

/***/ "./src/app/links/links.component.html":
/*!********************************************!*\
  !*** ./src/app/links/links.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let super of listOfSuper\">\n      <a routerLink=\"super-branch/{{super.id}}\">\n        <img src=\"../../assets/{{super.brand}}.png\" />\n        <h3>{{super.brand}}</h3>\n        <p>Owned by {{super.owner}}</p>\n      </a>\n    </li>\n  </ul>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/links/links.component.ts":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinksComponent = /** @class */ (function () {
    function LinksComponent(dataManagService) {
        this.dataManagService = dataManagService;
    }
    LinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataManagService.supers.subscribe(function (supers) {
            console.log('links comp update');
            _this.listOfSuper = supers;
        });
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.css */ "./src/app/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_1__["SuperDataManagementService"]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/no-search-results/no-search-results.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/no-search-results/no-search-results.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/no-search-results/no-search-results.component.html":
/*!********************************************************************!*\
  !*** ./src/app/no-search-results/no-search-results.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>No Search results</h1>\n"

/***/ }),

/***/ "./src/app/no-search-results/no-search-results.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/no-search-results/no-search-results.component.ts ***!
  \******************************************************************/
/*! exports provided: NoSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSearchResultsComponent", function() { return NoSearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoSearchResultsComponent = /** @class */ (function () {
    function NoSearchResultsComponent(messageService) {
        this.messageService = messageService;
    }
    NoSearchResultsComponent.prototype.ngOnInit = function () {
        this.InitNavStatus();
    };
    NoSearchResultsComponent.prototype.InitNavStatus = function () {
        var navstatus = {
            _topNav: {
                addBtn: false,
                searchBtn: true,
                editBtn: false,
                deleteBtn: false
            },
            _bottomNav: {
                showNav: true,
                showTopBtn: false
            }
        };
        this.messageService.setNavStatus(navstatus);
    };
    NoSearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-no-search-results',
            template: __webpack_require__(/*! ./no-search-results.component.html */ "./src/app/no-search-results/no-search-results.component.html"),
            styles: [__webpack_require__(/*! ./no-search-results.component.css */ "./src/app/no-search-results/no-search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]])
    ], NoSearchResultsComponent);
    return NoSearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/*!*******************************************!*\
  !*** ./src/app/popup/popup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add a super market branch</h2>\n\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Owner Name\" #owner value=\"{{data?.selectedSuper?.owner}}\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"super market brand\" #superBrand value=\"{{data?.selectedSuper?.brand}}\">\n      <mat-option *ngFor=\"let super of superNames\" [value]=super >\n        {{ super }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"super market size\" #size value=\"{{data?.selectedSuper?.size}}\">\n      <mat-option *ngFor=\"let size of sizes\" [value]=size >\n        {{ size }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Number of employees\" type=\"number\"\n           #numOfEmployees value=\"{{data?.selectedSuper?.numOfEmployees}}\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Branch info\" #info value=\"{{data?.selectedSuper?.info}}\"></textarea>\n  </mat-form-field>\n</form>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n  <button class=\"mat-raised-button mat-primary\"\n          (click)=\"save(owner.value,superBrand.value,size.value,\n                         numOfEmployees.value,info.value)\">Save\n  </button>\n</mat-dialog-actions>\n\n\n"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Data_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/storage */ "./src/app/Data/storage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PopupComponent = /** @class */ (function () {
    function PopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PopupComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    PopupComponent.prototype.ngOnInit = function () {
        this.superNames = _Data_storage__WEBPACK_IMPORTED_MODULE_2__["superNames"];
        this.sizes = _Data_storage__WEBPACK_IMPORTED_MODULE_2__["sizes"];
    };
    PopupComponent.prototype.save = function (owner, superBrand, size, numOfEmployees, info) {
        if (owner === "" || superBrand === "") {
            this.dialogRef.close();
        }
        var superData = {
            id: null,
            owner: owner,
            brand: superBrand,
            size: size,
            numOfEmployees: numOfEmployees,
            info: info
        };
        this.dialogRef.close(superData);
    };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/popup/popup.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_comp_welcome_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../welcome-comp/welcome-comp.component */ "./src/app/welcome-comp/welcome-comp.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _no_search_results_no_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../no-search-results/no-search-results.component */ "./src/app/no-search-results/no-search-results.component.ts");
/* harmony import */ var _super_item_container_super_item_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../super-item-container/super-item-container.component */ "./src/app/super-item-container/super-item-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/super-branch', pathMatch: 'full' },
    { path: 'super-branch/search/no-results', component: _no_search_results_no_search_results_component__WEBPACK_IMPORTED_MODULE_4__["NoSearchResultsComponent"] },
    { path: 'super-branch/search', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_3__["SearchResultsComponent"] },
    { path: 'super-branch/:id', component: _super_item_container_super_item_container_component__WEBPACK_IMPORTED_MODULE_5__["SuperItemContainerComponent"] },
    { path: 'super-branch', component: _welcome_comp_welcome_comp_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeCompComponent"] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a,img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  margin-bottom: 50px;\n}\n\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"Content\">\n  <img *ngIf=\"noResults\" src=\"../../assets/noResults.png\" alt=\"\">\n  <app-super-item *ngFor=\"let super of filteredSupers\" [superData]=\"super\"></app-super-item>\n</div>\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(messageService, actRoute, dataManagService) {
        this.messageService = messageService;
        this.actRoute = actRoute;
        this.dataManagService = dataManagService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.queryParams.subscribe(function (routeParams) {
            _this.dataManagService.supers.subscribe(function (supers) {
                _this.filteredSupers = _this.getFilteredList((routeParams.For).toLowerCase(), supers);
                if (_this.filteredSupers.length > 0) {
                    _this.noResults = false;
                    _this.InitNavStatus();
                }
                else {
                    _this.noResults = true;
                }
            });
        });
    };
    SearchResultsComponent.prototype.InitNavStatus = function () {
        var navstatus = {
            _topNav: {
                addBtn: false,
                searchBtn: true,
                editBtn: false,
                deleteBtn: false
            },
            _bottomNav: {
                showNav: true,
                showTopBtn: true
            }
        };
        this.messageService.setNavStatus(navstatus);
    };
    SearchResultsComponent.prototype.getFilteredList = function (search, superArray) {
        return superArray.filter(function (rec) { return rec.size.toLowerCase().includes(search) ||
            rec.info.toLowerCase().includes(search) ||
            rec.owner.toLowerCase().includes(search) || rec.brand.toLowerCase().includes(search); });
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__["SuperDataManagementService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/super-item-container/super-item-container.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/super-item-container/super-item-container.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/super-item-container/super-item-container.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/super-item-container/super-item-container.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-super-item [superData]=\"superData\"></app-super-item>\n"

/***/ }),

/***/ "./src/app/super-item-container/super-item-container.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/super-item-container/super-item-container.component.ts ***!
  \************************************************************************/
/*! exports provided: SuperItemContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperItemContainerComponent", function() { return SuperItemContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SuperItemContainerComponent = /** @class */ (function () {
    function SuperItemContainerComponent(navService, actRoute, dataManagService) {
        this.navService = navService;
        this.actRoute = actRoute;
        this.dataManagService = dataManagService;
    }
    SuperItemContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataManagService.supers.subscribe(function (supers) {
            _this.superData = supers.find(function (sup) { return sup.id === Number(_this.currentItemId); });
        });
        this.actRoute.params.subscribe(function (routeParams) {
            _this.currentItemId = routeParams.id;
            _this.superData = _this.dataManagService.getCurrentSupers().
                find(function (sup) { return sup.id === Number(_this.currentItemId); });
        });
        this.InitNavStatus();
    };
    SuperItemContainerComponent.prototype.InitNavStatus = function () {
        var navstatus = {
            _topNav: {
                addBtn: false,
                searchBtn: false,
                editBtn: true,
                deleteBtn: true
            },
            _bottomNav: {
                showNav: true,
                showTopBtn: false
            }
        };
        this.navService.setNavStatus(navstatus);
    };
    SuperItemContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-item-container',
            template: __webpack_require__(/*! ./super-item-container.component.html */ "./src/app/super-item-container/super-item-container.component.html"),
            styles: [__webpack_require__(/*! ./super-item-container.component.css */ "./src/app/super-item-container/super-item-container.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_Nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_3__["SuperDataManagementService"]])
    ], SuperItemContainerComponent);
    return SuperItemContainerComponent;
}());



/***/ }),

/***/ "./src/app/super-item/super-item.component.css":
/*!*****************************************************!*\
  !*** ./src/app/super-item/super-item.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comp {\n  margin-left: 2px;\n  padding-left: 0;\n  margin-bottom: 2px;\n  box-shadow: 1px 1.5px 6px hsl(0, 0%, 85%);\n}\n\n.back {\n  margin-left: 10px;\n}\n\n.button {\n  width: 65px;\n  height: 35px;\n  background: lightblue;\n  padding: 5px;\n  text-align: center;\n  border-radius: 5px;\n  color: white;\n}\n\nimg {\n  width: 80px;\n  float: left;\n  height: 100%;\n  padding-bottom: 0.1px;\n}\n\n#empImg{\n  width: 50px;\n  float: left;\n  height: 100%;\n  padding-bottom: 5px;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.Topic{\n  background-color: hsla(20, 5%, 50%, 0.1);\n  margin-bottom: 5px;\n  border: 0.5px outset hsla(20, 5%, 50%, 0.1);\n  border-radius: 2px;\n  display: flex;\n  flex-direction: row;\n  height: 50px;\n}\n\n.AdminInfo,#Employee{\n  display: flex;\n  flex-direction: row;\n  border: 0.5px outset hsla(20, 5%, 50%, 0.1);\n}\n\n#numOfEmployees {\n  margin-left: 30px;\n  margin-top: 12px;\n  margin-right: 10px;\n}\n\n#Owner,#Size{\n  width: 60%;\n  border: 0.5px outset hsla(20, 5%, 50%, 0.1);\n  margin: 0px;\n  padding: 0px;\n  text-align: center;\n  padding-top: 12px;\n}\n\n#Size{\n  width: 30%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/super-item/super-item.component.html":
/*!******************************************************!*\
  !*** ./src/app/super-item/super-item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"comp\">\n  <div class=\"Topic\">\n    <img src=\"../../assets/{{superData?.brand}}.png\" />\n  </div>\n  <p>{{superData?.info}}</p>\n  <div class =\"AdminInfo\">\n    <div id=\"Employee\">\n      <img id=\"empImg\" src=\"../../assets/Employees.png\">\n      <p id =\"numOfEmployees\">{{superData?.numOfEmployees}}</p>\n    </div>\n    <p id =\"Owner\">Owner Name: {{superData?.owner}}</p>\n    <p id =\"Size\">Size: {{superData?.size}}</p>\n  </div>\n  <mat-divider></mat-divider>\n</div>\n"

/***/ }),

/***/ "./src/app/super-item/super-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/super-item/super-item.component.ts ***!
  \****************************************************/
/*! exports provided: SuperItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperItemComponent", function() { return SuperItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Data_super_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/super-data */ "./src/app/Data/super-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuperItemComponent = /** @class */ (function () {
    function SuperItemComponent() {
    }
    SuperItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Data_super_data__WEBPACK_IMPORTED_MODULE_1__["SuperData"])
    ], SuperItemComponent.prototype, "superData", void 0);
    SuperItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-item',
            template: __webpack_require__(/*! ./super-item.component.html */ "./src/app/super-item/super-item.component.html"),
            styles: [__webpack_require__(/*! ./super-item.component.css */ "./src/app/super-item/super-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuperItemComponent);
    return SuperItemComponent;
}());



/***/ }),

/***/ "./src/app/welcome-comp/welcome-comp.component.css":
/*!*********************************************************!*\
  !*** ./src/app/welcome-comp/welcome-comp.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome{\n  height: 100%;\n  background-image: url('super.jpeg');\n  background-size: 100%;\n}\nh1 {\n  text-align: center;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/welcome-comp/welcome-comp.component.html":
/*!**********************************************************!*\
  !*** ./src/app/welcome-comp/welcome-comp.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n  <div class=\"welcome\">\n    <h1>Welcome to super market portal</h1>\n  </div>\n<!--</div>-->\n\n"

/***/ }),

/***/ "./src/app/welcome-comp/welcome-comp.component.ts":
/*!********************************************************!*\
  !*** ./src/app/welcome-comp/welcome-comp.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeCompComponent", function() { return WelcomeCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/super-data-management.service */ "./src/app/Services/super-data-management.service.ts");
/* harmony import */ var _Services_Nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Nav.service */ "./src/app/Services/Nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeCompComponent = /** @class */ (function () {
    function WelcomeCompComponent(dataManagService, messageService) {
        this.dataManagService = dataManagService;
        this.messageService = messageService;
    }
    WelcomeCompComponent.prototype.ngOnInit = function () {
        this.InitNavStatus();
    };
    WelcomeCompComponent.prototype.InitNavStatus = function () {
        var navstatus = {
            _topNav: {
                addBtn: true,
                searchBtn: true,
                editBtn: false,
                deleteBtn: false
            },
            _bottomNav: {
                showNav: false,
                showTopBtn: false
            }
        };
        this.messageService.setNavStatus(navstatus);
    };
    WelcomeCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome-comp',
            template: __webpack_require__(/*! ./welcome-comp.component.html */ "./src/app/welcome-comp/welcome-comp.component.html"),
            styles: [__webpack_require__(/*! ./welcome-comp.component.css */ "./src/app/welcome-comp/welcome-comp.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_super_data_management_service__WEBPACK_IMPORTED_MODULE_1__["SuperDataManagementService"],
            _Services_Nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]])
    ], WelcomeCompComponent);
    return WelcomeCompComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eladhalperin/Desktop/Angular/Wiki/angular-wiki/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map