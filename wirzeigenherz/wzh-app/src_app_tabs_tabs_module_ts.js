"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 4167:
/*!*****************************************************************!*\
  !*** ./src/app/shared/explain-modal/explain-modal.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplainModalComponent": () => (/* binding */ ExplainModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explain_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explain-modal.component.html?ngResource */ 672);
/* harmony import */ var _explain_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explain-modal.component.scss?ngResource */ 8214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ExplainModalComponent = class ExplainModalComponent {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, toastController) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
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
        this.modalCtrl.dismiss().then();
    }
    // ----------------------------------------------------------------------------------------------
    copyText() {
        navigator.clipboard.writeText('Hey. Schau dir bitte unbedingt das Video an. Du wirst begeistert sein versprochen. Es geht darum, Gutes zu tun und das ohne Geld zu spenden oder Zeit zu investieren. Also ich bin definitiv dabei. https://vimeo.com/770214670').then(() => {
            this.presentToast().then();
        });
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Nachricht Kopiert',
                duration: 1500,
                position: 'bottom',
                color: 'medium'
            });
            yield toast.present();
        });
    }
};
ExplainModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
ExplainModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-explain-modal',
        template: _explain_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_explain_modal_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ExplainModalComponent);



/***/ }),

/***/ 1792:
/*!**************************************************************!*\
  !*** ./src/app/shared/explain-modal/explain-modal.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplainModalModule": () => (/* binding */ ExplainModalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _explain_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explain-modal.component */ 4167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.module */ 6747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);








let ExplainModalModule = class ExplainModalModule {
};
ExplainModalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_explain_modal_component__WEBPACK_IMPORTED_MODULE_0__.ExplainModalComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_1__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient]
                }
            })
        ],
        exports: [
            _explain_modal_component__WEBPACK_IMPORTED_MODULE_0__.ExplainModalComponent,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        ]
    })
], ExplainModalModule);



/***/ }),

/***/ 8650:
/*!***************************************************************!*\
  !*** ./src/app/shared/partner-card/partner-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerCardComponent": () => (/* binding */ PartnerCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _partner_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-card.component.html?ngResource */ 9077);
/* harmony import */ var _partner_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partner-card.component.scss?ngResource */ 5780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_partner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/partner.service */ 1507);





let PartnerCardComponent = class PartnerCardComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(partnerService) {
        this.partnerService = partnerService;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.logo = "assets/imgs/partner/" + this.partner.logoImg;
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openLink() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.country) {
                return;
            }
            this.link = this.country.value === "germany" ? this.partner.linkDE : this.country.value === "austria" ? this.partner.linkAT : this.country.value === "switzerland" ? this.partner.linkCH : this.partner.linkWW;
            window.open(this.link);
            yield this.partnerService.addPartner(this.partner);
        });
    }
};
PartnerCardComponent.ctorParameters = () => [
    { type: _shared_partner_service__WEBPACK_IMPORTED_MODULE_2__.PartnerService }
];
PartnerCardComponent.propDecorators = {
    partner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    country: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PartnerCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-partner-card',
        template: _partner_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_partner_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PartnerCardComponent);



/***/ }),

/***/ 2725:
/*!************************************************************!*\
  !*** ./src/app/shared/partner-card/partner-card.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartnerCardModule": () => (/* binding */ PartnerCardModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _partner_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partner-card.component */ 8650);





let PartnerCardModule = class PartnerCardModule {
};
PartnerCardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_partner_card_component__WEBPACK_IMPORTED_MODULE_0__.PartnerCardComponent],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule
        ],
        exports: [
            _partner_card_component__WEBPACK_IMPORTED_MODULE_0__.PartnerCardComponent,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule,
        ]
    })
], PartnerCardModule);



/***/ }),

/***/ 537:
/*!***********************************************************!*\
  !*** ./src/app/tab-home/news-card/news-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsCardComponent": () => (/* binding */ NewsCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _news_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-card.component.html?ngResource */ 3698);
