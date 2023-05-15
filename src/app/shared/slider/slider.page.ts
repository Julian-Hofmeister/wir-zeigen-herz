import { Component, OnInit } from '@angular/core';
import {Share} from "@capacitor/share";
import {NavController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";
import en from '../../../assets/i18n/en.json'
import de from '../../../assets/i18n/de.json'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  language: string = this.translateService.currentLang;


  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private navCtrl: NavController, private translateService: TranslateService)
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

  async shareMessage() {

    const lang = this.language === "de" ? de : en;

    //
    // if (navigator.share) {
    //   navigator.share({
    //     title: 'Wir Zeigen Herz',
    //     text: lang.explainPage.copyMessage,
    //     url: lang.explainPage.videoLink,
    //   })
    //     .then(() => console.log('Successful share'))
    //     .catch((error) => console.log('Error sharing', error));
    // }


    await Share.share({
      title: 'Wir Zeigen Herz',
      text: lang.explainPage.copyMessage,
      url: lang.explainPage.videoLink,
      dialogTitle: lang.explainPage.shareMsg,
    });

  }

  // ----------------------------------------------------------------------------------------------

  onClose(){
    this.navCtrl.navigateBack("/tabs/tab-home");
  }
  // ----------------------------------------------------------------------------------------------

  nextPage(slide) {
      slide.slideNext()
  }

  // ----------------------------------------------------------------------------------------------

  watchVideo() {
    const lang = this.language === "de" ? de : en;

    const url = 'https://www.' + lang.explainPage.videoLink

    window.open(url, "_blank");
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
