"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_tab-projects_tab-projects_module_ts"],{

/***/ 2841:
/*!********************************************!*\
  !*** ./src/app/shared/firebase.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 8427);






let FirebaseService = class FirebaseService {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(afs) {
        this.afs = afs;
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    get(path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const collection = this.afs.collection(path);
            this.dataList = collection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((changes) => changes.map((item) => {
                const data = item.payload.doc.data();
                data.id = item.payload.doc.id;
                return data;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
            return this.dataList;
        });
    }
    // ----------------------------------------------------------------------------------------------
    // async likeProject(projectId: string, like: boolean) {
    //    const user = await this.getUser();
    //
    //    let likes: string[] = user.likedProjects ?? [];
    //
    //    if(likes.includes(projectId)) {
    //      const index = likes.indexOf(projectId);
    //       likes.splice(index, 1);
    //
    //       likes = likes.length === 0 ? [] : likes;
    //    } else {
    //      likes.push(projectId);
    //    }
    //
    //    await this.afs.doc('user/' + this.userId).update({likedProjects: likes});
    //
    //
    //  }
    // ----------------------------------------------------------------------------------------------
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: 'user-id' });
            this.userId = user.value;
            if (!this.userId) {
                return;
            }
            const userPath = this.afs.doc('user/' + this.userId);
            const loadedUser = yield userPath.get().toPromise();
            return loadedUser.data();
        });
    }
    // ----------------------------------------------------------------------------------------------
    likeProject(addLike, project) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: 'user-id' });
            const projectRef = this.afs.firestore.doc('projects/' + project.id);
            yield projectRef.get()
                .then(docSnapshot => {
                if (!docSnapshot.exists) {
                    projectRef.set({
                        title: project.title
                    });
                }
            });
            if (addLike) {
                yield projectRef.update({
                    likes: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.arrayUnion(user.value)
                });
            }
            else {
                yield projectRef.update({
                    likes: firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.arrayRemove(user.value)
                });
            }
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore }
];
FirebaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], FirebaseService);



/***/ }),

/***/ 9457:
/*!*************************************************************!*\
  !*** ./src/app/shared/page-header/page-header.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.component.html?ngResource */ 2245);
/* harmony import */ var _page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.component.scss?ngResource */ 6828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 7514);





let PageHeaderComponent = class PageHeaderComponent {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(translateService) {
        this.translateService = translateService;
        //#endregion
        //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
        this.language = this.translateService.currentLang;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        console.log(this.with);
    }
};
PageHeaderComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
PageHeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    with: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PageHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-page-header',
        template: _page_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_page_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PageHeaderComponent);



/***/ }),

/***/ 6327:
/*!*********************************************************************!*\
  !*** ./src/app/tab-projects/project-card/project-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": () => (/* binding */ ProjectCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-card.component.html?ngResource */ 5158);
/* harmony import */ var _project_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-card.component.scss?ngResource */ 9319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects.service */ 8275);
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/firebase.service */ 2841);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project.service */ 8737);








let ProjectCardComponent = class ProjectCardComponent {
    //#endregion
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(projectsService, projectService, firebaseService) {
        this.projectsService = projectsService;
        this.projectService = projectService;
        this.firebaseService = firebaseService;
        this.likeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_4__.Preferences.get({ key: this.project.title }).then(value => {
            this.project.isLiked = value.value === "true";
        });
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    openProjectPage() {
        this.projectsService.selectProject(this.project);
    }
    // ----------------------------------------------------------------------------------------------
    likeProject() {
        this.projectService.likeProject(this.project);
        this.project.isLiked = !this.project.isLiked;
        this.likeEvent.emit(!this.project.isLiked);
    }
};
ProjectCardComponent.ctorParameters = () => [
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_2__.ProjectsService },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_5__.ProjectService },
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService }
];
ProjectCardComponent.propDecorators = {
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    likeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output }]
};
ProjectCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-project-card',
        template: _project_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectCardComponent);



/***/ }),

/***/ 8737:
/*!*************************************************!*\
  !*** ./src/app/tab-projects/project.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/firebase.service */ 2841);