/* harmony import */ var _news_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-card.component.scss?ngResource */ 7170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let NewsCardComponent = class NewsCardComponent {
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
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openLink() {
        window.open(this.news.link);
    }
};
NewsCardComponent.ctorParameters = () => [];
NewsCardComponent.propDecorators = {
    news: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
NewsCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-news-card',
        template: _news_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_news_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewsCardComponent);



/***/ }),

/***/ 9293:
/*!*****************************************************!*\
  !*** ./src/app/tab-home/tab-home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePageRoutingModule": () => (/* binding */ TabHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-home.page */ 9567);




const routes = [
    {
        path: '',
        component: _tab_home_page__WEBPACK_IMPORTED_MODULE_0__.TabHomePage
    },
    {
        path: 'ambassador',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab-home_herzbotschafter_herzbotschafter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./herzbotschafter/herzbotschafter.module */ 1930)).then(m => m.HerzbotschafterPageModule)
    }
];
let TabHomePageRoutingModule = class TabHomePageRoutingModule {
};
TabHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabHomePageRoutingModule);



/***/ }),

/***/ 6217:
/*!*********************************************!*\
  !*** ./src/app/tab-home/tab-home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePageModule": () => (/* binding */ TabHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-home-routing.module */ 9293);
/* harmony import */ var _tab_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-home.page */ 9567);
/* harmony import */ var _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/action-button/action-button.module */ 7111);
/* harmony import */ var _tab_projects_tab_projects_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tab-projects/tab-projects.module */ 8202);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ 6747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_explain_modal_explain_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/explain-modal/explain-modal.module */ 1792);
/* harmony import */ var _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-card/news-card.component */ 537);
/* harmony import */ var _shared_partner_card_partner_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/partner-card/partner-card.module */ 2725);















let TabHomePageModule = class TabHomePageModule {
};
TabHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _tab_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabHomePageRoutingModule,
            _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__.ActionButtonModule,
            _shared_partner_card_partner_card_module__WEBPACK_IMPORTED_MODULE_7__.PartnerCardModule,
            _shared_explain_modal_explain_modal_module__WEBPACK_IMPORTED_MODULE_5__.ExplainModalModule,
            _tab_projects_tab_projects_module__WEBPACK_IMPORTED_MODULE_3__.TabProjectsPageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_4__.createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
                }
            })
        ],
        declarations: [_tab_home_page__WEBPACK_IMPORTED_MODULE_1__.TabHomePage, _news_card_news_card_component__WEBPACK_IMPORTED_MODULE_6__.NewsCardComponent]
    })
], TabHomePageModule);



/***/ }),

/***/ 9567:
/*!*******************************************!*\
  !*** ./src/app/tab-home/tab-home.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePage": () => (/* binding */ TabHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-home.page.html?ngResource */ 2394);
/* harmony import */ var _tab_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-home.page.scss?ngResource */ 9571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/i18n/en.json */ 502);
/* harmony import */ var _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/i18n/de.json */ 3634);
/* harmony import */ var _shared_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/partner.service */ 1507);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 5191);










let TabHomePage = class TabHomePage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(modalCtrl, toastController, translateService, partnerService) {
        this.modalCtrl = modalCtrl;
        this.toastController = toastController;
        this.translateService = translateService;
        this.partnerService = partnerService;
        this.language = this.translateService.currentLang;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.latestPartner = this.partnerService.getLatestPartner();
        this.questionsDE = _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_3__.homePage.QA;
        this.questionsEN = _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_2__.homePage.QA;
        this.getCountry().then();
    }
    ionViewWillEnter() {
        this.getCountry().then();
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    // ----------------------------------------------------------------------------------------------
    switchLanguage() {
        const lang = this.translateService.currentLang === "en" ? "de" : "en";
        this.translateService.use(lang);
        this.language = this.translateService.currentLang;
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    getCountry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({ key: 'country' }).then((country) => {
                if (country.value) {
                    this.country = JSON.parse(country.value);
                }
            });
        });
    }
};
TabHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _shared_partner_service__WEBPACK_IMPORTED_MODULE_4__.PartnerService }
];
TabHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab-home',
        template: _tab_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabHomePage);



