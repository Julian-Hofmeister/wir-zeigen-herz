import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {ExplainModalComponent} from "../shared/explain-modal/explain-modal.component";
import {TranslateService} from "@ngx-translate/core";

import en from "../../assets/i18n/en.json";
import de from "../../assets/i18n/de.json";
import {Partner} from "../tab-partner/partner.interface";
import {PartnerService} from "../shared/partner.service";
import {Share} from "@capacitor/share";
import {Question} from "./questions.interface";
import {Preferences} from "@capacitor/preferences";
import {Country} from "../tab-partner/countries";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  // news: News[];

  latestPartner: Partner[];

  questionsDE: Question[];
  questionsEN: Question[];

  language: string = this.translateService.currentLang;

  country: Country

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private translateService: TranslateService,
    private partnerService: PartnerService
  ) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.latestPartner = this.partnerService.getLatestPartner();

    this.questionsDE = de.homePage.QA;
    this.questionsEN = en.homePage.QA;

    this.getCountry().then();


  }


  ionViewWillEnter() {
    this.getCountry().then()
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

  private async getCountry() {
    await Preferences.get({key: 'country'}).then(
      (country) => {
        if (country.value) {
          this.country = JSON.parse(country.value)
        }
      }
    );
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
