import { Component, OnInit } from '@angular/core';
import {Share} from "@capacitor/share";
import en from "../../../assets/i18n/en.json";
import de from "../../../assets/i18n/de.json";
import {Partner} from "../../tab-partner/partner.interface";
import {Question} from "../questions.interface";
import {Country} from "../../tab-partner/countries";
import {ModalController, NavController, ToastController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import {PartnerService} from "../../shared/partner.service";
import {Preferences} from "@capacitor/preferences";

@Component({
  selector: 'app-herzbotschafter',
  templateUrl: './herzbotschafter.page.html',
  styleUrls: ['./herzbotschafter.page.scss'],
})
export class HerzbotschafterPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  language: string = this.translateService.currentLang;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private translateService: TranslateService,
    private navCtrl: NavController
  ) {
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

  async shareVideo() {
    await Share.share({
      title: this.language === "en" ? en.homePage.shareMessageTitle : de.homePage.shareMessageTitle,
      text:  this.language === "en" ? en.homePage.shareMessage : de.homePage.shareMessage,
      dialogTitle: this.language === "en" ? en.homePage.dialogTitle : de.homePage.dialogTitle,
      url: 'https://vimeo.com/770214670',
    });
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}

