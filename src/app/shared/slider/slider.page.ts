import { Component, OnInit } from '@angular/core';
import {Share} from "@capacitor/share";
import {NavController} from "@ionic/angular";

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

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private navCtrl: NavController)
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
    await Share.share({
      title: 'Wir Zeigen Herz',
      text: 'Hey. Schau dir bitte unbedingt das Video an. Du wirst begeistert sein versprochen. Es geht darum, Gutes zu tun und das ohne Geld zu spenden oder Zeit zu investieren. Also ich bin definitiv dabei.',
      url: 'https://vimeo.com/770214670',
      dialogTitle: 'Mit Freunden teilen',
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

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