/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab-projects',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../tab-projects/tab-projects.module */ 8202)).then(m => m.TabProjectsPageModule)
            },
            {
                path: 'tab-partner',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab-partner_tab-partner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab-partner/tab-partner.module */ 48)).then(m => m.TabPartnerPageModule)
            },
            {
                path: 'tab-home',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../tab-home/tab-home.module */ 6217)).then(m => m.TabHomePageModule)
            },
            {
                path: 'tab-team',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_tab-team_tab-team_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tab-team/tab-team.module */ 2319)).then(m => m.TabTeamPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab-home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _tab_home_tab_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab-home/tab-home.module */ 6217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/action-button/action-button.module */ 7111);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);











let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _tab_home_tab_home_module__WEBPACK_IMPORTED_MODULE_2__.TabHomePageModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__.ActionButtonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);





let TabsPage = class TabsPage {
    //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(fireauth) {
        this.fireauth = fireauth;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 8214:
/*!******************************************************************************!*\
  !*** ./src/app/shared/explain-modal/explain-modal.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  padding: 0;\n  margin: 0;\n}\n\np {\n  color: var(--ion-color-dark-tint);\n  line-height: 1.5rem;\n}\n\nion-toolbar {\n  padding-left: 1rem;\n  padding-right: 0.5rem;\n}\n\n.content-col {\n  margin: 1rem;\n}\n\n.content-col h2 {\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.content-col p {\n  margin-top: 1rem;\n}\n\n.content-col strong {\n  color: var(--ion-color-primary);\n  margin-top: 1.5rem;\n}\n\n.content-col .share {\n  position: relative;\n  background-color: var(--ion-color-primary);\n  border-radius: 20px;\n  padding: 1rem;\n  margin: 1rem 0;\n}\n\n.content-col .share span {\n  color: var(--ion-color-light);\n}\n\n.content-col .share .material-icons-outlined {\n  margin-top: 1rem;\n  text-align: end;\n}\n\n.content-col .below-share {\n  justify-content: end;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.content-col .below-share p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxhaW4tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRko7O0FBSUk7RUFDRSw2QkFBQTtBQUZOOztBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRk47O0FBTUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFLSTtFQUNFLFNBQUE7QUFITiIsImZpbGUiOiJleHBsYWluLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC41cmVtO1xufVxuXG5cbi5jb250ZW50LWNvbCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIC5zaGFyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbiAgICAubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG4gIH1cblxuICAuYmVsb3ctc2hhcmUge1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBwe1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vLnNoYXJlOjpiZWZvcmUge1xuICAvLyAgY29udGVudDogXCJcIjtcbiAgLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gIGxlZnQ6IDA7XG4gIC8vICBib3R0b206IDA7XG4gIC8vICBoZWlnaHQ6IDEwMCU7XG4gIC8vICB3aWR0aDogLjVyZW07XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8vfVxufVxuXG4iXX0= */";

/***/ }),

/***/ 5780:
/*!****************************************************************************!*\
  !*** ./src/app/shared/partner-card/partner-card.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".partner-card {\n  text-align: start;\n  border-radius: 20px;\n  background-color: white;\n  margin: 0.8rem 0.8rem 0.8rem;\n  width: calc(100% - 1.6rem);\n  height: 60px;\n  color: var(--ion-color-light);\n}\n.partner-card .main-row {\n  height: 100%;\n  align-items: center;\n}\n.partner-card .main-row ion-col {\n  margin: 0;\n  justify-content: center;\n}\n.partner-card .main-row ion-col img {\n  border-radius: 10px 10px 0 0;\n  object-fit: cover;\n  max-height: 46px;\n  padding: 0.5rem;\n  margin-top: 4px;\n}\n.partner-card .main-row h3 {\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n  padding: 0;\n  margin: 0;\n  color: var(--ion-color-dark);\n}\n.partner-card .main-row span {\n  font-size: 1.8rem !important;\n  color: var(--ion-color-dark);\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnRuZXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFDRjtBQUdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBREo7QUFHSTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtBQUROO0FBSU07RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZSO0FBTUk7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FBSk47QUFRSTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBTk4iLCJmaWxlIjoicGFydG5lci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItY2FyZCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAuOHJlbSAuOHJlbSAuOHJlbTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNnJlbSk7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cblxuXG4gIC5tYWluLXJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tY29sIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NnB4O1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGgzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW0gIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuXG4gIH1cbn1cblxuXG5cbiJdfQ== */";

