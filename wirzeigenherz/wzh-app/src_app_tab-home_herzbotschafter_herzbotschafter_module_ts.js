"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-home_herzbotschafter_herzbotschafter_module_ts"],{

/***/ 3718:
/*!****************************************************************************!*\
  !*** ./src/app/tab-home/herzbotschafter/herzbotschafter-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerzbotschafterPageRoutingModule": () => (/* binding */ HerzbotschafterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _herzbotschafter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herzbotschafter.page */ 3020);




const routes = [
    {
        path: '',
        component: _herzbotschafter_page__WEBPACK_IMPORTED_MODULE_0__.HerzbotschafterPage
    }
];
let HerzbotschafterPageRoutingModule = class HerzbotschafterPageRoutingModule {
};
HerzbotschafterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HerzbotschafterPageRoutingModule);



/***/ }),

/***/ 1930:
/*!********************************************************************!*\
  !*** ./src/app/tab-home/herzbotschafter/herzbotschafter.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerzbotschafterPageModule": () => (/* binding */ HerzbotschafterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _herzbotschafter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herzbotschafter-routing.module */ 3718);
/* harmony import */ var _herzbotschafter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./herzbotschafter.page */ 3020);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/action-button/action-button.module */ 7111);









let HerzbotschafterPageModule = class HerzbotschafterPageModule {
};
HerzbotschafterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _herzbotschafter_routing_module__WEBPACK_IMPORTED_MODULE_0__.HerzbotschafterPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__.ActionButtonModule
        ],
        declarations: [_herzbotschafter_page__WEBPACK_IMPORTED_MODULE_1__.HerzbotschafterPage]
    })
], HerzbotschafterPageModule);



/***/ }),

/***/ 3020:
/*!******************************************************************!*\
  !*** ./src/app/tab-home/herzbotschafter/herzbotschafter.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HerzbotschafterPage": () => (/* binding */ HerzbotschafterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _herzbotschafter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./herzbotschafter.page.html?ngResource */ 1057);
/* harmony import */ var _herzbotschafter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./herzbotschafter.page.scss?ngResource */ 5022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 8921);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/i18n/en.json */ 502);
/* harmony import */ var _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/i18n/de.json */ 3634);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 7514);









let HerzbotschafterPage = class HerzbotschafterPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(translateService, navCtrl) {
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.language = this.translateService.currentLang;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onClose() {
        this.navCtrl.navigateBack("/tabs/tab-home");
    }
    // ----------------------------------------------------------------------------------------------
    shareVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const lang = this.language === "de" ? _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_4__ : _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__;
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                title: 'Wir Zeigen Herz',
                text: lang.explainPage.copyMessage,
                url: lang.explainPage.videoLink,
                dialogTitle: lang.explainPage.shareMsg,
            });
        });
    }
};
HerzbotschafterPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
HerzbotschafterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-herzbotschafter',
        template: _herzbotschafter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_herzbotschafter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HerzbotschafterPage);



/***/ }),

/***/ 5022:
/*!*******************************************************************************!*\
  !*** ./src/app/tab-home/herzbotschafter/herzbotschafter.page.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "ion-fab-button {\n  --box-shadow: none;\n  border-radius: 9999px;\n  --background: rgba(30, 32, 35, 0.4);\n}\nion-fab-button ion-icon {\n  color: var(--ion-color-light);\n}\n.img-container {\n  background: url(\"/assets/imgs/football.jpg\");\n  padding: 2rem;\n  text-align: center;\n}\n.img-container h4 {\n  text-align: center;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin: 3rem 0 0;\n  color: var(--ion-color-light);\n}\n.img-container p {\n  text-align: center;\n  font-size: 1.05rem;\n  color: var(--ion-color-light);\n  white-space: pre-line;\n}\n.img-container .feature-col {\n  padding-bottom: 1.5rem;\n  margin-top: 1.5rem;\n}\n.img-container .feature-col ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 4rem;\n  margin-top: 2rem;\n}\n.img-container .feature-col h6 {\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin-top: 1rem;\n}\n.img-container .feature-col p {\n  margin-top: 0.5rem;\n  text-align: center;\n}\n.img-container img {\n  border-radius: 20px;\n  aspect-ratio: 1;\n  margin: 2rem 0;\n  margin-left: -6px;\n}\n.img-container .mt {\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcnpib3RzY2hhZnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUVFO0VBQ0UsNkJBQUE7QUFBSjtBQUtBO0VBQ0UsNENBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7QUFIRjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUpKO0FBT0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUxKO0FBUUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFPSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTE47QUFRSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVJOO0FBY0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWRKIiwiZmlsZSI6Imhlcnpib3RzY2hhZnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbntcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgzMCwgMzIsIDM1LCAwLjQpO1xuICAvL2JhY2tncm91bmQ6ICMxZTIwMjM7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG5cblxuLmltZy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZ3MvZm9vdGJhbGwuanBnXCIpO1xuICBwYWRkaW5nOiAycmVtO1xuICAvL21hcmdpbi10b3A6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuXG4gIGg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogM3JlbSAwIDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cblxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgfVxuXG4gIC5mZWF0dXJlLWNvbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICB9XG4gICAgaDYge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAgIH1cblxuICAgIHAge1xuICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG5cbiAgfVxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgLy9wYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICB9XG5cbiAgLm10IHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIH1cblxufVxuXG4iXX0= */";

/***/ }),

/***/ 1057:
/*!*******************************************************************************!*\
  !*** ./src/app/tab-home/herzbotschafter/herzbotschafter.page.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"onClose()\">\n      <ion-icon name=\"close\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div class=\"img-container\">\n    <h4>{{'ambassadorPage.title' | translate}}</h4>\n    <p>{{'ambassadorPage.weAreThere' | translate}}</p>\n\n    <ion-col class=\"feature-col\">\n      <ion-icon name=\"diamond\"></ion-icon>\n\n      <h6>{{\"ambassadorPage.featureTitle1\" | translate}}</h6>\n      <p>{{\"ambassadorPage.featureDesc1\" | translate}}</p>\n      <ion-icon name=\"accessibility\"></ion-icon>\n      <h6>{{\"ambassadorPage.featureTitle2\" | translate}}</h6>\n      <p>{{\"ambassadorPage.featureDesc2\" | translate}}</p>\n      <ion-icon name=\"heart\"></ion-icon>\n\n      <h6>{{\"ambassadorPage.featureTitle3\" | translate}}</h6>\n      <p>{{\"ambassadorPage.featureDesc3\" | translate}}</p>\n    </ion-col>\n\n    <img class=\"original\" src=\"/assets/imgs/wir-sind-dabei.jpg\" alt=\"\">\n    <p class=\"mt\">{{'ambassadorPage.weAreThere2' | translate}}</p>\n    <app-action-button [text]=\"'ambassadorPage.shareBtn' | translate\" (click)=\"shareVideo()\"></app-action-button>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-home_herzbotschafter_herzbotschafter_module_ts.js.map