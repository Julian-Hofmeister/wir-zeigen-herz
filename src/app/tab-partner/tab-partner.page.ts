import {Component, OnInit, ViewChild} from '@angular/core';
import {PartnerService} from './partner.service';
import {TranslateService} from "@ngx-translate/core";
import {IonModal} from "@ionic/angular";

import {Category} from './categories';
import {Partner} from './partner.interface';

import categories from "../../assets/i18n/categories.json";
import partnerData from "../../assets/i18n/partner.json";
import countries from "../../assets/i18n/countries.json";
import {Country} from "./countries";

@Component({
  selector: 'app-tab-partner',
  templateUrl: './tab-partner.page.html',
  styleUrls: ['./tab-partner.page.scss'],
})
export class TabPartnerPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @ViewChild('selectCategory') categoryFilter: HTMLIonSelectElement;

  @ViewChild(IonModal) modal: IonModal;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  searchTerm = '';
  filteredPartner: Partner[] = [];
  filter: Category = undefined;

  partner: Partner[];
  categories: Category[];
  countries: Country[];

  language: string = this.translateService.currentLang;
  country: Country;
  countryName: string;

  isModalOpen = false;


  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private translateService: TranslateService,
    public partnerService: PartnerService) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.categories = categories;
    this.countries = countries;
    this.partner = partnerData as Partner[]


  }


  ionViewWillEnter() {
    if(!this.country) {
      // this.openModal(true);
    }

    this.language = this.translateService.currentLang;
    this.getCountry()

    this.countryName = this.language == "en" ? this.country.nameEN : this.country.nameDE;
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  filterList(evt: any) {
    this.searchTerm = evt.srcElement.value;

    console.log(this.searchTerm)

    if (!this.searchTerm) {return;}

    this.filteredPartner = this.partnerService.filterList(this.searchTerm, this.partner);

    this.onClearCategoryFilter();
  }

  // ----------------------------------------------------------------------------------------------

  filterCategories(evt: any) {
    this.filter = evt.detail.value;

    console.log(this.filter)

    this.filteredPartner = this.partnerService.filterCategories(this.filter.id, this.partner);

  }

  // ----------------------------------------------------------------------------------------------

  onClearCategoryFilter(){
    this.filter = undefined;
    this.categoryFilter.value = null;
  }

  // ----------------------------------------------------------------------------------------------



  // ----------------------------------------------------------------------------------------------

  selectCountry(evt: any) {
    this.country = evt.detail.value;

    localStorage.setItem('country', JSON.stringify(this.country));

    this.countryName = this.language == "en" ? this.country.nameEN : this.country.nameDE;


    this.openModal(false);
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  getCountry(){
      this.country = JSON.parse(localStorage.getItem("country"));

    console.log(this.country);


      if(this.country) {return}

      // this.modal.present().then();
  }

  // ----------------------------------------------------------------------------------------------

  openModal(isOpen: boolean) {
    this.isModalOpen = isOpen;

    console.log(this.isModalOpen)
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
