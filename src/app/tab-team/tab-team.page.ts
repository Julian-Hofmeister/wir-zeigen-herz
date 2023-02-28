import {Component, OnInit} from '@angular/core';
import {TeamMember} from './team-member.interface';
import {Observable} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';


import {TranslateService} from '@ngx-translate/core';
import de from 'src/assets/i18n/de.json';
import en from 'src/assets/i18n/en.json';
import {NavController} from "@ionic/angular";


@Component({
  selector: 'app-tab-team',
  templateUrl: './tab-team.page.html',
  styleUrls: ['./tab-team.page.scss'],
})
export class TabTeamPage implements OnInit {


  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  members: TeamMember[];

  language: string = this.translateService.currentLang;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private translateService: TranslateService, private navCtrl: NavController) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    if (this.language === "en") {
      this.members = en.teamPage.members
    } else {
      this.members = de.teamPage.members
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
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
