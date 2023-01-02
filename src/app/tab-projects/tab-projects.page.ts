import { Component, OnInit } from '@angular/core';
import {Project} from './project.interface';
import {Observable, Subscription} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';
import {ProjectsService} from './projects.service';
import {TranslateService} from "@ngx-translate/core";
import en from "../../assets/i18n/en.json";
import de from "../../assets/i18n/de.json";



@Component({
  selector: 'app-tab-projects',
  templateUrl: './tab-projects.page.html',
  styleUrls: ['./tab-projects.page.scss'],
})
export class TabProjectsPage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  projects: Project[];

  language: string = this.translateService.currentLang;


  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public fsService: FirebaseService, public projectsService: ProjectsService, private translateService: TranslateService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    if (this.language === "en") {
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

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
