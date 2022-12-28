import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {ExplainModalComponent} from "../shared/explain-modal/explain-modal.component";

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private modalCtrl: ModalController, private toastController: ToastController)
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

  navToPartner() {
    console.log('partner');
  }


  // ----------------------------------------------------------------------------------------------

  async openExplainModal() {
    const modal = await this.modalCtrl.create({
      component: ExplainModalComponent,
    });

    modal.present().then();
}
  // ----------------------------------------------------------------------------------------------

  copyText() {
    navigator.clipboard.writeText('Hello').then(
      () => {
        this.presentToast().then();
      }
    );
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