let ProjectService = class ProjectService {
    //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(fsService) {
        this.fsService = fsService;
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    likeProject(project) {
        this.saveLike(!project.isLiked, project).then();
        this.fsService.likeProject(!project.isLiked, project).then();
        this.updateLikeCount(project);
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    saveLike(addLike, project) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
                key: project.title,
                value: addLike.toString(),
            });
        });
    }
    // ----------------------------------------------------------------------------------------------
    updateLikeCount(project) {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: 'likedProjects' }).then(likedProjects => {
            let projects = JSON.parse(likedProjects.value);
            if (!project.isLiked) {
                const index = projects.indexOf(project.id);
                projects.splice(index, 1);
            }
            else {
                try {
                    projects.push(project.id);
                }
                catch (_a) {
                    projects = [project.id];
                }
            }
            _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
                key: 'likedProjects',
                value: JSON.stringify(projects),
            });
        });
    }
};
ProjectService.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseService }
];
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ 8275:
/*!**************************************************!*\
  !*** ./src/app/tab-projects/projects.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsService": () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/firebase.service */ 2841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);





let ProjectsService = class ProjectsService {
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(fsService, afs) {
        this.fsService = fsService;
        this.afs = afs;
    }
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    getProjects() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.fsService.getUser();
            console.log(user);
            const collection = this.afs.collection('projects');
            this.projectList = collection.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((changes) => changes.map((item) => {
                const data = item.payload.doc.data();
                data.id = item.payload.doc.id;
                data.isLiked = user.likedProjects.includes(data.id);
                return data;
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
            return this.projectList;
        });
    }
    // ----------------------------------------------------------------------------------------------
    selectProject(project) {
        this.selectedProject = project;
    }
    // ----------------------------------------------------------------------------------------------
    getSelectedProject() {
        return this.selectedProject;
    }
};
ProjectsService.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_0__.FirebaseService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore }
];
ProjectsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], ProjectsService);



/***/ }),

/***/ 4916:
/*!*************************************************************!*\
  !*** ./src/app/tab-projects/tab-projects-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabProjectsPageRoutingModule": () => (/* binding */ TabProjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab_projects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-projects.page */ 4548);




const routes = [
    {
        path: '',
        component: _tab_projects_page__WEBPACK_IMPORTED_MODULE_0__.TabProjectsPage
    },
    {
        path: 'project',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab-projects_project_project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project/project.module */ 3371)).then(m => m.ProjectPageModule)
    }
];
let TabProjectsPageRoutingModule = class TabProjectsPageRoutingModule {
};
TabProjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabProjectsPageRoutingModule);



/***/ }),

/***/ 8202:
/*!*****************************************************!*\
  !*** ./src/app/tab-projects/tab-projects.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabProjectsPageModule": () => (/* binding */ TabProjectsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tab_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-projects-routing.module */ 4916);
/* harmony import */ var _tab_projects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-projects.page */ 4548);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-card/project-card.component */ 6327);
/* harmony import */ var _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/action-button/action-button.module */ 7111);
/* harmony import */ var _shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/page-header/page-header.component */ 9457);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 7514);











let TabProjectsPageModule = class TabProjectsPageModule {
};
TabProjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tab_projects_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabProjectsPageRoutingModule,
            _shared_action_button_action_button_module__WEBPACK_IMPORTED_MODULE_3__.ActionButtonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule
        ],
        exports: [
            _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_2__.ProjectCardComponent,
            _shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent
        ],
        declarations: [_tab_projects_page__WEBPACK_IMPORTED_MODULE_1__.TabProjectsPage, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_2__.ProjectCardComponent, _shared_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent]
    })
], TabProjectsPageModule);



/***/ }),

/***/ 4548:
/*!***************************************************!*\
  !*** ./src/app/tab-projects/tab-projects.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabProjectsPage": () => (/* binding */ TabProjectsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab_projects_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-projects.page.html?ngResource */ 8090);
/* harmony import */ var _tab_projects_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-projects.page.scss?ngResource */ 8057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/firebase.service */ 2841);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ 8275);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/i18n/en.json */ 502);
/* harmony import */ var _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/i18n/de.json */ 3634);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.service */ 8737);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 1631);












