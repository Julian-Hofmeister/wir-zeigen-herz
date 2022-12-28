import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-explain-modal',
  templateUrl: './explain-modal.component.html',
  styleUrls: ['./explain-modal.component.scss'],
})
export class ExplainModalComponent implements OnInit {

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

  onClose()  {
    this.modalCtrl.dismiss().then();
  }

  // ----------------------------------------------------------------------------------------------

  copyText() {
    navigator.clipboard.writeText('Hey. Schau dir bitte unbedingt das Video an. Du wirst begeistert sein versprochen. Es geht darum, Gutes zu tun und das ohne Geld zu spenden oder Zeit zu investieren. Also ich bin definitiv dabei. https://vimeo.com/770214670').then(
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

