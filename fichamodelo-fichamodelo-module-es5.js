(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fichamodelo-fichamodelo-module"],{

/***/ "./node_modules/primeng/fesm5/primeng-inputtext.js":
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-inputtext.js ***!
  \*********************************************************/
/*! exports provided: InputText, InputTextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputText", function() { return InputText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextModule", function() { return InputTextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    InputText.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
    ], InputText);
    return InputText;
}());
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtext.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-inputtextarea.js":
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-inputtextarea.js ***!
  \*************************************************************/
/*! exports provided: InputTextarea, InputTextareaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextarea", function() { return InputTextarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaModule", function() { return InputTextareaModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var InputTextarea = /** @class */ (function () {
    function InputTextarea(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
        this.onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputTextarea.prototype.ngDoCheck = function () {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize();
        }
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputTextarea.prototype.onInput = function (e) {
        this.updateFilledState();
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) || (this.ngModel && this.ngModel.model);
    };
    InputTextarea.prototype.onFocus = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.onBlur = function (e) {
        if (this.autoResize) {
            this.resize(e);
        }
    };
    InputTextarea.prototype.resize = function (event) {
        this.el.nativeElement.style.height = 'auto';
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
        if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
            this.el.nativeElement.style.overflowY = "scroll";
            this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
        }
        else {
            this.el.nativeElement.style.overflow = "hidden";
        }
        this.onResize.emit(event || {});
    };
    InputTextarea.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], InputTextarea.prototype, "autoResize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])()
    ], InputTextarea.prototype, "onResize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('input', ['$event'])
    ], InputTextarea.prototype, "onInput", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('focus', ['$event'])
    ], InputTextarea.prototype, "onFocus", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur', ['$event'])
    ], InputTextarea.prototype, "onBlur", null);
    InputTextarea = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pInputTextarea]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-inputtextarea-resizable]': 'autoResize',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])())
    ], InputTextarea);
    return InputTextarea;
}());
var InputTextareaModule = /** @class */ (function () {
    function InputTextareaModule() {
    }
    InputTextareaModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [InputTextarea],
            declarations: [InputTextarea]
        })
    ], InputTextareaModule);
    return InputTextareaModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtextarea.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fichamodelo/fichamodelo.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fichamodelo/fichamodelo.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Ficha Modelo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button fill=\"outline\" expand=\"block\" (click)=\"novo()\">{{ displayForm? \"Cancelar\": \"Criar novo\" }}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"consultar()\">Buscar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ng-container *ngIf=\"listDisplay\">\r\n    <div>\r\n      <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n        (notifyParent)=\"getNotification($event)\" [add]=\"false\" [id]=\"'idFichaModelo'\" [nome]=\"'nomeFichaModelo'\"\r\n        [descricao]=\"'historia'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\" [closeBTN]=\"false\"></app-paginacao>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"displayForm\">\r\n    <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"getAjuda()\">\r\n      {{ ajudaTemplate }}</ion-button>\r\n    <div class=\"p-grid card\">\r\n      <div class=\"p-col-12\">\r\n        <ng-container *ngIf=\"showHelp\">\r\n          <ion-card>\r\n            <ion-segment color=\"success\" [(ngModel)]=\"abaAtual\" [ngModelOptions]=\"{standalone: true}\">\r\n              <ion-segment-button value=\"parte1\">\r\n                <ion-label style=\"font-size: 1em\">Ajuda - 1</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"parte2\">\r\n                <ion-label style=\"font-size: 1em\">Ajuda - 2</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"parte3\">\r\n                <ion-label style=\"font-size: 1em\">Ajuda - 3</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n\r\n            <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte1'\">\r\n              <img class=\"cover\" src=\"assets/imgs/dice.png\" style=\"text-align: center;\" />\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Ajuda - Parte 1</ion-card-subtitle>\r\n                <ion-card-title>Atributos Padrões</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                Todas as fichas modelos possuem atributos padrões como: XP-Atual, XP-Para o Próximo Nível,\r\n                PV-Total, PV-Atual, PM-Total, PM-Atual, Karma-Total, Karma-Atual, Nome, Classe, Nivel, Tedência e\r\n                Raça.<br>\r\n                *PV: Pontos vitálicos (HP, vida).<br>\r\n                *PM: Pontos mágicos (Mana, energia mágica).\r\n              </ion-card-content>\r\n            </ng-container>\r\n\r\n            <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte2'\">\r\n              <img class=\"cover\" src=\"assets/imgs/dice.png\" />\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Ajuda - Parte 2</ion-card-subtitle>\r\n                <ion-card-title>Motivo da padronização</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                Esses atributos padrões existem, pois existem em quase todas as fichas ou sistemas.<br> Além disso,\r\n                esses\r\n                atributos\r\n                são automatizados e encapsulados no RMF, para evitar qualquer tipo de fraude.<br> Mas não se preocupe,\r\n                caso\r\n                algum desses atributos\r\n                por qualquer motivo, não exista ou faça sentido na sua ficha, você ignorar, sua existência não gerará\r\n                interferência.\r\n              </ion-card-content>\r\n            </ng-container>\r\n\r\n            <ng-container style=\"margin-top: 10px;\" *ngIf=\"abaAtual == 'parte3'\">\r\n              <img class=\"cover\" src=\"assets/imgs/dice.png\" />\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Ajuda - Parte 3</ion-card-subtitle>\r\n                <ion-card-title>Novos atributos</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                Você ainda pode adicionar quantos atributos quiser em seu modelo.<br>\r\n                O atributo possui um: nome, descrição, nivel e bónus.<br>\r\n                Adicione quantos quiser, e seu modelo de ficha carregará consigo, os atributos padrões e os\r\n                personalizados.\r\n              </ion-card-content>\r\n            </ng-container>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <ng-container>\r\n        <div class=\"p-col-12\" style=\"margin-left: 5px; margin-right: 5px;\"></div>\r\n        <p-dataView class=\"p-col-12\" [value]=\"getAtributos()\">\r\n          <p-header>\r\n            <h3 style=\"align-self: flex-start; text-align: start;\">Lista de Atributos\r\n              <button style=\"align-self: flex-end; float: right;\" pButton type=\"button\" [icon]=\"iconTable\"\r\n                (click)=\"minimizar()\" class=\"ui-button-warning\"></button>\r\n            </h3>\r\n          </p-header>\r\n          <ng-template let-atributo pTemplate=\"listItem\">\r\n            <div class=\"ui-g-12\">\r\n              <ng-container *ngIf=\"showAtributos\">\r\n                <div class=\"atributos-details\">\r\n                  <div style=\"text-align: start;\">\r\n                    <img [src]=\"atributo.imgURL\">\r\n                    <div class=\"ui-g\">\r\n                      <div class=\"ui-g-12\">Nome: <b>{{atributo.nome}}</b></div>\r\n                      <div class=\"ui-g-12\">Descrição: <b>{{atributo.descricao}}</b></div>\r\n                      <div class=\"ui-g-4 ui-sm-12\">Nivel: <b>{{atributo.nivel}}</b></div>\r\n                      <button id=\"btn1\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                        style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                        style=\"margin: 0;\" (click)=\"atributoNivel(atributo, true)\"></button>\r\n                      <button id=\"btn2\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                        style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\"\r\n                        icon=\"pi pi-sort-amount-down\" style=\"margin: 0; margin-left: 5px;\"\r\n                        (click)=\"atributoNivel(atributo, false)\"></button>\r\n                      <div class=\"ui-g-12\"></div>\r\n                      <div class=\"ui-g-4 ui-sm-12\">Bonus: <b>{{atributo.bonus}}</b></div>\r\n                      <button id=\"btn3\" class=\"ui-g-4 ui-sm-5 ui-button-success\"\r\n                        style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\" icon=\"pi pi-sort-amount-up\"\r\n                        style=\"margin: 0;\" (click)=\"atributoBonus(atributo, true)\"></button>\r\n                      <button id=\"btn4\" class=\"ui-g-4 ui-sm-5 ui-button-danger\"\r\n                        style=\"align-self: flex-end; text-align: end;\" pButton type=\"button\"\r\n                        icon=\"pi pi-sort-amount-down\" style=\"margin: 0; margin-left: 5px;\"\r\n                        (click)=\"atributoBonus(atributo, false)\"></button>\r\n                      <div class=\"ui-g-12\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ng-template>\r\n\r\n          <p-footer>\r\n            <button pButton type=\"button\" icon=\"pi pi-plus\"\r\n              style=\"margin: 0; width: 100px; align-self: flex-end; align-content: flex-end; align-items: flex-end;\"\r\n              (click)='showDialog(\"Insira as informações\", 6 )'></button>\r\n          </p-footer>\r\n        </p-dataView>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n    <form [formGroup]=\"formModelo\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <div class=\"p-grid\" style=\"margin-left: 5px; margin-right: 5px;\">\r\n\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-2 p-sm-12 \">Nome do modelo da Ficha</div>\r\n        <div class=\"p-md-6 p-sm-12 \">\r\n          <div class=\" ui-inputgroup\">\r\n            <input style=\"width: 100%;\" type=\"text\" pInputText placeholder=\"Nome do modelo da Ficha\"\r\n              formControlName=\"nomeFichaModelo\" type=\"text\">\r\n            <p class=\"danger\"\r\n              *ngIf=\"formModelo.controls.nomeFichaModelo.dirty && formModelo.controls.nomeFichaModelo.errors\"\r\n              margin-left>\r\n              Campo obrigatorio</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12 \">Tipo de RPG</div>\r\n        <div class=\" p-md-3 p-sm-12 \">\r\n          <div class=\" ui-inputgroup\">\r\n            <p-dropdown [options]=\"tipoRPG\" formControlName=\"tipoRPG\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12 \">XP Inicial</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\" ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"XP Inicial\" formControlName=\"xpAtual\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.xpAtual.dirty && formModelo.controls.xpAtual.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">XP Para Upar</div>\r\n        <div class=\" p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"XP Para Upar\" formControlName=\"xpPra\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.xpPra.dirty && formModelo.controls.xpPra.errors\" margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12 \">PV inicial</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"PV inicial\" formControlName=\"pvAtual\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.pvAtual.dirty && formModelo.controls.pvAtual.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">PV total</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"PV total\" formControlName=\"pvTotal\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.pvTotal.dirty && formModelo.controls.pvTotal.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12 \">PM inicial</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"PM inicial\" formControlName=\"pmAtual\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.pmAtual.dirty && formModelo.controls.pmAtual.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">PM total</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"PM total\" formControlName=\"pmTotal\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.pmTotal.dirty && formModelo.controls.pmTotal.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"nobreak p-col-12\"></div>\r\n        <div class=\"alinhamento p-md-1 p-sm-12  \">Karma inicial</div>\r\n        <div class=\"p-md-3 p-sm-12 \">\r\n          <div class=\"ui-inputgroup\">\r\n            <input type=\"text\" pInputText placeholder=\"Karma inicial\" formControlName=\"karmaAtual\" type=\"text\">\r\n            <p class=\"danger\" *ngIf=\"formModelo.controls.karmaAtual.dirty && formModelo.controls.karmaAtual.errors\"\r\n              margin-left>\r\n              Campo obrigatorio, e apenas valores numéricos</p>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </form>\r\n  </ng-container>\r\n\r\n\r\n</ion-content>\r\n\r\n<p-dialog [visible]=\"display.show\" [modal]=\"true\" [draggable]=\"false\" [focusTrap]=\"true\" [closable]=\"false\">\r\n  <p-header>\r\n    {{ display.titulo }}\r\n  </p-header>\r\n\r\n  <div class=\"p-grid\" style=\"max-width: 221px;\">\r\n    <form style=\"max-width: 221px;\" [formGroup]=\"formAtributo\" (ngSubmit)=\"$event.preventDefault()\">\r\n      <input class=\"p-col-12 in\" style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status[0]\"\r\n        formControlName=\"nome\">\r\n      <p class=\"p-col-12 danger \" *ngIf=\"formAtributo.get('nome').invalid\" margin-left>\r\n        Preencha o nome</p>\r\n\r\n      <input class=\"p-col-12 in\" style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status[1]\"\r\n        formControlName=\"descricao\">\r\n      <p class=\"p-col-12 danger\" *ngIf=\"formAtributo.get('descricao').invalid\" margin-left>\r\n        Preencha a descrição</p>\r\n\r\n      <input class=\"p-col-12 in\" style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status[2]\"\r\n        formControlName=\"nivel\">\r\n      <p class=\"p-col-12 danger \" *ngIf=\"formAtributo.get('nivel').invalid\" margin-left>\r\n        Preencha apenas com números inteiros</p>\r\n\r\n      <input class=\"p-col-12 in\" style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status[3]\"\r\n        formControlName=\"bonus\">\r\n      <p class=\"p-col-12 danger \" *ngIf=\"formAtributo.get('bonus').invalid\" margin-left>\r\n        Preencha apenas com números inteiros</p>\r\n\r\n      <input class=\"p-col-12 in\" style=\"margin-top: 5px;\" type=\"text\" pInputText [placeholder]=\"display.status[4]\"\r\n        formControlName=\"imgURL\">\r\n    </form>\r\n  </div>\r\n\r\n  <p-footer>\r\n    <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-times-circle\" class=\"ui-button-danger\"\r\n      (click)=\"cancelAtributo()\"></button>\r\n    <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-check-circle\" class=\"ui-button-success\"\r\n      [disabled]=\"formAtributo.invalid\" (click)=\"add()\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<ion-footer>\r\n  <ion-button class=\"btn\" expand=\"block\" fill=\"solid\" type=\"submit\" color=\"primary\" (click)=\"salvar()\"\r\n    [disabled]=\"formModelo.invalid\">\r\n    Salvar</ion-button>\r\n</ion-footer>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./src/app/config/rpg.config.ts":
