(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~germesas-germesas-module~teste-teste-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/invitation-form/invitation-form.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/invitation-form/invitation-form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog [visible]=\"display.show\" [modal]=\"true\" [draggable]=\"false\" [focusTrap]=\"true\" [closable]=\"false\">\r\n  <p-header>\r\n    {{ display.titulo }}\r\n  </p-header>\r\n\r\n    <p-radioButton name=\"groupname\" [value]=\"0\" label=\"Código do mestre\" [(ngModel)]=\"opcao\"\r\n      [ngModelOptions]=\"{standalone: true}\">\r\n    </p-radioButton><br><br>\r\n    <p-radioButton name=\"groupname\" [value]=\"1\" label=\"Email do mestre\" [(ngModel)]=\"opcao\"\r\n      [ngModelOptions]=\"{standalone: true}\">\r\n    </p-radioButton><br><br>\r\n    <p-radioButton name=\"groupname\" [value]=\"2\" label=\"Código da mesa\" [(ngModel)]=\"opcao\"\r\n      [ngModelOptions]=\"{standalone: true}\"></p-radioButton><br>\r\n\r\n\r\n  <input style=\"margin-top: 15px;\" type=\"text\" pInputText [placeholder]=\"display.status\" [(ngModel)]=\"value\"\r\n  [ngModelOptions]=\"{standalone: true}\">\r\n  <p-footer>\r\n    <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-times-circle\" class=\"ui-button-danger\"\r\n      (click)=\"cancel()\"></button>\r\n    <button style=\"width: 30%;\" pButton type=\"button\" icon=\"pi pi-check-circle\" class=\"ui-button-success\"\r\n      (click)=\"send()\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<app-load-spinner [loading]=\"loading\"></app-load-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/nova-mesa/nova-mesa.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/criacoes/nova-mesa/nova-mesa.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n  <ion-col>\r\n    <ion-select (ionChange)=\"atualiza($event)\" placeholder=\"Tipo de RPG\">\r\n      <ion-select-option value=\"0\">Medieval</ion-select-option>\r\n      <ion-select-option value=\"1\">Cyberpunk</ion-select-option>\r\n      <ion-select-option value=\"2\">Steampunk</ion-select-option>\r\n      <ion-select-option value=\"3\">Horror</ion-select-option>\r\n    </ion-select>\r\n  </ion-col>\r\n  <ion-col>\r\n\r\n    <ion-button (click)=\"consultar()\">Listar</ion-button>\r\n\r\n  </ion-col>\r\n</ion-row>\r\n<ng-container *ngIf=\"flag\">\r\n  <app-paginacao [emptyMessage]=\"'Não foi encontrado nenhum item'\" [paginaAtual]=\"paginaAtual\"\r\n    (notifyParent)=\"getNotification($event)\" [add]=\"true\" (getSelectedObj)=\"getSelectedObj($event)\" [id]=\"'idRpg'\"\r\n    [nome]=\"'nome'\" [descricao]=\"'descricao'\" [tipo]=\"'tipoRPG'\" [imgURL]=\"'imgURL'\"></app-paginacao>\r\n</ng-container>\r\n<ion-button color=\"danger\" expand=\"block\" fill=\"solid\" (click)=\"close()\">Fechar</ion-button>\r\n\r\n<p-toast position=\"center\" key=\"c\" (onClose)=\"onReject()\" [baseZIndex]=\"5000\">\r\n  <ng-template pTemplate=\"message\">\r\n    <div style=\"text-align: center\">\r\n      <i class=\"pi pi-exclamation-triangle\" style=\"font-size: 3em\"></i>\r\n      <h3>Deseja mesmo criar uma nova mesa?</h3>\r\n      <p>Confirme</p>\r\n    </div>\r\n    <div class=\"ui-g ui-fluid\">\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onConfirm()\" label=\"Sim\" class=\"ui-button-success\"></button>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <button type=\"button\" pButton (click)=\"onReject()\" label=\"Não\" class=\"ui-button-secondary\"></button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</p-toast>"

/***/ }),

/***/ "./src/app/components/criacoes/invitation-form.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/criacoes/invitation-form.module.ts ***!
  \***************************************************************/
/*! exports provided: InvitationFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationFormModule", function() { return InvitationFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invitation_form_invitation_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invitation-form/invitation-form.component */ "./src/app/components/criacoes/invitation-form/invitation-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm5/primeng-dialog.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/fesm5/primeng-radiobutton.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm5/primeng-inputtext.js");