/***/ }),

/***/ 7170:
/*!************************************************************************!*\
  !*** ./src/app/tab-home/news-card/news-card.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".news-card {\n  text-align: start;\n  border-radius: 40px;\n  background-color: white;\n  margin: 1rem 0.5rem 0.5rem;\n}\n.news-card img {\n  border-radius: 40px 40px 0 0;\n  object-fit: cover;\n  max-height: 14rem;\n  width: 100%;\n}\n.align-right {\n  justify-content: flex-end;\n}\n.small-margin {\n  padding: 1rem;\n  padding-top: 0;\n}\nh3 {\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n}\np {\n  font-weight: 400;\n  font-family: \"Lato\", serif;\n  margin-top: 0;\n  font-size: 1.1rem;\n}\nion-icon {\n  font-size: 1.5rem !important;\n  margin-top: 4px;\n  color: var(--ion-color-primary);\n}\nspan {\n  color: var(--ion-color-primary);\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFFRTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUlBO0VBQ0UseUJBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFERjtBQUlBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtBQURGIiwiZmlsZSI6Im5ld3MtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWNhcmQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMXJlbSAuNXJlbSAuNXJlbTtcblxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDAgMDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXgtaGVpZ2h0OiAxNHJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYWxpZ24tcmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uc21hbGwtbWFyZ2lue1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxucCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2VyaWY7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6NHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpXG59XG5cbnNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */";

/***/ }),