/*!**************************************!*\
  !*** ./src/app/config/rpg.config.ts ***!
  \**************************************/
/*! exports provided: MedievalRPG, CyberpunkRPG, SteampunkRPG, HorrorRPG, tipoRPG, tipoArrayRPG, Arma_Ataque, Armadura_Defesa, Utilizavel, tipoITEM, TipoItem, Corte, Esmagamento, Perfuacao, tipoARMA, Cabeca, Tronco, Bracos, Pernas, Escudo, tipoDEFESA, Consumivel, Aplicavel, Equipavel, tipoUTILIZAVEL, PRINCIPAL, SECUNDARIA, ATIVIDADE, EVENTO, TipoMissao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedievalRPG", function() { return MedievalRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberpunkRPG", function() { return CyberpunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteampunkRPG", function() { return SteampunkRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorrorRPG", function() { return HorrorRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoRPG", function() { return tipoRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoArrayRPG", function() { return tipoArrayRPG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arma_Ataque", function() { return Arma_Ataque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Armadura_Defesa", function() { return Armadura_Defesa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilizavel", function() { return Utilizavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoITEM", function() { return tipoITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoItem", function() { return TipoItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Corte", function() { return Corte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Esmagamento", function() { return Esmagamento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfuacao", function() { return Perfuacao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoARMA", function() { return tipoARMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cabeca", function() { return Cabeca; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tronco", function() { return Tronco; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bracos", function() { return Bracos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pernas", function() { return Pernas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Escudo", function() { return Escudo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoDEFESA", function() { return tipoDEFESA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumivel", function() { return Consumivel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aplicavel", function() { return Aplicavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equipavel", function() { return Equipavel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tipoUTILIZAVEL", function() { return tipoUTILIZAVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINCIPAL", function() { return PRINCIPAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECUNDARIA", function() { return SECUNDARIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATIVIDADE", function() { return ATIVIDADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTO", function() { return EVENTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMissao", function() { return TipoMissao; });
/*TIPOS RPG*/
var MedievalRPG = 0;
var CyberpunkRPG = 1;
var SteampunkRPG = 2;
var HorrorRPG = 3;
var tipoRPG = { MedievalRPG: MedievalRPG, CyberpunkRPG: CyberpunkRPG, SteampunkRPG: SteampunkRPG, HorrorRPG: HorrorRPG };
var tipoArrayRPG = ['Medieval', 'Cyberpunk', 'Steampunk', 'Horror'];
/*TIPOS ITENS*/
var Arma_Ataque = 0;
var Armadura_Defesa = 1;
var Utilizavel = 2;
var tipoITEM = { Arma_Ataque: Arma_Ataque, Armadura_Defesa: Armadura_Defesa, Utilizavel: Utilizavel };
var TipoItem = [{
        value: Arma_Ataque,
        template: 'Ataque'
    },
    {
        value: Armadura_Defesa,
        template: 'Defesa'
    },
    {
        value: Utilizavel,
        template: 'Utilizavel'
    }
];
/*TIPOS ARMAS*/
var Corte = 0;
var Esmagamento = 1;
var Perfuacao = 2;
var tipoARMA = { Corte: Corte, Esmagamento: Esmagamento, Perfuacao: Perfuacao };
/*TIPOS DEFESA*/
var Cabeca = 0;
var Tronco = 1;
var Bracos = 2;
var Pernas = 3;
var Escudo = 4;
var tipoDEFESA = { Cabeca: Cabeca, Tronco: Tronco, Bracos: Bracos, Pernas: Pernas, Escudo: Escudo };
/*TIPOS Utilizavel*/
var Consumivel = 0;
var Aplicavel = 1;
var Equipavel = 2;
var tipoUTILIZAVEL = { Consumivel: Consumivel, Aplicavel: Aplicavel, Equipavel: Equipavel };
/*TIPOS MISSAO*/
var PRINCIPAL = 0;
var SECUNDARIA = 1;
var ATIVIDADE = 2;
var EVENTO = 3;
var TipoMissao = [{
        value: PRINCIPAL,
        template: 'Principal'
    },
    {
        value: SECUNDARIA,
        template: 'Secundária'
    },
    {
        value: ATIVIDADE,
        template: 'Atividade'
    },
    {
        value: EVENTO,
        template: 'Evento'
    },
];