let TabProjectsPage = class TabProjectsPage {
    //#endregion
    //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
    constructor(fsService, projectsService, translateService, projectService) {
        this.fsService = fsService;
        this.projectsService = projectsService;
        this.translateService = translateService;
        this.projectService = projectService;
        this.language = this.translateService.currentLang;
    }
    //#endregion
    //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
    ngOnInit() {
    }
    // ----------------------------------------------------------------------------------------------
    ionViewWillEnter() {
        this.getLikeCount();
        this.language = this.translateService.currentLang;
        if (this.language === 'en') {
            this.projects = _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_4__.projectPage.projects;
        }
        else {
            this.projects = _assets_i18n_de_json__WEBPACK_IMPORTED_MODULE_5__.projectPage.projects;
        }
    }
    //#endregion
    //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////
    //#endregion
    //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
    selectProject(project) {
        this.projectService.likeProject(project);
        project.isLiked = !project.isLiked;
        this.changeLikeCount(project);
    }
    // ----------------------------------------------------------------------------------------------
    changeLikeCount(project) {
        this.likedProjectsCount = project.isLiked ? this.likedProjectsCount + 1 : this.likedProjectsCount - 1;
    }
    // ----------------------------------------------------------------------------------------------
    //#endregion
    //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////
    getLikeCount() {
        _capacitor_preferences__WEBPACK_IMPORTED_MODULE_7__.Preferences.get({ key: 'likedProjects' }).then(likedProjects => {
            const loadedLikedProjects = JSON.parse(likedProjects.value);
            if (loadedLikedProjects) {
                this.likedProjectsCount = loadedLikedProjects.length;
            }
        });
    }
};
TabProjectsPage.ctorParameters = () => [
    { type: _shared_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectsService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_6__.ProjectService }
];
TabProjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-tab-projects',
        template: _tab_projects_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('simpleFadeAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 1 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(500)]),
            ]),
        ],
        styles: [_tab_projects_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabProjectsPage);



/***/ }),

/***/ 2393:
/*!******************************************************************************!*\
  !*** ./node_modules/@angular/fire/fesm2015/angular-fire-compat-firestore.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularFirestore": () => (/* binding */ AngularFirestore),
/* harmony export */   "AngularFirestoreCollection": () => (/* binding */ AngularFirestoreCollection),
/* harmony export */   "AngularFirestoreCollectionGroup": () => (/* binding */ AngularFirestoreCollectionGroup),
/* harmony export */   "AngularFirestoreDocument": () => (/* binding */ AngularFirestoreDocument),
/* harmony export */   "AngularFirestoreModule": () => (/* binding */ AngularFirestoreModule),
/* harmony export */   "ENABLE_PERSISTENCE": () => (/* binding */ ENABLE_PERSISTENCE),
/* harmony export */   "PERSISTENCE_SETTINGS": () => (/* binding */ PERSISTENCE_SETTINGS),
/* harmony export */   "SETTINGS": () => (/* binding */ SETTINGS),
/* harmony export */   "USE_EMULATOR": () => (/* binding */ USE_EMULATOR),
/* harmony export */   "associateQuery": () => (/* binding */ associateQuery),
/* harmony export */   "combineChange": () => (/* binding */ combineChange),
/* harmony export */   "combineChanges": () => (/* binding */ combineChanges),
/* harmony export */   "docChanges": () => (/* binding */ docChanges),
/* harmony export */   "fromCollectionRef": () => (/* binding */ fromCollectionRef),
/* harmony export */   "fromDocRef": () => (/* binding */ fromDocRef),
/* harmony export */   "fromRef": () => (/* binding */ fromRef),
/* harmony export */   "sortedChanges": () => (/* binding */ sortedChanges),
/* harmony export */   "validateEventsArray": () => (/* binding */ validateEventsArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 328);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ 3413);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/auth */ 7210);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/firestore */ 7624);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/app-check */ 5738);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ 8427);















function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_3__.asyncScheduler) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(subscriber => {
    let unsubscribe;

    if (scheduler != null) {
      scheduler.schedule(() => {
        unsubscribe = ref.onSnapshot({
          includeMetadataChanges: true
        }, subscriber);
      });
    } else {
      unsubscribe = ref.onSnapshot({
        includeMetadataChanges: true
      }, subscriber);
    }

    return () => {
      if (unsubscribe != null) {
        unsubscribe();
      }
    };
  });
}

function fromRef(ref, scheduler) {
  return _fromRef(ref, scheduler);
}

function fromDocRef(ref, scheduler) {
  return fromRef(ref, scheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([priorPayload, payload]) => {
    if (!payload.exists) {
      return {
        payload,
        type: 'removed'
      };
    }

    if (!(priorPayload === null || priorPayload === void 0 ? void 0 : priorPayload.exists)) {
      return {
        payload,
        type: 'added'
      };
    }

    return {
      payload,
      type: 'modified'
    };
  }));
}

