import { Injectable } from '@angular/core';
import {Preferences} from "@capacitor/preferences";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  latestPartner = []

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor()
  {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async addPartner(partner) {
    if (this.latestPartner.includes(partner)) {
      const index = this.latestPartner.indexOf(partner);
      this.latestPartner.splice(index, 1);
    }

    this.latestPartner.unshift(partner)

    if (this.latestPartner.length > 3) {
      this.latestPartner.length = 3;
    }

    await Preferences.set({
      key: 'latest-partner',
      value: JSON.stringify(this.latestPartner),
    });
  }

  // ----------------------------------------------------------------------------------------------

  async loadPartner() {
    await Preferences.get({key: 'latest-partner'}).then(
      (partner) => {
        if (partner.value) {
          this.latestPartner = JSON.parse(partner.value)
        }
      }
    );

    console.log(this.latestPartner)
  }

  // ----------------------------------------------------------------------------------------------

  getLatestPartner(){
    return this.latestPartner
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}

