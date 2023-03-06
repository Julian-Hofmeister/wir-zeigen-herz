import {Component, Input, OnInit} from '@angular/core';
import {Preferences} from "@capacitor/preferences";
import {PartnerService} from "../../shared/partner.service";
import {Partner} from "../../tab-partner/partner.interface";
import {Country} from "../../tab-partner/countries";

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() partner: Partner;
  @Input() country: Country;

  logo: string;

  link: string;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private partnerService: PartnerService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.logo = "assets/imgs/partner/" + this.partner.logoImg;


  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async openLink() {

    if(!this.country) {return}

    this.link = this.country.value === "germany" ?  this.partner.linkDE : this.country.value === "austria" ?  this.partner.linkAT : this.country.value === "switzerland" ?  this.partner.linkCH : this.partner.linkWW

    window.open(this.link);

    await this.partnerService.addPartner(this.partner)


  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

}