function fromCollectionRef(ref, scheduler) {
  return fromRef(ref, scheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(payload => ({
    payload,
    type: 'query'
  })));
}
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 */


function docChanges(query, scheduler) {
  return fromCollectionRef(query, scheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([priorAction, action]) => {
    const docChanges = action.payload.docChanges();
    const actions = docChanges.map(change => ({
      type: change.type,
      payload: change
    })); // the metadata has changed from the prior emission

    if (priorAction && JSON.stringify(priorAction.payload.metadata) !== JSON.stringify(action.payload.metadata)) {
      // go through all the docs in payload and figure out which ones changed
      action.payload.docs.forEach((currentDoc, currentIndex) => {
        const docChange = docChanges.find(d => d.doc.ref.isEqual(currentDoc.ref));
        const priorDoc = priorAction === null || priorAction === void 0 ? void 0 : priorAction.payload.docs.find(d => d.ref.isEqual(currentDoc.ref));

        if (docChange && JSON.stringify(docChange.doc.metadata) === JSON.stringify(currentDoc.metadata) || !docChange && priorDoc && JSON.stringify(priorDoc.metadata) === JSON.stringify(currentDoc.metadata)) {// document doesn't appear to have changed, don't log another action
        } else {
          // since the actions are processed in order just push onto the array
          actions.push({
            type: 'modified',
            payload: {
              oldIndex: currentIndex,
              newIndex: currentIndex,
              type: 'modified',
              doc: currentDoc
            }
          });
        }
      });
    }

    return actions;
  }));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 */


function sortedChanges(query, events, scheduler) {
  return docChanges(query, scheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.scan)((current, changes) => combineChanges(current, changes.map(it => it.payload), events), []), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), // cut down on unneed change cycles
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(changes => changes.map(c => ({
    type: c.type,
    payload: c
  }))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 */


function combineChanges(current, changes, events) {
  changes.forEach(change => {
    // skip unwanted change types
    if (events.indexOf(change.type) > -1) {
      current = combineChange(current, change);
    }
  });
  return current;
}
/**
 * Splice arguments on top of a sliced array, to break top-level ===
 * this is useful for change-detection
 */


function sliceAndSplice(original, start, deleteCount, ...args) {
  const returnArray = original.slice();
  returnArray.splice(start, deleteCount, ...args);
  return returnArray;
}
/**
 * Creates a new sorted array from a new change.
 * Build our own because we allow filtering of action types ('added', 'removed', 'modified') before scanning
 * and so we have greater control over change detection (by breaking ===)
 */


function combineChange(combined, change) {
  switch (change.type) {
    case 'added':
      if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {// Not sure why the duplicates are getting fired
      } else {
        return sliceAndSplice(combined, change.newIndex, 0, change);
      }

      break;

    case 'modified':
      if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
        // When an item changes position we first remove it
        // and then add it's new position
        if (change.oldIndex !== change.newIndex) {
          const copiedArray = combined.slice();
          copiedArray.splice(change.oldIndex, 1);
          copiedArray.splice(change.newIndex, 0, change);
          return copiedArray;
        } else {
          return sliceAndSplice(combined, change.newIndex, 1, change);
        }
      }

      break;

    case 'removed':
      if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
        return sliceAndSplice(combined, change.oldIndex, 1);
      }

      break;
  }

  return combined;
}

