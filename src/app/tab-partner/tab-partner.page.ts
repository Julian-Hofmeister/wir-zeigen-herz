import {Component, OnInit, ViewChild} from '@angular/core';
import {Partner} from './partner.interface';
import {PartnerService} from './partner.service';
import {Category} from './categories';
import en from "../../assets/i18n/en.json";
import de from "../../assets/i18n/de.json";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-tab-partner',
  templateUrl: './tab-partner.page.html',
  styleUrls: ['./tab-partner.page.scss'],
})
export class TabPartnerPage implements OnInit {


  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @ViewChild('selectCategory') categoryFilter: HTMLIonSelectElement;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  searchTerm = '';
  filteredPartner: Partner[] = [];

  filter: Category = undefined;

  partner: Partner[];
  categories: Category[];

  language: string = this.translateService.currentLang;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private translateService: TranslateService, public partnerService: PartnerService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    if (this.language === "en") {
      this.partner = en.partnerPage.partner
      this.categories = en.partnerPage.categories
    } else {
      this.partner = de.partnerPage.partner
      this.categories = de.partnerPage.categories
    }
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

    this.filteredPartner = this.partnerService.filterList(this.searchTerm, this.partner);
  }


  // ----------------------------------------------------------------------------------------------

  filterCategories(evt: any) {
    this.filter = evt.detail.value;

    this.filteredPartner = this.partnerService.filterCategories(this.filter, this.partner);

  }

  // ----------------------------------------------------------------------------------------------

  onClearCategoryFilter(){
    this.filter = undefined;
    this.categoryFilter.value = undefined;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