var InvitationFormModule = /** @class */ (function () {
    function InvitationFormModule() {
    }
    InvitationFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_invitation_form_invitation_form_component__WEBPACK_IMPORTED_MODULE_3__["InvitationFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"]
            ],
            entryComponents: [_invitation_form_invitation_form_component__WEBPACK_IMPORTED_MODULE_3__["InvitationFormComponent"]],
            exports: [_invitation_form_invitation_form_component__WEBPACK_IMPORTED_MODULE_3__["InvitationFormComponent"]]
        })
    ], InvitationFormModule);
    return InvitationFormModule;
}());



/***/ }),

/***/ "./src/app/components/criacoes/invitation-form/invitation-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/criacoes/invitation-form/invitation-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvaW52aXRhdGlvbi1mb3JtL2ludml0YXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/criacoes/invitation-form/invitation-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/criacoes/invitation-form/invitation-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: InvitationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationFormComponent", function() { return InvitationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notify/notify.service */ "./src/app/services/notify/notify.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");





var InvitationFormComponent = /** @class */ (function () {
    function InvitationFormComponent(notify, storage, toastService) {
        this.notify = notify;
        this.storage = storage;
        this.toastService = toastService;
        this.display = { show: false, titulo: 'Title', status: '' };
        this.opcao = 0;
        this.loading = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InvitationFormComponent.prototype.closed = function (msg) {
        if (msg) {
            this.notifyParent.emit('sucesso');
        }
        else {
            this.notifyParent.emit('closed');
        }
    };
    InvitationFormComponent.prototype.ngOnInit = function () {
        this.showDialog("Insira uma das opções abaixo", "Email do mestre, código do mestre ou código da mesa");
    };
    InvitationFormComponent.prototype.showDialog = function (titulo, status) {
        this.display = {
            show: true,
            titulo: titulo,
            status: status
        };
    };
    InvitationFormComponent.prototype.cancel = function () {
        this.display = {
            show: false,
            status: '',
            titulo: ''
        };
        this.closed();
    };
    InvitationFormComponent.prototype.send = function () {
        var _this = this;
        this.display = {
            show: false,
            status: '',
            titulo: ''
        };
        this.loading = true;
        var idMestre, emailMestre, idMesa;
        switch (this.opcao) {
            case 0:
                idMestre = this.value;
                break;
            case 1:
                emailMestre = this.value;
                break;
            case 2:
                idMesa = this.value;
                break;
        }
        this.notify.requireInvitation(this.storage.getLocalUserId(), idMestre, emailMestre, idMesa)
            .subscribe(function (res) {
            _this.loading = false;
            _this.closed(true);
        }, function (error) {
            _this.loading = false;
            _this.closed();
        });
    };
    InvitationFormComponent.ctorParameters = function () { return [
        { type: src_app_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('notifyParent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], InvitationFormComponent.prototype, "notifyParent", void 0);
    InvitationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitation-form',
            template: __webpack_require__(/*! raw-loader!./invitation-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/invitation-form/invitation-form.component.html"),
            styles: [__webpack_require__(/*! ./invitation-form.component.scss */ "./src/app/components/criacoes/invitation-form/invitation-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notify_notify_service__WEBPACK_IMPORTED_MODULE_2__["NotifyService"], src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], InvitationFormComponent);
    return InvitationFormComponent;
}());



/***/ }),

/***/ "./src/app/components/criacoes/nova-mesa.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/criacoes/nova-mesa.module.ts ***!
  \*********************************************************/
/*! exports provided: NovaMesaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaMesaModule", function() { return NovaMesaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/paginacao/paginacao.module */ "./src/app/components/utils/paginacao/paginacao.module.ts");
/* harmony import */ var _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/load-spinner/load-spinner.module */ "./src/app/components/utils/load-spinner/load-spinner.module.ts");
/* harmony import */ var _nova_mesa_nova_mesa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nova-mesa/nova-mesa.component */ "./src/app/components/criacoes/nova-mesa/nova-mesa.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm5/primeng-toast.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm5/primeng-button.js");











var NovaMesaModule = /** @class */ (function () {
    function NovaMesaModule() {
    }
    NovaMesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nova_mesa_nova_mesa_component__WEBPACK_IMPORTED_MODULE_7__["NovaMesaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _utils_load_spinner_load_spinner_module__WEBPACK_IMPORTED_MODULE_6__["LoadSpinnerModule"],
                _utils_paginacao_paginacao_module__WEBPACK_IMPORTED_MODULE_5__["PaginacaoModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_10__["ButtonModule"]
            ],
            entryComponents: [_nova_mesa_nova_mesa_component__WEBPACK_IMPORTED_MODULE_7__["NovaMesaComponent"]],
            exports: [_nova_mesa_nova_mesa_component__WEBPACK_IMPORTED_MODULE_7__["NovaMesaComponent"]],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
            ]
        })
    ], NovaMesaModule);
    return NovaMesaModule;
}());