/***/ }),

/***/ "./src/app/fichamodelo/fichamodelo-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fichamodelo/fichamodelo-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FichamodeloPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichamodeloPageRoutingModule", function() { return FichamodeloPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fichamodelo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fichamodelo.page */ "./src/app/fichamodelo/fichamodelo.page.ts");




var routes = [
    {
        path: '',
        component: _fichamodelo_page__WEBPACK_IMPORTED_MODULE_3__["FichamodeloPage"]
    }
];
var FichamodeloPageRoutingModule = /** @class */ (function () {
    function FichamodeloPageRoutingModule() {
    }
    FichamodeloPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FichamodeloPageRoutingModule);
    return FichamodeloPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/fichamodelo/fichamodelo.module.ts":
/*!***************************************************!*\
  !*** ./src/app/fichamodelo/fichamodelo.module.ts ***!
  \***************************************************/
/*! exports provided: FichamodeloPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichamodeloPageModule", function() { return FichamodeloPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fichamodelo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fichamodelo-routing.module */ "./src/app/fichamodelo/fichamodelo-routing.module.ts");
/* harmony import */ var _fichamodelo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fichamodelo.page */ "./src/app/fichamodelo/fichamodelo.page.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm5/primeng-inputtext.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm5/primeng-dataview.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm5/primeng-inputtextarea.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm5/primeng-dialog.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");
/* harmony import */ var _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");

















