import { Component, OnInit } from '@angular/core';
import {Project} from './project.interface';
import {Observable, Subscription} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';
import {ProjectsService} from './projects.service';
import {TranslateService} from '@ngx-translate/core';
import en from '../../assets/i18n/en.json';
import de from '../../assets/i18n/de.json';
import {ProjectService} from './project.service';
import {Preferences} from '@capacitor/preferences';
import {animate, state, style, transition, trigger} from "@angular/animations";



@Component({
  selector: 'app-tab-projects',
  templateUrl: './tab-projects.page.html',
  styleUrls: ['./tab-projects.page.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(500)]),
    ]),
  ],
})
export class TabProjectsPage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  projects: Project[];

  language: string = this.translateService.currentLang;

  likedProjectsCount: number;


  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public fsService: FirebaseService,
    public projectsService: ProjectsService,
    private translateService: TranslateService,
    private projectService: ProjectService
  )
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit(): void {
  }

  // ----------------------------------------------------------------------------------------------

  ionViewWillEnter() {
    this.getLikeCount();

    this.language = this.translateService.currentLang;

    if (this.language === 'en') {
      this.projects = en.projectPage.projects;
    } else {
      this.projects = de.projectPage.projects;
    }
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  selectProject(project: Project) {
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

  getLikeCount(){
    Preferences.get({key: 'likedProjects'}).then(
      likedProjects => {
        const loadedLikedProjects = JSON.parse(likedProjects.value);

        if(loadedLikedProjects) {
          this.likedProjectsCount = loadedLikedProjects.length;
        }
      }
    );
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