/***/ 9571:
/*!********************************************************!*\
  !*** ./src/app/tab-home/tab-home.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "* {\n  padding: 0;\n}\n\nh4 {\n  text-align: start;\n  font-weight: 600;\n  text-transform: uppercase;\n  margin: 3rem 0 0 2rem;\n  font-size: 1.3rem;\n  color: var(--ion-color-dark);\n}\n\n.header-col .upper-container {\n  width: 100%;\n  padding: 0 1.5rem 1rem;\n  border-bottom-right-radius: 50px;\n  background-color: var(--ion-color-primary);\n}\n\n.header-col .upper-container img {\n  padding-top: 3rem;\n  padding-right: 2rem;\n  margin-right: -8rem;\n}\n\n.header-col .upper-container .translation-box {\n  width: 5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  padding: 0.3rem 1rem 0.2rem;\n  background-color: var(--ion-color-light);\n  border-radius: 9999px;\n}\n\n.header-col .upper-container .translation-box p {\n  padding: 0;\n  margin: 0;\n}\n\n.header-col .upper-container .subtitle {\n  color: var(--ion-color-light);\n  font-style: italic;\n  padding-right: 2.5rem;\n}\n\n.header-col .lower-container {\n  width: 100%;\n  height: 4rem;\n  background-color: var(--ion-color-primary);\n  position: relative;\n}\n\n.header-col .lower-container::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 4rem;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  border-top-left-radius: 50px;\n}\n\n.btn-col {\n  text-align: center;\n}\n\n.btn-col .explain-btn {\n  margin-bottom: 1rem;\n  padding: 3px 1rem 0;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-white);\n  background-color: var(--ion-color-white);\n  border: 2px solid var(--ion-color-primary);\n  --box-shadow: none;\n  border-radius: 9999px;\n  height: 3rem;\n}\n\n.partner-col {\n  margin-top: 3rem;\n  margin-bottom: 1rem;\n}\n\n.partner-col p {\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--ion-color-medium);\n  margin: 4rem 0 1rem 1.5rem;\n}\n\n.partner-col .partner-list {\n  background-color: transparent;\n  margin: -0.8rem 0.5rem 0;\n}\n\n.child-img {\n  margin-bottom: -1rem;\n  margin-left: 5rem;\n}\n\n.info-col {\n  position: relative;\n}\n\n.info-col .upper-container-reverse {\n  position: relative;\n  width: 100%;\n  height: 3rem;\n  background-color: var(--ion-color-light);\n}\n\n.info-col .upper-container-reverse::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 3rem;\n  left: 0;\n  bottom: 0;\n  border-top-left-radius: 50px;\n  background-color: var(--ion-color-primary);\n}\n\n.info-col .lower-container-reverse {\n  width: 100%;\n  background-color: var(--ion-color-primary);\n  padding: 0 1rem 2rem 1rem;\n  text-align: start;\n  border-bottom-right-radius: 50px;\n}\n\n.info-col .lower-container-reverse h4 {\n  margin: 0 0 0 1rem;\n  color: var(--ion-color-light);\n}\n\n.info-col .lower-container-reverse .underline {\n  background-color: var(--ion-color-light);\n  margin: 5px 0 0 1rem;\n  width: 60%;\n  height: 3px;\n  border-radius: 9999px;\n}\n\n.info-col .lower-container-reverse .margin-top {\n  margin-top: 2rem;\n}\n\n.info-col .lower-container-reverse p {\n  text-align: start;\n  font-size: 1.05rem;\n  margin: 0.8rem 1rem 2rem 1rem;\n  color: var(--ion-color-light);\n  white-space: pre-line;\n}\n\n.info-col .lower-container-reverse app-action-button {\n  margin-left: 1rem;\n}\n\nion-accordion-group .title {\n  font-size: 1.15rem;\n}\n\nion-accordion-group .content {\n  padding: 1rem 1rem 1rem 1.2rem;\n  font-size: 1.05rem;\n  color: var(--ion-color-dark-tint);\n  white-space: pre-line;\n}\n\nion-accordion.accordion-expanding ion-label,\nion-accordion.accordion-expanded ion-label {\n  color: var(--ion-color-primary);\n}\n\n.img-container {\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n  padding: 2rem 0;\n}\n\n.bottom-info {\n  margin: 2rem 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQU1FO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtBQUhKOztBQUtJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSE47O0FBTUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtBQUpOOztBQU1NO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFKUjs7QUFRSTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQU5OOztBQVdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FBVEo7O0FBWUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQVZKOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjs7QUFjRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBWko7O0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQWJKOztBQWdCRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7QUFkSjs7QUFrQkE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0JBQUE7QUFmRjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUFmSjs7QUFrQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtBQWhCSjs7QUFtQkU7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFqQko7O0FBbUJJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQWpCTjs7QUFvQkk7RUFDRSx3Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQWxCTjs7QUFxQkk7RUFDRSxnQkFBQTtBQW5CTjs7QUFzQkk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FBcEJOOztBQXVCSTtFQUNFLGlCQUFBO0FBckJOOztBQTRCRTtFQUNFLGtCQUFBO0FBekJKOztBQTRCRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FBMUJKOztBQWlDRTs7RUFDRSwrQkFBQTtBQTdCSjs7QUFpQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBOUJGIiwiZmlsZSI6InRhYi1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xufVxuXG5oNCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDNyZW0gMCAwIDJyZW07XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG5cblxuXG4uaGVhZGVyLWNvbCB7XG4gIC51cHBlci1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMS41cmVtIDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgaW1nIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogLThyZW07XG4gICAgfVxuXG4gICAgLnRyYW5zbGF0aW9uLWJveCB7XG4gICAgICB3aWR0aDogNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBwYWRkaW5nOiAuM3JlbSAxcmVtIC4ycmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcblxuICAgICAgcCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gICAgfVxuXG4gIH1cblxuICAubG93ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5sb3dlci1jb250YWluZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgfVxufVxuXG5cbi5idG4tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5leHBsYWluLWJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAzcHggMXJlbSAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICB9XG59XG5cbi5wYXJ0bmVyLWNvbCB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbjogNHJlbSAwIDFyZW0gMS41cmVtO1xuICB9XG5cbiAgLnBhcnRuZXItbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAtLjhyZW0gLjVyZW0gMDtcbiAgfVxufVxuXG4uY2hpbGQtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogLTFyZW07XG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xufVxuXG4uaW5mby1jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnVwcGVyLWNvbnRhaW5lci1yZXZlcnNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cblxuICAudXBwZXItY29udGFpbmVyLXJldmVyc2U6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAubG93ZXItY29udGFpbmVyLXJldmVyc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMnJlbSAxcmVtO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xuXG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgLnVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgbWFyZ2luOiA1cHggMCAwIDFyZW07XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgfVxuXG4gICAgLm1hcmdpbi10b3Age1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgbWFyZ2luOiAuOHJlbSAxcmVtIDJyZW0gMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIH1cblxuICAgIGFwcC1hY3Rpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuXG4gICAgfVxuICB9XG59XG5cbmlvbi1hY2NvcmRpb24tZ3JvdXAge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAxLjJyZW07XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIH1cbn1cblxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRpbmcsXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCB7XG4gIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG4uYm90dG9tLWluZm8ge1xuICBtYXJnaW46IDJyZW0gMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 672:
/*!******************************************************************************!*\
  !*** ./src/app/shared/explain-modal/explain-modal.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n        <ion-title>{{\"explainPage.pageName\" | translate}}</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"onClose()\">{{\"explainPage.close\" | translate}}</ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"content-col\">\n        <h2>{{\"explainPage.mainHeadline\" | translate}}</h2>\n\n        <p>{{\"explainPage.firstStep\" | translate}}</p>\n\n        <div class=\"share\" (click)=\"copyText()\">\n          <span>{{\"explainPage.copyMessage\" | translate}}</span>\n        </div>\n        <ion-row class=\"below-share\" (click)=\"copyText()\">\n          <p>{{\"explainPage.copyCall\" | translate}}</p>\n          <span class=\"material-icons-outlined\">copy</span>\n        </ion-row>\n\n\n        <p>{{\"explainPage.secondStep\" | translate}}</p>\n        <p><strong>{{\"explainPage.broadcastAndroid\" | translate}}</strong></p>\n        <p>{{\"explainPage.android1\" | translate}}</p>\n        <p>{{\"explainPage.android2\" | translate}}</p>\n        <p>{{\"explainPage.android3\" | translate}}</p>\n        <p>{{\"explainPage.android4\" | translate}}</p>\n          <p><strong>{{\"explainPage.broadcastIos\" | translate}}</strong></p>\n        <p>{{\"explainPage.ios1\" | translate}}</p>\n        <p>{{\"explainPage.ios2\" | translate}}</p>\n        <p>{{\"explainPage.ios3\" | translate}}</p>\n        <p>{{\"explainPage.ios4\" | translate}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 9077:
/*!****************************************************************************!*\
  !*** ./src/app/shared/partner-card/partner-card.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"partner-card card-shadow\" (click)=\"openLink()\">\n  <ion-row class=\"main-row\">\n    <ion-col size=\"5\">\n      <img [src]=\"logo\" alt=\"\">\n    </ion-col>\n    <ion-col size=\"5\">\n      <h3>{{partner.name}}</h3>\n    </ion-col>\n    <ion-col size=\"2\">\n      <span class=\"material-icons-outlined\">arrow_forward</span>\n    </ion-col>\n  </ion-row>\n</div>\n";

/***/ }),