var FichamodeloPageModule = /** @class */ (function () {
    function FichamodeloPageModule() {
    }
    FichamodeloPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fichamodelo_routing_module__WEBPACK_IMPORTED_MODULE_5__["FichamodeloPageRoutingModule"],
                primeng_dataview__WEBPACK_IMPORTED_MODULE_8__["DataViewModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_11__["ToastModule"],
                primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_10__["InputTextareaModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_12__["ButtonModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"],
                _components_utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_15__["LoadSpinnerModule"],
                _components_utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_16__["PaginacaoModule"]
            ],
            declarations: [_fichamodelo_page__WEBPACK_IMPORTED_MODULE_6__["FichamodeloPage"]],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__["MessageService"]]
        })
    ], FichamodeloPageModule);
    return FichamodeloPageModule;
}());



/***/ }),

/***/ "./src/app/fichamodelo/fichamodelo.page.scss":
/*!***************************************************!*\
  !*** ./src/app/fichamodelo/fichamodelo.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover {\n  width: 200px;\n  height: 200px;\n  text-align: center;\n  margin-left: 40%;\n  margin-top: 10px;\n  border-radius: 20px;\n}\n\n@media only screen and (max-width: 640px) {\n  .cover {\n    margin-left: 0;\n  }\n}\n\n.atributos-details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 2em;\n  border-bottom: 1px solid #d9dad9;\n}\n\n.atributos-details > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.atributos-details > div img {\n  margin-right: 14px;\n  width: 90px;\n  height: 90px;\n}\n\n.atributos-details {\n  padding: 0 1em 1em 1em;\n  border-bottom: 1px solid #d9dad9;\n  margin: 1em;\n  background-color: #ebebeb;\n  border-radius: 2px;\n}\n\n.atributos-details:hover {\n  background-color: #a2fffe;\n  cursor: pointer;\n}\n\n.btn {\n  align-self: flex-start;\n}\n\n.danger {\n  font-size: 8px;\n  color: red;\n  margin-top: 10px;\n}\n\n.nobreak {\n  display: none;\n}\n\n@media only screen and (max-width: 767px) {\n  .form {\n    text-align: start;\n  }\n\n  .nobreak {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.alinhamento {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmljaGFtb2RlbG8vQzpcXFVzZXJzXFxsaGNjb1xcRG9jdW1lbnRzXFxEZXNlbnZvbHZpbWVudG9cXFRDQ1xcRnJvbnRlbmRcXFJNRi1Nb2JpbGUvc3JjXFxhcHBcXGZpY2hhbW9kZWxvXFxmaWNoYW1vZGVsby5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpY2hhbW9kZWxvL2ZpY2hhbW9kZWxvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsY0FBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNFRjs7QURDQTtFQUNFLHNCQUFBO0FDRUY7O0FESUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLGlCQUFBO0VDREY7O0VESUE7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RUNERjtBQUNGOztBRElBO0VBQ0UsZUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZmljaGFtb2RlbG8vZmljaGFtb2RlbG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuY292ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xyXG59XHJcblxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYgaW1nIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG59XHJcbi5hdHJpYnV0b3MtZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcclxuICBtYXJnaW46IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmF0cmlidXRvcy1kZXRhaWxzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJmZmZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmluIHtcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm9icmVhayB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLm5vYnJlYWsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5hbGluaGFtZW50byB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG5cclxuIiwiLmNvdmVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvdmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLmF0cmlidXRvcy1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkYWQ5O1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMgPiBkaXYgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4uYXRyaWJ1dG9zLWRldGFpbHMge1xuICBwYWRkaW5nOiAwIDFlbSAxZW0gMWVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZGFkOTtcbiAgbWFyZ2luOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmF0cmlidXRvcy1kZXRhaWxzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZmZmZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLmRhbmdlciB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubm9icmVhayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvcm0ge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICB9XG5cbiAgLm5vYnJlYWsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5hbGluaGFtZW50byB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fichamodelo/fichamodelo.page.ts":
/*!*************************************************!*\
  !*** ./src/app/fichamodelo/fichamodelo.page.ts ***!
  \*************************************************/
