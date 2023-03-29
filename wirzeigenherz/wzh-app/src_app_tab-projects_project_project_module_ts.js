"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-projects_project_project_module_ts"],{

/***/ 7615:
/*!****************************************************************!*\
  !*** ./src/app/tab-projects/project/project-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPageRoutingModule": () => (/* binding */ ProjectPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.page */ 1186);




const routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_0__.ProjectPage
    },
];
let ProjectPageRoutingModule = class ProjectPageRoutingModule {
};
ProjectPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProjectPageRoutingModule);



/***/ }),

/***/ 3371:
/*!********************************************************!*\
  !*** ./src/app/tab-projects/project/project.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPageModule": () => (/* binding */ ProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-routing.module */ 7615);
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.page */ 1186);
/* harmony import */ var _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/action-button/action-button.module */ 7111);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);









let ProjectPageModule = class ProjectPageModule {
};
ProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectPageRoutingModule,
            _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_2__.ActionButtonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_1__.ProjectPage]
    })
], ProjectPageModule);



/***/ }),

/***/ 1186:
/*!******************************************************!*\
  !*** ./src/app/tab-projects/project/project.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPage": () => (/* binding */ ProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.page.html?ngResource */ 2443);
/* harmony import */ var _project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.page.scss?ngResource */ 1674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects.service */ 8275);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/firebase.service */ 2841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ 8737);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 5191);










let ProjectPage = class ProjectPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(projectsService, navCtrl, fsService, activatedRoute, projectService) {
        this.projectsService = projectsService;
        this.navCtrl = navCtrl;
        this.fsService = fsService;
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.project = this.projectsService.getSelectedProject();
            if (!this.project) {
                this.navCtrl.navigateBack('tabs/tab-projects').then();
            }
            _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({ key: this.project.title }).then(value => {
                this.project.isLiked = value.value === "true";
            });
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    onNavBack() {
        this.navCtrl.pop().then();
    }
    // ----------------------------------------------------------------------------------------------
    likeProject() {
        this.projectService.likeProject(this.project);
        this.project.isLiked = !this.project.isLiked;
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    saveLike(addLike) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
                key: this.project.title,
                value: addLike.toString(),
            });
        });
    }
};
ProjectPage.ctorParameters = () => [
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__.ProjectsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService }
];
ProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-project',
        template: _project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectPage);



/***/ }),

