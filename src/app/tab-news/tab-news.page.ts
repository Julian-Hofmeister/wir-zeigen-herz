import { Component, OnInit } from '@angular/core';
import {Project} from "../tab-projects/project.interface";
import {News} from "./news.interface";
import {FirebaseService} from "../shared/firebase.service";
import {Observable} from "rxjs";
import {TeamMember} from "../tab-team/team-member.interface";
import en from "../../assets/i18n/en.json";
import de from "../../assets/i18n/de.json";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tab-news',
  templateUrl: './tab-news.page.html',
  styleUrls: ['./tab-news.page.scss'],
})
export class TabNewsPage implements OnInit {
//#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  news: News[];

  language: string = this.translateService.currentLang;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private translateService: TranslateService) {
  }


  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit()
  {
    if (this.language === "en") {
      this.news = en.newsPage.news
    } else {
      this.news = de.newsPage.news
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