function validateEventsArray(events) {
  if (!events || events.length === 0) {
    events = ['added', 'removed', 'modified'];
  }

  return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 */


class AngularFirestoreCollection {
  /**
   * The constructor takes in a CollectionReference and Query to provide wrapper methods
   * for data operations and data streaming.
   *
   * Note: Data operation methods are done on the reference not the query. This means
   * when you update data it is not updating data to the window of your query unless
   * the data fits the criteria of the query. See the AssociatedRefence type for details
   * on this implication.
   */
  constructor(ref, query, afs) {
    this.ref = ref;
    this.query = query;
    this.afs = afs;
  }
  /**
   * Listen to the latest change in the stream. This method returns changes
   * as they occur and they are not sorted by query order. This allows you to construct
   * your own data structure.
   */


  stateChanges(events) {
    let source = docChanges(this.query, this.afs.schedulers.outsideAngular);

    if (events && events.length > 0) {
      source = source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(actions => actions.filter(change => events.indexOf(change.type) > -1)));
    }

    return source.pipe( // We want to filter out empty arrays, but always emit at first, so the developer knows
    // that the collection has been resolve; even if it's empty
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.pairwise)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(([prior, current]) => current.length > 0 || !prior), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(([prior, current]) => current), _angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }
  /**
   * Create a stream of changes as they occur it time. This method is similar to stateChanges()
   * but it collects each event in an array over time.
   */


  auditTrail(events) {
    return this.stateChanges(events).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.scan)((current, action) => [...current, ...action], []));
  }
  /**
   * Create a stream of synchronized changes. This method keeps the local array in sorted
   * query order.
   */


  snapshotChanges(events) {
    const validatedEvents = validateEventsArray(events);
    const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
    return scheduledSortedChanges$.pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }

  valueChanges(options = {}) {
    return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(actions => actions.payload.docs.map(a => {
      if (options.idField) {
        return Object.assign(Object.assign({}, a.data()), {
          [options.idField]: a.id
        });
      } else {
        return a.data();
      }
    })), _angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }
  /**
   * Retrieve the results of the query once.
   */


  get(options) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.query.get(options)).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }
  /**
   * Add data to a collection reference.
   *
   * Note: Data operation methods are done on the reference not the query. This means
   * when you update data it is not updating data to the window of your query unless
   * the data fits the criteria of the query.
   */


  add(data) {
    return this.ref.add(data);
  }
  /**
   * Create a reference to a single document in a collection.
   */


  doc(path) {
    // TODO is there a better way to solve this type issue
    return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
  }

}
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 */


class AngularFirestoreDocument {
  /**
   * The constructor takes in a DocumentReference to provide wrapper methods
   * for data operations, data streaming, and Symbol.observable.
   */
  constructor(ref, afs) {
    this.ref = ref;
    this.afs = afs;
  }
  /**
   * Create or overwrite a single document.
   */


  set(data, options) {
    return this.ref.set(data, options);
  }
  /**
   * Update some fields of a document without overwriting the entire document.
   */


  update(data) {
    return this.ref.update(data);
  }
  /**
   * Delete a document.
   */


  delete() {
    return this.ref.delete();
  }
  /**
   * Create a reference to a sub-collection given a path and an optional query
   * function.
   */


  collection(path, queryFn) {
    const collectionRef = this.ref.collection(path);
    const {
      ref,
      query
    } = associateQuery(collectionRef, queryFn);
    return new AngularFirestoreCollection(ref, query, this.afs);
  }
  /**
   * Listen to snapshot updates from the document.
   */


  snapshotChanges() {
    const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
    return scheduledFromDocRef$.pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }

  valueChanges(options = {}) {
    return this.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      payload
    }) => options.idField ? Object.assign(Object.assign({}, payload.data()), {
      [options.idField]: payload.id
    }) : payload.data()));
  }
  /**
   * Retrieve the document once.
   */


  get(options) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.ref.get(options)).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }

}
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 */


class AngularFirestoreCollectionGroup {
  /**
   * The constructor takes in a CollectionGroupQuery to provide wrapper methods
   * for data operations and data streaming.
   */
  constructor(query, afs) {
    this.query = query;
    this.afs = afs;
  }
  /**
   * Listen to the latest change in the stream. This method returns changes
   * as they occur and they are not sorted by query order. This allows you to construct
   * your own data structure.
   */


  stateChanges(events) {
    if (!events || events.length === 0) {
      return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
    }

    return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(actions => actions.filter(change => events.indexOf(change.type) > -1)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(changes => changes.length > 0), _angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }
  /**
   * Create a stream of changes as they occur it time. This method is similar to stateChanges()
   * but it collects each event in an array over time.
   */


  auditTrail(events) {
    return this.stateChanges(events).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.scan)((current, action) => [...current, ...action], []));
  }
  /**
   * Create a stream of synchronized changes. This method keeps the local array in sorted
   * query order.
   */


  snapshotChanges(events) {
    const validatedEvents = validateEventsArray(events);
    const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
    return scheduledSortedChanges$.pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }

  valueChanges(options = {}) {
    const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
    return fromCollectionRefScheduled$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(actions => actions.payload.docs.map(a => {
      if (options.idField) {
        return Object.assign({
          [options.idField]: a.id
        }, a.data());
      } else {
        return a.data();
      }
    })), _angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }
  /**
   * Retrieve the results of the query once.
   */


  get(options) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.query.get(options)).pipe(_angular_fire__WEBPACK_IMPORTED_MODULE_11__.keepUnstableUntilFirst);
  }

}
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 */


const ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.InjectionToken('angularfire2.enableFirestorePersistence');
const PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.InjectionToken('angularfire2.firestore.persistenceSettings');
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.InjectionToken('angularfire2.firestore.settings');
const USE_EMULATOR = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.InjectionToken('angularfire2.firestore.use-emulator');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param collectionRef - A collection reference to query
 * @param queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 */

function associateQuery(collectionRef, queryFn = ref => ref) {
  const query = queryFn(collectionRef);
  const ref = collectionRef;
  return {
    query,
    ref
  };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * @Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */


class AngularFirestore {
  /**
   * Each Feature of AngularFire has a FirebaseApp injected. This way we
   * don't rely on the main Firebase App instance and we can create named
   * apps and use multiple apps.
   */
  constructor(options, name, shouldEnablePersistence, settings, // tslint:disable-next-line:ban-types
  platformId, zone, schedulers, persistenceSettings, _useEmulator, auth, useAuthEmulator, authSettings, // can't use firebase.auth.AuthSettings here
  tenantId, languageCode, useDeviceLanguage, persistence, _appCheckInstances) {
    this.schedulers = schedulers;
    const app = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__["ɵfirebaseAppFactory"])(options, zone, name);
    const useEmulator = _useEmulator;

    if (auth) {
      (0,_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__["ɵauthFactory"])(app, zone, useAuthEmulator, tenantId, languageCode, useDeviceLanguage, authSettings, persistence);
    }

    [this.firestore, this.persistenceEnabled$] = (0,_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__["ɵcacheInstance"])(`${app.name}.firestore`, 'AngularFirestore', app.name, () => {
      const firestore = zone.runOutsideAngular(() => app.firestore());

      if (settings) {
        firestore.settings(settings);
      }

      if (useEmulator) {
        firestore.useEmulator(...useEmulator);
      }

      if (shouldEnablePersistence && !(0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.isPlatformServer)(platformId)) {
        // We need to try/catch here because not all enablePersistence() failures are caught
        // https://github.com/firebase/firebase-js-sdk/issues/608
        const enablePersistence = () => {
          try {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(firestore.enablePersistence(persistenceSettings || undefined).then(() => true, () => false));
          } catch (e) {
            if (typeof console !== 'undefined') {
              console.warn(e);
            }

            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false);
          }
        };

        return [firestore, zone.runOutsideAngular(enablePersistence)];
      } else {
        return [firestore, (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)(false)];
      }
    }, [settings, useEmulator, shouldEnablePersistence]);
  }

  collection(pathOrRef, queryFn) {
    let collectionRef;

    if (typeof pathOrRef === 'string') {
      collectionRef = this.firestore.collection(pathOrRef);
    } else {
      collectionRef = pathOrRef;
    }

    const {
      ref,
      query
    } = associateQuery(collectionRef, queryFn);
    const refInZone = this.schedulers.ngZone.run(() => ref);
    return new AngularFirestoreCollection(refInZone, query, this);
  }
  /**
   * Create a reference to a Firestore Collection Group based on a collectionId
   * and an optional query function to narrow the result
   * set.
   */


  collectionGroup(collectionId, queryGroupFn) {
    const queryFn = queryGroupFn || (ref => ref);

    const collectionGroup = this.firestore.collectionGroup(collectionId);
    return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
  }

  doc(pathOrRef) {
    let ref;

    if (typeof pathOrRef === 'string') {
      ref = this.firestore.doc(pathOrRef);
    } else {
      ref = pathOrRef;
    }

    const refInZone = this.schedulers.ngZone.run(() => ref);
    return new AngularFirestoreDocument(refInZone, this);
  }
  /**
   * Returns a generated Firestore Document Id.
   */


  createId() {
    return this.firestore.collection('_').doc().id;
  }

}

AngularFirestore.ɵfac = function AngularFirestore_Factory(t) {
  return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.FIREBASE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.FIREBASE_APP_NAME, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_11__["ɵAngularFireSchedulers"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](PERSISTENCE_SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.USE_EMULATOR, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.TENANT_ID, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.LANGUAGE_CODE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.USE_DEVICE_LANGUAGE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__.AppCheckInstances, 8));
};