/***/ 1674:
/*!*******************************************************************!*\
  !*** ./src/app/tab-projects/project/project.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".nav-row {\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.nav-row .top-btn {\n  aspect-ratio: 1;\n  height: 3rem;\n  text-align: center;\n  background-color: white;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 2px;\n  margin: 0.5rem;\n  padding-top: 0.65rem;\n  border-radius: 9999px;\n}\n.nav-row .top-btn ion-icon {\n  font-size: 1.7rem;\n  color: var(--ion-color-dark);\n  margin-right: 2px;\n}\n.nav-row .top-btn .heart {\n  color: var(--ion-color-primary);\n  margin-right: 0px;\n}\n.col {\n  flex-direction: column;\n}\n.col img {\n  aspect-ratio: 1.4;\n  width: calc(100% - 1rem);\n  margin: 0.5rem;\n  border-radius: 10px;\n  box-shadow: var(--ion-color-dark) 0 0 30px -12px;\n}\n.col h2 {\n  margin: 1.5rem 0.5rem 0.5rem;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.col ion-row {\n  align-items: center;\n}\n.col ion-row h5 {\n  margin: 0.5rem;\n  font-family: \"Poppins\", serif;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.col ion-row span {\n  font-size: 0.9rem;\n  color: var(--ion-color-primary);\n}\n.col .progress-bar {\n  position: relative;\n  height: 0.5rem;\n  width: calc(100% - 1rem);\n  border-radius: 9999px;\n  margin: 1.5rem 0.5rem 0.5rem;\n  background-color: var(--ion-color-light-shade);\n}\n.col .progress-bar .progress-indicator {\n  position: absolute;\n  left: 0;\n  height: 0.5rem;\n  width: 70%;\n  background-color: var(--ion-color-primary);\n  border-radius: 9999px;\n}\n.col .space-between {\n  justify-content: space-between;\n}\n.col .space-between p {\n  margin: 0.5rem;\n  color: var(--ion-color-dark);\n  font-size: 0.9rem;\n}\n.col .text-block {\n  text-align: center;\n}\n.col .text-block h3 {\n  margin: 1.5rem 0.5rem 0.5rem;\n  font-size: 1rem;\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  text-align: start;\n}\n.col .text-block p {\n  margin: 0.5rem 0.5rem 2rem;\n  font-family: \"Lato\", serif;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBRUk7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBQU47QUFNQTtFQUNFLHNCQUFBO0FBSEY7QUFLRTtFQUNFLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSxnREFBQTtBQUpKO0FBT0U7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBUUU7RUFDRSxtQkFBQTtBQU5KO0FBUUk7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFOTjtBQVNJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtBQVBOO0FBV0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQVRKO0FBV0k7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7QUFUTjtBQWNFO0VBQ0UsOEJBQUE7QUFaSjtBQWNJO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFaTjtBQWdCRTtFQUNFLGtCQUFBO0FBZEo7QUFlSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBZE4iLCJmaWxlIjoicHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAudG9wLWJ0biB7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCAzcHggMnB4O1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgcGFkZGluZy10b3A6IC42NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICB9XG5cbiAgICAuaGVhcnQge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuXG4gICAgfVxuICB9XG59XG5cbi5jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGltZyB7XG4gICAgYXNwZWN0LXJhdGlvOiAxLjQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgIG1hcmdpbjogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvL2JveC1zaGFkb3c6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAwIDAgMzBweCAtMTJweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pb24tY29sb3ItZGFyaykgMCAwIDMwcHggLTEycHg7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAxLjVyZW0gLjVyZW0gLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgaW9uLXJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGg1IHtcbiAgICAgIG1hcmdpbjogLjVyZW07XG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cblxuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLnByb2dyZXNzLWJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogLjVyZW07XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICBtYXJnaW46IDEuNXJlbSAuNXJlbSAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgLnByb2dyZXNzLWluZGljYXRvciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgaGVpZ2h0OiAuNXJlbTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG5cbiAgICB9XG4gIH1cblxuICAuc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IC41cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogLjlyZW07XG4gICAgfVxuICB9XG5cbiAgLnRleHQtYmxvY2sge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDEuNXJlbSAuNXJlbSAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNlcmlmO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IC41cmVtIC41cmVtIDJyZW07XG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNlcmlmO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbiAgICB9XG5cblxuXG5cbiAgfVxufVxuXG5cbiJdfQ== */";

/***/ }),

/***/ 2443:
/*!*******************************************************************!*\
  !*** ./src/app/tab-projects/project/project.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"project.page.scss\">\n<ion-content>\n  <ion-grid *ngIf=\"project\">\n    <ion-row class=\"nav-row\">\n      <div class=\"top-btn\" (click)=\"onNavBack()\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </div>\n      <div class=\"top-btn\"  (click)=\"likeProject()\">\n          <ion-icon *ngIf=\"project.isLiked\"   name=\"heart\" class=\"heart\"></ion-icon>\n          <ion-icon  *ngIf=\"!project.isLiked\" name=\"heart-outline\" class=\"heart\"></ion-icon>\n      </div>\n    </ion-row>\n    <div class=\"col\">\n      <img [src]=\"project.img\" alt=\"\">\n      <h2>{{project.title}}</h2>\n      <ion-row>\n        <h5>{{project.organisation}}  <span class=\"material-icons-outlined\" *ngIf=\"project.organisation\">verified</span></h5>\n      </ion-row>\n<!--      <div class=\"progress-bar\">-->\n<!--        <div class=\"progress-indicator\"></div>-->\n<!--      </div>-->\n<!--      <ion-row class=\"space-between\">-->\n<!--        <p>24 Tage verbleibend</p>-->\n<!--        <p>Ziel: 25,000€</p>-->\n<!--      </ion-row>-->\n      <div class=\"text-block\">\n        <h3>{{'projectDetailPage.aboutThisProject' | translate}}</h3>\n        <p>{{project.description}}</p>\n\n        <app-action-button text=\"Partnerprogramme\" class=\"action-btn\" routerLink=\"/tabs/tab-partner\"></app-action-button>\n        <div class=\"space-small\"></div>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-projects_project_project_module_ts.js.map