/*! exports provided: FichamodeloPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichamodeloPage", function() { return FichamodeloPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/rpg.config */ "./src/app/config/rpg.config.ts");
/* harmony import */ var _services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fichas/ficha-modelo.service */ "./src/app/services/fichas/ficha-modelo.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");








var FichamodeloPage = /** @class */ (function () {
    function FichamodeloPage(formBuilder, fmService, alertCtrl, router, paginaService) {
        this.formBuilder = formBuilder;
        this.fmService = fmService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.paginaService = paginaService;
        this.abaAtual = 'parte1';
        this.atributos = [];
        this.display = { show: false, titulo: 'Title', status: [] };
        this.showHelp = false;
        this.ajudaTemplate = "Exibir Ajuda";
        this.showAtributos = true;
        this.iconTable = 'pi pi-minus';
        this.displayForm = false;
        this.listDisplay = false;
        this.paginaAtual = 0;
        this.loading = false;
        this.formAtributo = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descricao: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bonus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            nivel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            imgURL: ['']
        });
        this.formModelo = this.formBuilder.group({
            tipoRPG: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            xpAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            xpPra: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            pvAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            pvTotal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            pmAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            pmTotal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            karmaAtual: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$')]],
            nomeFichaModelo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.tipoRPG = [
            {
                label: 'Selecione', value: null
            },
            {
                label: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoArrayRPG"][0], value: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoRPG"].MedievalRPG
            },
            {
                label: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoArrayRPG"][1], value: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoRPG"].CyberpunkRPG
            },
            {
                label: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoArrayRPG"][2], value: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoRPG"].SteampunkRPG
            },
            {
                label: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoArrayRPG"][3], value: _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoRPG"].HorrorRPG
            }
        ];
        this.selectedRPG = _config_rpg_config__WEBPACK_IMPORTED_MODULE_3__["tipoRPG"][0];
    }
    FichamodeloPage.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                alert = this.alertCtrl.create({
                    backdropDismiss: true,
                });
                return [2 /*return*/];
            });
        });
    };
    FichamodeloPage.prototype.salvar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var fm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading = true;
                fm = {
                    atributos: this.atributos,
                    tipoRPG: this.formModelo.get('tipoRPG').value,
                    karmaAtual: this.formModelo.get('karmaAtual').value,
                    karmaTotal: 100,
                    pmAtual: this.formModelo.get('pmAtual').value,
                    pmTotal: this.formModelo.get('pmTotal').value,
                    pvAtual: this.formModelo.get('pvAtual').value,
                    pvTotal: this.formModelo.get('pvTotal').value,
                    xpAtual: this.formModelo.get('xpAtual').value,
                    xpPra: this.formModelo.get('xpPra').value,
                    nomeFichaModelo: this.formModelo.get('nomeFichaModelo').value,
                };
                this.fmService.insert(fm)
                    .subscribe(function (res) { _this.loading = false, _this.showOk(res.id), console.log(res); }, function (error) { _this.loading = false, console.log(error); });
                return [2 /*return*/];
            });
        });
    };
    FichamodeloPage.prototype.showDialog = function (titulo, opcao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.display = {
                    show: true,
                    titulo: titulo,
                    status: ['Nome', 'Descrição', 'Nível Inicial', 'Bónus Inicial', 'URL imagem']
                };
                this.opcao = opcao;
                return [2 /*return*/];
            });
        });
    };
    FichamodeloPage.prototype.add = function () {
        this.atributos.push(this.formAtributo.value);
        this.cancelAtributo();
    };
    FichamodeloPage.prototype.cancelAtributo = function () {
        this.display.show = false;
        this.formAtributo.get('nome').setValue('');
        this.formAtributo.get('descricao').setValue('');
        this.formAtributo.get('bonus').setValue('');
        this.formAtributo.get('nivel').setValue('');
        this.formAtributo.get('imgURL').setValue('');
    };
    FichamodeloPage.prototype.minimizar = function () {
        this.showAtributos = !this.showAtributos;
        if (this.showAtributos) {
            this.iconTable = "pi pi-minus";
        }
        else {
            this.iconTable = "pi pi-plus";
        }
    };
    FichamodeloPage.prototype.getAjuda = function () {
        this.showHelp = !this.showHelp;
        if (this.showHelp) {
            this.ajudaTemplate = "Fechar Ajuda";
        }
        else {
            this.ajudaTemplate = "Exibir Ajuda";
        }
    };
    FichamodeloPage.prototype.ngOnInit = function () {
    };
    FichamodeloPage.prototype.getAtributos = function () {
        return this.atributos;
    };
    FichamodeloPage.prototype.atributoNivel = function (atributo, opcao) {
        if (opcao) {
            atributo.nivel++;
        }
        else {
            atributo.nivel--;
        }
    };
    FichamodeloPage.prototype.atributoBonus = function (atributo, opcao) {
        if (opcao) {
            atributo.bonus++;
        }
        else {
            atributo.bonus--;
        }
    };
    FichamodeloPage.prototype.showOk = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Sucesso!',
                            message: 'Seu modelo foi criado com sucesso! ' + id,
                            backdropDismiss: false,
                            buttons: [
                                {
                                    text: 'OK',
                                    handler: function () { _this.copyToClipboard(id), _this.router.navigateByUrl('gercriacoes'); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FichamodeloPage.prototype.copyToClipboard = function (value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = function (e) {
                    e.preventDefault();
                    e.clipboardData.setData('text', (value));
                };
                document.addEventListener('copy', id);
                document.execCommand('copy');
                document.removeEventListener('copy', null);
                return [2 /*return*/];
            });
        });
    };
    FichamodeloPage.prototype.novo = function () {
        this.listDisplay = false;
        if (this.displayForm) {
            this.displayForm = false;
        }
        else {
            this.displayForm = true;
        }
    };
    FichamodeloPage.prototype.consultar = function () {
        //this.toast.clear();
        this.displayForm = false;
        var p = this.fmService.findPageByCriador(this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
        this.listar();
    };
    FichamodeloPage.prototype.listar = function () {
        this.listDisplay = true;
    };
    FichamodeloPage.prototype.destroyList = function () {
        this.listDisplay = false;
    };
    FichamodeloPage.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    FichamodeloPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_4__["FichaModeloService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__["PaginacaoService"] }
    ]; };
    FichamodeloPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fichamodelo',
            template: __webpack_require__(/*! raw-loader!./fichamodelo.page.html */ "./node_modules/raw-loader/index.js!./src/app/fichamodelo/fichamodelo.page.html"),
            styles: [__webpack_require__(/*! ./fichamodelo.page.scss */ "./src/app/fichamodelo/fichamodelo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_fichas_ficha_modelo_service__WEBPACK_IMPORTED_MODULE_4__["FichaModeloService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_7__["PaginacaoService"]])
    ], FichamodeloPage);
    return FichamodeloPage;
}());



/***/ }),

/***/ "./src/app/services/fichas/ficha-modelo.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/fichas/ficha-modelo.service.ts ***!
  \*********************************************************/
/*! exports provided: FichaModeloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaModeloService", function() { return FichaModeloService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");





var FichaModeloService = /** @class */ (function () {
    function FichaModeloService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    FichaModeloService.prototype.findFichaModeloById = function (id) {
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "fichamodelo/" + id, {
            responseType: 'json',
            observe: "body"
        });
    };
    FichaModeloService.prototype.insert = function (dto) {
        dto.idCriador = this.storage.getLocalUserId();
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "fichamodelo", dto);
    };
    FichaModeloService.prototype.findPageByCriador = function (page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '10'; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idCriador', this.storage.getLocalUserId())
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_3__["API_CONFIG"].baseUrl + "fichamodelo/criador", {
            params: params,
            observe: 'body',
        });
    };
    FichaModeloService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    FichaModeloService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
    ], FichaModeloService);
    return FichaModeloService;
}());



/***/ })

}]);
//# sourceMappingURL=fichamodelo-fichamodelo-module-es5.js.map