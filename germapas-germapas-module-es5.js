(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["germapas-germapas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/germapas/germapas.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/germapas/germapas.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Gerencia de Mapas\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-mapa [menu]=\"false\"></app-mapa>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/components/criacoes/mapa-update/mapa-update.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/criacoes/mapa-update/mapa-update.module.ts ***!
  \***********************************************************************/
/*! exports provided: MapaUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaUpdateModule", function() { return MapaUpdateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/listas/listas.module */ "./src/app/components/utils/listas/listas.module.ts");
/* harmony import */ var _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ficha/fichas.module */ "./src/app/components/ficha/fichas.module.ts");
/* harmony import */ var _mapa_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mapa-update.component */ "./src/app/components/criacoes/mapa-update/mapa-update.component.ts");
/* harmony import */ var _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../imagem-display/imagem-display.module */ "./src/app/components/imagem-display/imagem-display.module.ts");












var MapaUpdateModule = /** @class */ (function () {
    function MapaUpdateModule() {
    }
    MapaUpdateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mapa_update_component__WEBPACK_IMPORTED_MODULE_10__["MapaUpdateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_7__["LoadSpinnerModule"],
                _utils_listas_listas_module__WEBPACK_IMPORTED_MODULE_8__["ListasModule"],
                _ficha_fichas_module__WEBPACK_IMPORTED_MODULE_9__["FichasModule"],
                _imagem_display_imagem_display_module__WEBPACK_IMPORTED_MODULE_11__["ImagemDisplayModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_5__["ToastModule"],
            ],
            exports: [
                _mapa_update_component__WEBPACK_IMPORTED_MODULE_10__["MapaUpdateComponent"],
            ],
            entryComponents: [
                _mapa_update_component__WEBPACK_IMPORTED_MODULE_10__["MapaUpdateComponent"]
            ],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]]
        })
    ], MapaUpdateModule);
    return MapaUpdateModule;
}());



/***/ }),

/***/ "./src/app/germapas/germapas.module.ts":
/*!*********************************************!*\
  !*** ./src/app/germapas/germapas.module.ts ***!
  \*********************************************/
/*! exports provided: GermapasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GermapasPageModule", function() { return GermapasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _germapas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./germapas.page */ "./src/app/germapas/germapas.page.ts");
/* harmony import */ var _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/criacoes/historia.module */ "./src/app/components/criacoes/historia.module.ts");
/* harmony import */ var _components_criacoes_mapa_update_mapa_update_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/criacoes/mapa-update/mapa-update.module */ "./src/app/components/criacoes/mapa-update/mapa-update.module.ts");









var routes = [
    {
        path: '',
        component: _germapas_page__WEBPACK_IMPORTED_MODULE_6__["GermapasPage"]
    }
];
var GermapasPageModule = /** @class */ (function () {
    function GermapasPageModule() {
    }
    GermapasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_criacoes_historia_module__WEBPACK_IMPORTED_MODULE_7__["HistoriaModule"],
                _components_criacoes_mapa_update_mapa_update_module__WEBPACK_IMPORTED_MODULE_8__["MapaUpdateModule"],
            ],
            declarations: [_germapas_page__WEBPACK_IMPORTED_MODULE_6__["GermapasPage"]]
        })
    ], GermapasPageModule);
    return GermapasPageModule;
}());



/***/ }),

/***/ "./src/app/germapas/germapas.page.scss":
/*!*********************************************!*\
  !*** ./src/app/germapas/germapas.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlcm1hcGFzL2dlcm1hcGFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/germapas/germapas.page.ts":
/*!*******************************************!*\
  !*** ./src/app/germapas/germapas.page.ts ***!
  \*******************************************/
/*! exports provided: GermapasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GermapasPage", function() { return GermapasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GermapasPage = /** @class */ (function () {
    function GermapasPage() {
    }
    GermapasPage.prototype.ngOnInit = function () {
    };
    GermapasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-germapas',
            template: __webpack_require__(/*! raw-loader!./germapas.page.html */ "./node_modules/raw-loader/index.js!./src/app/germapas/germapas.page.html"),
            styles: [__webpack_require__(/*! ./germapas.page.scss */ "./src/app/germapas/germapas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GermapasPage);
    return GermapasPage;
}());



/***/ })

}]);
//# sourceMappingURL=germapas-germapas-module-es5.js.map