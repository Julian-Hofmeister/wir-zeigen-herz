"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_shared_slider_slider_module_ts"],{

/***/ 5091:
/*!********************************************************!*\
  !*** ./src/app/shared/slider/slider-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPageRoutingModule": () => (/* binding */ SliderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.page */ 1920);




const routes = [
    {
        path: '',
        component: _slider_page__WEBPACK_IMPORTED_MODULE_0__.SliderPage
    }
];
let SliderPageRoutingModule = class SliderPageRoutingModule {
};
SliderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SliderPageRoutingModule);



/***/ }),

/***/ 8888:
/*!************************************************!*\
  !*** ./src/app/shared/slider/slider.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPageModule": () => (/* binding */ SliderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _slider_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider-routing.module */ 5091);
/* harmony import */ var _slider_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.page */ 1920);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-button/action-button.module */ 7111);









let SliderPageModule = class SliderPageModule {
};
SliderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _slider_routing_module__WEBPACK_IMPORTED_MODULE_0__.SliderPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__.ActionButtonModule
        ],
        declarations: [_slider_page__WEBPACK_IMPORTED_MODULE_1__.SliderPage]
    })
], SliderPageModule);



/***/ }),

/***/ 1920:
/*!**********************************************!*\
  !*** ./src/app/shared/slider/slider.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderPage": () => (/* binding */ SliderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _slider_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.page.html?ngResource */ 7622);
/* harmony import */ var _slider_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider.page.scss?ngResource */ 4695);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 8921);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/i18n/en.json */ 502);
/* harmony import */ var _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/i18n/de.json */ 3634);









let SliderPage = class SliderPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(navCtrl, translateService) {
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
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
    shareMessage() {
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
    // ----------------------------------------------------------------------------------------------
    onClose() {
        this.navCtrl.navigateBack("/tabs/tab-home");
    }
    // ----------------------------------------------------------------------------------------------
    nextPage(slide) {
        slide.slideNext();
    }
};
SliderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
SliderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-slider',
        template: _slider_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_slider_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SliderPage);



/***/ }),

/***/ 4695:
/*!***********************************************************!*\
  !*** ./src/app/shared/slider/slider.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: 100%;\n}\n\n.swipe {\n  animation: blinker 3s linear infinite;\n  color: var(--ion-color-light);\n  position: absolute;\n  bottom: 5rem;\n}\n\n.swipe span {\n  font-size: 2.5rem;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\nion-fab-button {\n  --box-shadow: none;\n  border-radius: 9999px;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;\n  --background: rgba(255, 255, 255, 0.2);\n}\n\nion-fab-button ion-icon {\n  color: var(--ion-color-dark);\n}\n\n.slide1 {\n  background-color: var(--ion-color-primary);\n}\n\n.slide1 h1 {\n  color: var(--ion-color-light);\n}\n\n.slide2 p {\n  margin-bottom: 2rem;\n}\n\n.slide4 p {\n  text-align: start;\n  font-weight: normal;\n  margin-bottom: 1rem;\n}\n\n.slide4 strong {\n  color: var(--ion-color-primary);\n}\n\nh1 {\n  font-family: \"Poppins\", serif;\n  font-size: 1.8rem;\n  text-transform: none;\n  margin: 0 2rem;\n}\n\np {\n  font-family: \"Poppins\", serif;\n  font-size: 1rem;\n  text-transform: none;\n  margin: 0 2rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtBQUNKOztBQUdBO0VBQ0U7SUFBTSxVQUFBO0VBQ047QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBQUU7RUFDRSw0QkFBQTtBQUVKOztBQUdBO0VBQ0UsMENBQUE7QUFBRjs7QUFFRTtFQUNFLDZCQUFBO0FBQUo7O0FBTUU7RUFDRSxtQkFBQTtBQUhKOztBQVNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUU7RUFDRSwrQkFBQTtBQU5KOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFQRiIsImZpbGUiOiJzbGlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnN3aXBlIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cmVtO1xuXG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDUwJSB7IG9wYWNpdHk6IDA7IH1cbn1cblxuaW9uLWZhYi1idXR0b257XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDJweCA4cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgfVxufVxuXG5cbi5zbGlkZTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgaDEge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG5cbn1cblxuLnNsaWRlMiB7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cblxuXG4uc2xpZGU0IHtcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG4gIHN0cm9uZyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxuICB9XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW46IDAgMnJlbTtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1hcmdpbjogMCAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl19 */";

/***/ }),

/***/ 7622:
/*!***********************************************************!*\
  !*** ./src/app/shared/slider/slider.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\"\n        rel=\"stylesheet\"/>\n\n  <ion-fab slot=\"fixed\" vertical=\"top\" horizontal=\"start\">\n    <ion-fab-button (click)=\"onClose()\">\n      <ion-icon name=\"close\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" #slides >\n    <ion-slide class=\"slide1\" (click)=\"nextPage(slides)\">\n        <h1>{{\"explainPage.mainHeadline\" | translate}}</h1>\n      <div class=\"swipe\">\n        <span class=\"material-icons-outlined\">touch_app</span>\n        <p>{{\"explainPage.swipe\" | translate}}</p>\n      </div>\n    </ion-slide>\n    <ion-slide class=\"slide2\" (click)=\"nextPage(slides)\">\n      <ion-col>\n        <p>{{\"explainPage.firstStep\" | translate}}</p>\n        <app-action-button (click)=\"shareMessage()\" [text]=\"'explainPage.shareBtn' | translate\"></app-action-button>\n      </ion-col>\n    </ion-slide>\n    <ion-slide class=\"slide3\" (click)=\"nextPage(slides)\">\n      <p>{{\"explainPage.secondStep\" | translate}}</p>\n    </ion-slide>\n    <ion-slide class=\"slide4\" (click)=\"nextPage(slides)\">\n      <ion-col>\n        <p><strong>{{\"explainPage.broadcastAndroid\" | translate}}</strong></p>\n        <p>{{\"explainPage.android1\" | translate}}</p>\n        <p>{{\"explainPage.android2\" | translate}}</p>\n        <p>{{\"explainPage.android3\" | translate}}</p>\n        <p>{{\"explainPage.android4\" | translate}}</p>\n      </ion-col>\n    </ion-slide>\n    <ion-slide class=\"slide4\" (click)=\"nextPage(slides)\">\n      <ion-col>\n        <p><strong>{{\"explainPage.broadcastIos\" | translate}}</strong></p>\n        <p>{{\"explainPage.ios1\" | translate}}</p>\n        <p>{{\"explainPage.ios2\" | translate}}</p>\n        <p>{{\"explainPage.ios3\" | translate}}</p>\n        <p>{{\"explainPage.ios4\" | translate}}</p>\n      </ion-col>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_shared_slider_slider_module_ts.js.map