/***/ }),

/***/ "./src/app/components/criacoes/nova-mesa/nova-mesa.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/criacoes/nova-mesa/nova-mesa.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JpYWNvZXMvbm92YS1tZXNhL25vdmEtbWVzYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/criacoes/nova-mesa/nova-mesa.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/criacoes/nova-mesa/nova-mesa.component.ts ***!
  \**********************************************************************/
/*! exports provided: NovaMesaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovaMesaComponent", function() { return NovaMesaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rpg/rpg.service */ "./src/app/services/rpg/rpg.service.ts");
/* harmony import */ var src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/utils/paginacao.service */ "./src/app/services/utils/paginacao.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mesas/mesas.service */ "./src/app/services/mesas/mesas.service.ts");
/* harmony import */ var src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var NovaMesaComponent = /** @class */ (function () {
    function NovaMesaComponent(rpgService, mesaService, paginaService, toastService, storageService, modalController) {
        this.rpgService = rpgService;
        this.mesaService = mesaService;
        this.paginaService = paginaService;
        this.toastService = toastService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.obj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paginaAtual = 0;
        this.tipoRPG = '0';
        this.flag = false;
        this.cancelOp = true;
    }
    NovaMesaComponent.prototype.ngOnInit = function () {
        //this.consultar();
    };
    NovaMesaComponent.prototype.getSelectedObj = function (evt) {
        this.obj.emit(evt);
        this.idRpg = evt.id;
        this.confirmar();
    };
    NovaMesaComponent.prototype.getNotification = function (evt) {
        if (this.paginaAtual != evt) {
            this.paginaAtual = evt;
            this.consultar();
        }
    };
    NovaMesaComponent.prototype.consultar = function () {
        this.flag = true;
        var p = this.rpgService.findPageByTipoRPG(this.tipoRPG, this.paginaAtual.toString());
        this.paginaService.setPromisse(p);
    };
    NovaMesaComponent.prototype.atualiza = function (event) {
        this.flag = false;
        this.tipoRPG = event.detail.value;
    };
    NovaMesaComponent.prototype.confirmar = function () {
        this.toastService.clear();
        this.toastService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
    };
    NovaMesaComponent.prototype.onConfirm = function () {
        var _this = this;
        var dto = {
            idMestre: this.storageService.getLocalUserId(),
            idSistema: this.idRpg
        };
        this.mesaService.insert(dto)
            .subscribe(function (res) {
            var idMesa = res.idMesa;
            _this.callToast('success', 'Mesa criada com sucesso!', 'Mesa: ' + idMesa);
            _this.modalController.dismiss(true);
        }, function (error) {
        });
    };
    NovaMesaComponent.prototype.onReject = function () {
        this.toastService.clear();
    };
    NovaMesaComponent.prototype.callToast = function (severity, summary, detail) {
        this.toastService.add({
            severity: severity,
            summary: summary,
            detail: detail
        });
    };
    NovaMesaComponent.prototype.close = function () {
        this.modalController.dismiss(false);
    };
    NovaMesaComponent.ctorParameters = function () { return [
        { type: src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"] },
        { type: src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"] },
        { type: src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_3__["PaginacaoService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('obj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NovaMesaComponent.prototype, "obj", void 0);
    NovaMesaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nova-mesa',
            template: __webpack_require__(/*! raw-loader!./nova-mesa.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/criacoes/nova-mesa/nova-mesa.component.html"),
            styles: [__webpack_require__(/*! ./nova-mesa.component.scss */ "./src/app/components/criacoes/nova-mesa/nova-mesa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rpg_rpg_service__WEBPACK_IMPORTED_MODULE_2__["RpgService"],
            src_app_services_mesas_mesas_service__WEBPACK_IMPORTED_MODULE_5__["MesasService"],
            src_app_services_utils_paginacao_service__WEBPACK_IMPORTED_MODULE_3__["PaginacaoService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            src_app_services_storage_service_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], NovaMesaComponent);
    return NovaMesaComponent;
}());



/***/ }),

/***/ "./src/app/services/notify/notify.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notify/notify.service.ts ***!
  \***************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var NotifyService = /** @class */ (function () {
    function NotifyService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    NotifyService.prototype.requireInvitation = function (idJogador, idMestre, mestreEmail, idMesa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('idJogador', idJogador)
            .set('idMestre', idMestre)
            .set('mestreEmail', mestreEmail)
            .set('idMesa', idMesa);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "notify/invitation", {
            params: params,
            observe: 'body',
        });
    };
    NotifyService.prototype.contact = function (dto) {
        dto.email = this.storage.getLocalUser().email;
        console.log(dto);
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "notify/contatoJogador", dto, {
            responseType: 'json',
            observe: 'body'
        });
    };
    NotifyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/services/rpg/rpg.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/rpg/rpg.service.ts ***!
  \*********************************************/
/*! exports provided: RpgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpgService", function() { return RpgService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _storage_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-service.service */ "./src/app/services/storage-service.service.ts");
/* harmony import */ var src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/api.config */ "./src/app/config/api.config.ts");





var RpgService = /** @class */ (function () {
    function RpgService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.newRpg = {
            descricao: undefined,
            historia: undefined,
            idAliados: undefined,
            idCapitulos: undefined,
            idFaccoesBoas: undefined,
            idFaccoesHostis: undefined,
            idFaccoesNeutras: undefined,
            idFichaModelo: undefined,
            idInimigos: undefined,
            idMapas: undefined,
            idNeutros: undefined,
            idSistemas: undefined,
            nome: undefined,
            tipoRPG: undefined,
            imgURL: undefined
        };
    }
    RpgService.prototype.insertInfo = function (obj) {
        this.newRpg.nome = obj.nome;
        this.newRpg.descricao = obj.descricao;
        this.newRpg.historia = obj.historia;
        this.newRpg.tipoRPG = obj.tipoRPG;
        this.newRpg.imgURL = obj.imgURL;
    };
    RpgService.prototype.insertAliados = function (idAliados) {
        this.newRpg.idAliados = idAliados;
    };
    RpgService.prototype.insertInimigos = function (idInimigos) {
        this.newRpg.idInimigos = idInimigos;
    };
    RpgService.prototype.insertNeutros = function (idNeutros) {
        this.newRpg.idNeutros = idNeutros;
    };
    RpgService.prototype.insertFaccoesBoas = function (idFaccoesBoas) {
        this.newRpg.idFaccoesBoas = idFaccoesBoas;
    };
    RpgService.prototype.insertFaccoesNeutras = function (idFaccoesNeutras) {
        this.newRpg.idFaccoesNeutras = idFaccoesNeutras;
    };
    RpgService.prototype.insertFaccoesHostis = function (idFaccoesHostis) {
        this.newRpg.idFaccoesHostis = idFaccoesHostis;
    };
    RpgService.prototype.insertCapitulo = function (idCapitulo) {
        this.newRpg.idCapitulos = idCapitulo;
    };
    RpgService.prototype.insertFichaModelo = function (idFichaModelo) {
        this.newRpg.idFichaModelo = idFichaModelo;
    };
    RpgService.prototype.insertRegras = function (idRegras) {
        this.newRpg.idSistemas = idRegras;
        return this.insert(this.newRpg);
    };
    RpgService.prototype.insertMapas = function (idMapas) {
        this.newRpg.idMapas = idMapas;
    };
    RpgService.prototype.insert = function (obj) {
        return this.http.post(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg", obj, {
            responseType: "json",
            observe: "body"
        });
    };
    RpgService.prototype.check = function () {
        console.log(this.newRpg);
    };
    RpgService.prototype.findPageByTipoRPG = function (tipoRPG, page, linesPerPage) {
        if (page === void 0) { page = '0'; }
        if (linesPerPage === void 0) { linesPerPage = '10'; }
        console.log(tipoRPG);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('tipoRPG', tipoRPG)
            .set('page', page)
            .set('linesPerPage', linesPerPage);
        return this.http.get(src_app_config_api_config__WEBPACK_IMPORTED_MODULE_4__["API_CONFIG"].baseUrl + "rpg/page", {
            params: params,
            observe: 'body',
        });
    };
    RpgService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
    ]; };
    RpgService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _storage_service_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], RpgService);
    return RpgService;
}());



/***/ })

}]);
//# sourceMappingURL=default~germesas-germesas-module~teste-teste-module-es5.js.map