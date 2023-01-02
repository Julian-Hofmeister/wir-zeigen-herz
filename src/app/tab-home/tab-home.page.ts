import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {ExplainModalComponent} from "../shared/explain-modal/explain-modal.component";
import {TranslateService} from "@ngx-translate/core";

import en from "../../assets/i18n/en.json";
import de from "../../assets/i18n/de.json";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  language: string = this.translateService.currentLang;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private modalCtrl: ModalController, private toastController: ToastController, private translateService: TranslateService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit()
  {
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  async openExplainModal() {
    const modal = await this.modalCtrl.create({
      component: ExplainModalComponent,

    });

    modal.present().then();
}
  // ----------------------------------------------------------------------------------------------

  copyText() {

    const text = this.language === "en" ? de.homePage.shareMessage : en.homePage.shareMessage;

    navigator.clipboard.writeText(text).then(
      () => {
        this.presentToast().then();
      }
    );
  }

  // ----------------------------------------------------------------------------------------------

  switchLanguage() {
    const lang = this.translateService.currentLang === "de" ? "en" : "de";
    this.translateService.use(lang);
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Nachricht Kopiert',
      duration: 1500,
      position: 'bottom',
      color: 'medium'
    });

    await toast.present();
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
