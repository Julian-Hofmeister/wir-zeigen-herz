import { Component, OnInit } from '@angular/core';
import {Partner} from './partner.interface';

@Component({
  selector: 'app-tab-partner',
  templateUrl: './tab-partner.page.html',
  styleUrls: ['./tab-partner.page.scss'],
})
export class TabPartnerPage implements OnInit {


  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  searchTerm = '';
  filteredPartner: Partner[] = [];

  partner: Partner[] = [
    {
      name: 'Amazon',
      logoImg: '/assets/imgs/partner-logo.png',
      link: 'https://www.amazon.de',
    }
  ];
  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor()
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

  filterList(evt: any) {

    this.searchTerm = evt.srcElement.value;

    if (!this.searchTerm) {return;}


    this.filteredPartner = this.partner.filter((currentPartner) => {
      if (currentPartner.name && this.searchTerm) {
        return (
          currentPartner.name
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) > -1
        );
      }
    });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