AngularFirestore.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
  token: AngularFirestore,
  factory: AngularFirestore.ɵfac,
  providedIn: 'any'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](AngularFirestore, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable,
    args: [{
      providedIn: 'any'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.FIREBASE_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.FIREBASE_APP_NAME]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [ENABLE_PERSISTENCE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [SETTINGS]
      }]
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone
    }, {
      type: _angular_fire__WEBPACK_IMPORTED_MODULE_11__["ɵAngularFireSchedulers"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [PERSISTENCE_SETTINGS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [USE_EMULATOR]
      }]
    }, {
      type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuth,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.USE_EMULATOR]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.SETTINGS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.TENANT_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.LANGUAGE_CODE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.USE_DEVICE_LANGUAGE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.PERSISTENCE]
      }]
    }, {
      type: _angular_fire_app_check__WEBPACK_IMPORTED_MODULE_18__.AppCheckInstances,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Optional
      }]
    }];
  }, null);
})();

class AngularFirestoreModule {
  constructor() {
    firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__["default"].registerVersion('angularfire', _angular_fire__WEBPACK_IMPORTED_MODULE_11__.VERSION.full, 'fst-compat');
  }
  /**
   * Attempt to enable persistent storage, if possible
   */


  static enablePersistence(persistenceSettings) {
    return {
      ngModule: AngularFirestoreModule,
      providers: [{
        provide: ENABLE_PERSISTENCE,
        useValue: true
      }, {
        provide: PERSISTENCE_SETTINGS,
        useValue: persistenceSettings
      }]
    };
  }

}

AngularFirestoreModule.ɵfac = function AngularFirestoreModule_Factory(t) {
  return new (t || AngularFirestoreModule)();
};

AngularFirestoreModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: AngularFirestoreModule
});
AngularFirestoreModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [AngularFirestore]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](AngularFirestoreModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule,
    args: [{
      providers: [AngularFirestore]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 9221:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function pairwise() {
  return source => source.lift(new PairwiseOperator());
}

class PairwiseOperator {
  call(subscriber, source) {
    return source.subscribe(new PairwiseSubscriber(subscriber));
  }

}

class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination) {
    super(destination);
    this.hasPrev = false;
  }

  _next(value) {
    let pair;

    if (this.hasPrev) {
      pair = [this.prev, value];
    } else {
      this.hasPrev = true;
    }

    this.prev = value;

    if (pair) {
      this.destination.next(pair);
    }
  }

}

/***/ }),

/***/ 6828:
/*!**************************************************************************!*\
  !*** ./src/app/shared/page-header/page-header.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".margin-top {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9319:
/*!**********************************************************************************!*\
  !*** ./src/app/tab-projects/project-card/project-card.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".project-card {\n  text-align: start;\n  border-radius: 40px;\n  background-color: white;\n  margin: 0.8rem;\n  margin-bottom: 1.2rem;\n}\n.project-card img {\n  border-radius: 40px 40px 0 0;\n  object-fit: cover;\n  max-height: 12.5rem;\n  width: 100%;\n}\n.align-right {\n  justify-content: space-between;\n}\n.small-margin {\n  padding: 1rem;\n  padding-top: 0;\n}\nh3 {\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n}\np {\n  font-weight: 400;\n  font-family: \"Lato\", serif;\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n.vote-btn {\n  --border-radius: 50rem;\n  border-radius: 50rem;\n  --background: white;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 4px 12px;\n  height: 3rem;\n  width: 3rem;\n  text-align: center;\n}\nion-icon {\n  font-size: 1.5rem !important;\n  margin-top: 4px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUU7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQUo7QUFJQTtFQUNFLDhCQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBREY7QUFJQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURGO0FBSUE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQURGIiwiZmlsZSI6InByb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWNhcmQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcblxuXG4gIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweCA0MHB4IDAgMDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXgtaGVpZ2h0OiAxMi41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5hbGlnbi1yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNtYWxsLW1hcmdpbntcbiAgcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbnAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNlcmlmO1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTtcbiAgbGluZS1jbGFtcDogNTtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLnZvdGUtYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggNHB4IDEycHg7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOjRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KVxufVxuXG4iXX0= */";

/***/ }),