/***/ 3698:
/*!************************************************************************!*\
  !*** ./src/app/tab-home/news-card/news-card.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"news-card card-shadow\">\n\n  <img [src]=\"news.img\" alt=\"\">\n  <div class=\"small-margin\">\n\n    <h3 *ngIf=\"news.title\">{{news.title}}</h3>\n    <p>{{news.body}}</p>\n    <ion-row class=\"align-right\" (click)=\"openLink()\">\n      <ion-row *ngIf=\"news.link\"  class=\"center-vertical align-right\">\n        <a>Mehr Lesen</a>\n        <span class=\"material-icons-outlined\">\narrow_outward\n</span>\n      </ion-row>\n    </ion-row>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 2394:
/*!********************************************************!*\
  !*** ./src/app/tab-home/tab-home.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <div class=\"header-col\">\n      <div class=\"upper-container\">\n        <img src=\"/assets/imgs/logo_white.png\" alt=\"\"/>\n\n        <p class=\"subtitle\">{{\"homePage.subtitle\" | translate}}</p>\n        <div class=\"translation-box\" (click)=\"switchLanguage()\">\n          <p>{{\"homePage.translationBtn\" | translate}}</p>\n        </div>\n      </div>\n      <div class=\"lower-container\"></div>\n    </div>\n\n    <div class=\"btn-col\">\n      <ion-button color=\"light\" class=\"explain-btn\" routerLink=\"/slider\">{{'homePage.explainBtn' | translate}}</ion-button>\n      <app-action-button [text]=\"'homePage.partnerBtn' | translate\" routerLink=\"/tabs/tab-partner\"></app-action-button>\n    </div>\n\n    <div class=\"partner-col\">\n      <p *ngIf=\"latestPartner.length\">{{\"homePage.lastVisited\" | translate}}</p>\n      <ion-list class=\"partner-list\" *ngFor=\"let partner of latestPartner\">\n        <app-partner-card [partner]=\"partner\" [country]=\"country\"></app-partner-card>\n      </ion-list>\n    </div>\n\n    <img class=\"child-img\" src=\"/assets/imgs/child.png\" alt=\"\">\n\n    <div class=\"info-col\">\n      <div class=\"upper-container-reverse\"></div>\n      <div class=\"lower-container-reverse\">\n        <h4>{{\"homePage.aboutUsTitle\" | translate}}</h4>\n        <div class=\"underline\"></div>\n        <p>{{'homePage.aboutUs' | translate}}</p>\n\n        <app-action-button class=\"team-btn\" color=\"light\" [text]=\"'homePage.teamBtn' | translate\" routerLink=\"/team\"></app-action-button>\n\n          <h4 class=\"margin-top\">{{'homePage.ourVisionTitle' | translate}}</h4>\n          <div class=\"underline\"></div>\n\n        <p>{{'homePage.ourVision' | translate}}</p>\n\n        <app-action-button class=\"team-btn\" color=\"light\" [text]=\"'homePage.ambassadorBtn' | translate\" routerLink=\"/ambassador\"></app-action-button>\n      </div>\n    </div>\n\n    <h4>{{'homePage.QATitle' | translate}}</h4>\n    <ion-accordion-group mode=\"ios\" expand=\"inset\">\n      <ion-accordion mode=\"ios\" *ngFor=\"let question of (translateService.currentLang === 'en' ? questionsEN : questionsDE)\">\n        <ion-item slot=\"header\" color=\"light\">\n          <ion-label class=\"ion-text-wrap title\" mode=\"md\">{{question.title}}</ion-label>\n        </ion-item>\n        <div class=\"content\" slot=\"content\">{{question.content}}</div>\n      </ion-accordion>\n    </ion-accordion-group>\n\n    <div class=\"img-container\">\n      <img src=\"/assets/imgs/original.png\" alt=\"\">\n    </div>\n    <div class=\"bottom-info\">\n    <p>\n      Besuchen Sie auch unsere Webseite unter <a href=\"www.wirzeigenherz.eu\">www.wirzeigenherz.eu</a>\n    </p>\n\n  </div>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\"\n        rel=\"stylesheet\"/>\n\n  <ion-tab-bar slot=\"bottom\">\n\n  <ion-tab-button tab=\"tab-partner\">\n    <span class=\"material-icons-outlined\">shopping_cart</span>\n    <ion-label>{{\"partnerPage.tabName\" | translate}}</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"tab-home\">\n    <span class=\"material-icons-outlined\">home</span>\n    <ion-label>{{\"homePage.tabName\" | translate}}</ion-label>\n  </ion-tab-button>\n\n    <ion-tab-button tab=\"tab-projects\">\n      <span class=\"material-icons-outlined\">savings</span>\n      <ion-label>{{\"projectPage.title\" | translate}}</ion-label>\n    </ion-tab-button>\n\n    <!--    <ion-tab-button tab=\"tab-team\">-->\n    <!--      <span class=\"material-icons-outlined\">diversity_1</span>-->\n    <!--      <ion-label>{{'teamPage.tabName' | translate}}</ion-label>-->\n    <!--    </ion-tab-button>-->\n\n    <!--    <ion-tab-button tab=\"tab-news\">-->\n    <!--      <span class=\"material-icons-outlined\">newspaper</span>-->\n    <!--      <ion-label>News</ion-label>-->\n    <!--    </ion-tab-button>-->\n  </ion-tab-bar>\n\n</ion-tabs>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map