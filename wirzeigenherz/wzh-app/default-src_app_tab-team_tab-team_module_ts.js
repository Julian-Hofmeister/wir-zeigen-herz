"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_tab-team_tab-team_module_ts"],{

/***/ 1018:
/*!*****************************************************!*\
  !*** ./src/app/tab-team/tab-team-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTeamPageRoutingModule": () => (/* binding */ TabTeamPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_team_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-team.page */ 1832);




const routes = [
    {
        path: '',
        component: _tab_team_page__WEBPACK_IMPORTED_MODULE_0__.TabTeamPage
    }
];
let TabTeamPageRoutingModule = class TabTeamPageRoutingModule {
};
TabTeamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabTeamPageRoutingModule);



/***/ }),

/***/ 2319:
/*!*********************************************!*\
  !*** ./src/app/tab-team/tab-team.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTeamPageModule": () => (/* binding */ TabTeamPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_team_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-team-routing.module */ 1018);
/* harmony import */ var _tab_team_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-team.page */ 1832);
/* harmony import */ var _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-card/team-card.component */ 9677);
/* harmony import */ var _tab_projects_tab_projects_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab-projects/tab-projects.module */ 8202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ 6747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);












let TabTeamPageModule = class TabTeamPageModule {
};
TabTeamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tab_team_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabTeamPageRoutingModule,
            _tab_projects_tab_projects_module__WEBPACK_IMPORTED_MODULE_3__.TabProjectsPageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_4__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            })
        ],
        declarations: [_tab_team_page__WEBPACK_IMPORTED_MODULE_1__.TabTeamPage, _team_card_team_card_component__WEBPACK_IMPORTED_MODULE_2__.TeamCardComponent]
    })
], TabTeamPageModule);



/***/ }),

/***/ 1832:
/*!*******************************************!*\
  !*** ./src/app/tab-team/tab-team.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabTeamPage": () => (/* binding */ TabTeamPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_team_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-team.page.html?ngResource */ 3731);
/* harmony import */ var _tab_team_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-team.page.scss?ngResource */ 1837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/i18n/de.json */ 3634);
/* harmony import */ var src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/i18n/en.json */ 502);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let TabTeamPage = class TabTeamPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(translateService, navCtrl) {
        this.translateService = translateService;
        this.navCtrl = navCtrl;
        this.language = this.translateService.currentLang;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        if (this.language === "en") {
            this.members = src_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_3__.teamPage.members;
        }
        else {
            this.members = src_assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_2__.teamPage.members;
        }
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
};
TabTeamPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
TabTeamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab-team',
        template: _tab_team_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_team_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabTeamPage);



/***/ }),

/***/ 9677:
/*!***********************************************************!*\
  !*** ./src/app/tab-team/team-card/team-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamCardComponent": () => (/* binding */ TeamCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _team_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-card.component.html?ngResource */ 936);
/* harmony import */ var _team_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./team-card.component.scss?ngResource */ 9801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let TeamCardComponent = class TeamCardComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor() {
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
};
TeamCardComponent.ctorParameters = () => [];
TeamCardComponent.propDecorators = {
    member: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
TeamCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-team-card',
        template: _team_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_team_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TeamCardComponent);



/***/ }),

/***/ 1837:
/*!********************************************************!*\
  !*** ./src/app/tab-team/tab-team.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-fab-button {\n  --box-shadow: none;\n  border-radius: 9999px;\n  box-shadow: rgba(149, 157, 165, 0.5) 0px 2px 8px;\n  --background: rgba(255, 255, 255, 0.4);\n}\nion-fab-button ion-icon {\n  color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi10ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtFQUNBLHNDQUFBO0FBQ0Y7QUFFRTtFQUNFLDRCQUFBO0FBQUoiLCJmaWxlIjoidGFiLXRlYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b257XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuNSkgMHB4IDJweCA4cHg7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cbn1cblxuIl19 */";

/***/ }),

/***/ 9801:
/*!************************************************************************!*\
  !*** ./src/app/tab-team/team-card/team-card.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".team-card {\n  text-align: start;\n  border-radius: 40px;\n  background-color: white;\n  margin: 0.8rem;\n  margin-bottom: 1.2rem;\n  padding: 0;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 0px 12px;\n}\n.team-card img {\n  border-radius: 40px 40px 0 0;\n  object-fit: cover;\n  max-height: 100%;\n  width: 100%;\n}\n.content-col {\n  padding: 1rem;\n}\nh3 {\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n}\np {\n  font-weight: 400;\n  font-family: \"Lato\", serif;\n  word-break: break-word;\n  white-space: pre-line;\n  overflow-wrap: break-word;\n  -ms-word-break: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n  margin-top: 0;\n}\n.subtitle {\n  font-weight: 600;\n  color: var(--ion-color-dark);\n  font-size: 0.9rem;\n}\na {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  justify-content: center;\n}\na ion-icon {\n  font-size: 1.5rem !important;\n  color: var(--ion-color-primary);\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n}\na p {\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n}\n.main-row {\n  flex-direction: column;\n}\n.link-row {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYW0tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtBQUNGO0FBRUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFJQTtFQUNBLGFBQUE7QUFEQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUhGO0FBS0U7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBTUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSko7QUFXQTtFQUNFLHNCQUFBO0FBUkY7QUFXQTtFQUNFLHlCQUFBO0FBUkYiLCJmaWxlIjoidGVhbS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tY2FyZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDBweCAxMnB4O1xuXG5cbiAgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDQwcHggMCAwO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmNvbnRlbnQtY29se1xucGFkZGluZzogMXJlbTtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2VyaWY7XG4gIC8vdGV4dC1hbGlnbjpqdXN0aWZ5O1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC1tcy13b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIC8vZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5hIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cblxuICB9XG59XG5cblxuLm1haW4tcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpbmstcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3731:
/*!********************************************************!*\
  !*** ./src/app/tab-team/tab-team.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-header>-->\n<!--  <ion-toolbar>-->\n<!--    <ion-title>tab-team</ion-title>-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n\n\n\n<ion-content>\n  <ion-fab  vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button  (click)=\"onClose()\">\n      <ion-icon name=\"close\" size=\"large\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"center-horizontal \">\n        <app-page-header [title]=\"'teamPage.pageName' | translate\"></app-page-header>\n\n          <ion-list *ngFor=\"let member of members\">\n            <app-team-card [member]=\"member\"></app-team-card>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 936:
/*!************************************************************************!*\
  !*** ./src/app/tab-team/team-card/team-card.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"team-card\">\n  <ion-row class=\"main-row\">\n      <img [src]=\"member.img\" alt=\"\">\n    <ion-col size=\"12\" class=\"content-col\">\n      <h3>{{member.name}}</h3>\n      <p class=\"subtitle\">{{member.subtitle}}</p>\n      <p>{{member.description}}</p>\n      <ion-row class=\"link-row\">\n        <a  *ngIf=\"member.mail\" href=\"mailto:{{member.mail}}\">\n          <p>{{\"teamPage.teamCardBtnText\" | translate}}</p>\n<!--          <span class=\"material-icons-outlined\">mail</span>-->\n          <ion-icon name=\"mail-outline\"></ion-icon>\n        </a>\n<!--        <a *ngIf=\"member.website\" href=\"{{member.website}}\">-->\n<!--          <span class=\"material-icons-outlined\">public</span>-->\n<!--          <p>Webseite</p>-->\n<!--        </a>-->\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_tab-team_tab-team_module_ts.js.map