/***/ 8057:
/*!****************************************************************!*\
  !*** ./src/app/tab-projects/tab-projects.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-spinner {\n  margin-top: 55%;\n}\n\n.vote {\n  background-color: var(--ion-color-light);\n  border-radius: 40px;\n  margin: 0.8rem 0.8rem 1.2rem;\n  padding-bottom: 1rem;\n  text-align: start;\n}\n\n.padding {\n  padding: 1rem;\n}\n\nh3 {\n  font-weight: 600;\n  font-family: \"Poppins\", serif;\n  font-size: 1.2rem;\n  margin-top: 0;\n}\n\np {\n  font-weight: 400;\n  font-family: \"Lato\", serif;\n  margin-top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  line-clamp: 5;\n  -webkit-box-orient: vertical;\n  font-size: 1rem;\n  margin-bottom: 0;\n}\n\n.progress-wrapper {\n  margin-top: 6px;\n  margin-right: 1rem;\n}\n\nion-progress-bar {\n  height: 6px;\n  border-radius: 9999px;\n}\n\nion-list {\n  margin-bottom: 0.5rem;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1wcm9qZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDRixvQkFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InRhYi1wcm9qZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc3Bpbm5lciB7XG4gIG1hcmdpbi10b3A6IDU1JTtcbn1cblxuLnZvdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IC44cmVtIC44cmVtIDEuMnJlbTtcbnBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5wIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzZXJpZjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gIGxpbmUtY2xhbXA6IDU7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxufVxuXG4ucHJvZ3Jlc3Mtd3JhcHBlciB7XG4gLy9tYXJnaW4tbGVmdDogM3JlbTtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG5cbn1cbmlvbi1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuXG5pb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuIl19 */";

/***/ }),

/***/ 2245:
/*!**************************************************************************!*\
  !*** ./src/app/shared/page-header/page-header.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n\n<h1 class=\"margin-top\">{{title}}</h1>\n<ion-row class=\"center-vertical\">\n  <h1>{{language === \"de\" ? \"mit\" : \"with\"}}</h1>\n  <img class=\"icon\" src=\"/assets/imgs/icon.png\" alt=\"\">\n</ion-row>\n";

/***/ }),

/***/ 5158:
/*!**********************************************************************************!*\
  !*** ./src/app/tab-projects/project-card/project-card.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"project-card card-shadow\" >\n\n  <img [src]=\"project.img\" alt=\"\">\n  <div class=\"small-margin\">\n\n    <h3>{{project.title}}</h3>\n    <p>{{project.description}}</p>\n    <ion-row class=\"align-right\">\n     <ion-button class=\"vote-btn\" (click)=\"likeProject()\">\n       <div class=\"wrapper-div\">\n         <ion-icon *ngIf=\"project.isLiked\"   name=\"heart\"></ion-icon>\n         <ion-icon  *ngIf=\"!project.isLiked\" name=\"heart-outline\"></ion-icon>\n       </div>\n     </ion-button>\n      <app-action-button [text]=\"'projectPage.projectCardBtnText' | translate\" routerLink=\"project\" [state]=\"{ project: project }\"  (click)=\"openProjectPage()\" ></app-action-button>\n    </ion-row>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 8090:
/*!****************************************************************!*\
  !*** ./src/app/tab-projects/tab-projects.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"center-horizontal \">\n        <app-page-header [title]=\"'projectPage.pageName' | translate\" [with]=\"'partnerPage.with' | translate\"></app-page-header>\n        <div class=\"vote card-shadow\" [@simpleFadeAnimation]=\"'in'\">\n          <div class=\"padding\">\n            <h3>Deine Stimme zählt!</h3>\n            <p>Stimme über die Like Button ab, wie die generierten Spendengelder auf die Partnerprogramme verteilt werden sollen.</p>\n          </div>\n          <ion-list *ngFor=\"let project of projects\">\n            <ion-item lines=\"none\">\n<!--              <ion-checkbox slot=\"start\" mode=\"ios\" [ngModel]=\"project.isLiked\" (ngModelChange)=\"selectProject(project)\"></ion-checkbox>-->\n              <ion-col>\n                <ion-label class=\"ion-text-wrap \">{{project.title}}</ion-label>\n                <div class=\"progress-wrapper\">\n                  <ion-progress-bar [value]=\"project.isLiked ? 1/likedProjectsCount : 0\"></ion-progress-bar>\n                </div>\n              </ion-col>\n            </ion-item>\n          </ion-list>\n\n        </div>\n        <ion-list *ngFor=\"let project of projects\">\n            <app-project-card [project]=\"project\" (likeEvent)=\"changeLikeCount(project)\" [@simpleFadeAnimation]=\"'in'\"></app-project-card>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_tab-projects_tab-projects_module_ts.js.map