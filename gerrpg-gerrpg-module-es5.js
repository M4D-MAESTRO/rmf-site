(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gerrpg-gerrpg-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/gerrpg/gerrpg.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gerrpg/gerrpg.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Crie um novo RPG!\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-rpg></app-rpg>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/gerrpg/gerrpg-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/gerrpg/gerrpg-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GerrpgPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPageRoutingModule", function() { return GerrpgPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gerrpg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gerrpg.page */ "./src/app/gerrpg/gerrpg.page.ts");




var routes = [
    {
        path: '',
        component: _gerrpg_page__WEBPACK_IMPORTED_MODULE_3__["GerrpgPage"]
    }
];
var GerrpgPageRoutingModule = /** @class */ (function () {
    function GerrpgPageRoutingModule() {
    }
    GerrpgPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GerrpgPageRoutingModule);
    return GerrpgPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/gerrpg/gerrpg.module.ts":
/*!*****************************************!*\
  !*** ./src/app/gerrpg/gerrpg.module.ts ***!
  \*****************************************/
/*! exports provided: GerrpgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPageModule", function() { return GerrpgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gerrpg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gerrpg-routing.module */ "./src/app/gerrpg/gerrpg-routing.module.ts");
/* harmony import */ var _gerrpg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gerrpg.page */ "./src/app/gerrpg/gerrpg.page.ts");
/* harmony import */ var _components_criacoes_rpg_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/rpg.module */ "./src/app/components/criacoes/rpg.module.ts");








var GerrpgPageModule = /** @class */ (function () {
    function GerrpgPageModule() {
    }
    GerrpgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gerrpg_routing_module__WEBPACK_IMPORTED_MODULE_5__["GerrpgPageRoutingModule"],
                _components_criacoes_rpg_module__WEBPACK_IMPORTED_MODULE_7__["RpgModule"]
            ],
            declarations: [_gerrpg_page__WEBPACK_IMPORTED_MODULE_6__["GerrpgPage"]]
        })
    ], GerrpgPageModule);
    return GerrpgPageModule;
}());



/***/ }),

/***/ "./src/app/gerrpg/gerrpg.page.scss":
/*!*****************************************!*\
  !*** ./src/app/gerrpg/gerrpg.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlcnJwZy9nZXJycGcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/gerrpg/gerrpg.page.ts":
/*!***************************************!*\
  !*** ./src/app/gerrpg/gerrpg.page.ts ***!
  \***************************************/
/*! exports provided: GerrpgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerrpgPage", function() { return GerrpgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GerrpgPage = /** @class */ (function () {
    function GerrpgPage() {
    }
    GerrpgPage.prototype.ngOnInit = function () {
    };
    GerrpgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gerrpg',
            template: __webpack_require__(/*! raw-loader!./gerrpg.page.html */ "./node_modules/raw-loader/index.js!./src/app/gerrpg/gerrpg.page.html"),
            styles: [__webpack_require__(/*! ./gerrpg.page.scss */ "./src/app/gerrpg/gerrpg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GerrpgPage);
    return GerrpgPage;
}());



/***/ })

}]);
//# sourceMappingURL=gerrpg-gerrpg-module-es5.js.map