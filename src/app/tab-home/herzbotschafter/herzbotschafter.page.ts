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
    const lang = this.language === "de" ? de : en;

    await Share.share({
      title: 'Wir Zeigen Herz',
      text: lang.explainPage.copyMessage,
      url: lang.explainPage.videoLink,
      dialogTitle: lang.explainPage.shareMsg,
    });

    try {
      await navigator.share({
        title: 'Wir Zeigen Herz',
        text: lang.explainPage.copyMessage,
        url: lang.explainPage.videoLink,
        // dialogTitle: lang.explainPage.shareMsg,
      });
    } catch (err) {
      console.warn(err.name, err.message);
    }
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}

