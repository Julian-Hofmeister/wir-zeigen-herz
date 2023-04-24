import {Component, OnInit, ViewChild} from '@angular/core';
import {PartnerService} from './partner.service';
import {TranslateService} from "@ngx-translate/core";
import {IonModal} from "@ionic/angular";

import {Category} from './categories';
import {Partner} from './partner.interface';

import categories from "../../assets/i18n/categories.json"
import partnerData from "../../assets/i18n/partner.json";
import {Country} from "./countries";
import {Preferences} from "@capacitor/preferences";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tab-partner',
  templateUrl: './tab-partner.page.html',
  styleUrls: ['./tab-partner.page.scss'],
})
export class TabPartnerPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @ViewChild('selectCategory') categoryFilter: HTMLIonSelectElement;

  @ViewChild(IonModal) modal: IonModal;

  @ViewChild('popover') popover;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  searchTerm = '';
  filteredPartner: Partner[] = [];
  filter: Category = undefined;

  partner: Partner[];
  loadedPartner: Partner[];
  categories: Category[];
  countries: string[];

  language: string = this.translateService.currentLang;
  country: string;
  countryName: string;

  isModalOpen = false;

  isCountryPopoverOpen = false;

  isCategoryPopoverOpen = false;

  // notShowAgain = localStorage.getItem('notShowAgain');
  notShowAgain = false;

  timeout: any = null;

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
    this.countries = ["germany", "austria", "switzerland", "worldwide"];
    this.loadedPartner = partnerData;
  }

  // ----------------------------------------------------------------------------------------------

  async ionViewDidEnter() {
    this.language = this.translateService.currentLang;
    await this.getCountry().then(r =>{
        this.fillPartner()
    })
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////



  filterList(evt: any) {

    clearTimeout(this.timeout);
    const $this = this;
    this.timeout = setTimeout(function () {
      if (evt.keyCode != 13) {
        $this.searchTerm = evt.srcElement.value;

        if (!$this.searchTerm) {return;}

        $this.filteredPartner = $this.partnerService.filterList($this.searchTerm, $this.partner);

        $this.onClearCategoryFilter();
      }
    }, 1000);




  }

  // ----------------------------------------------------------------------------------------------

  filterCategories(evt: any) {
    this.filter = evt.detail.value;

    this.filteredPartner = this.partnerService.filterCategories(this.filter.id, this.partner);

    this.searchTerm = '';
  }

  // ----------------------------------------------------------------------------------------------

  onClearCategoryFilter(){
    this.filter = undefined;
  }

  // ----------------------------------------------------------------------------------------------

  async selectCountry(evt: any) {
    this.country = evt.detail.value;

    await Preferences.set({
      key: 'country',
      value: JSON.stringify(this.country),
    });

    this.fillPartner();

    this.closeCountryModal();
  }

  // ----------------------------------------------------------------------------------------------

  openCountryModal() {
    this.isModalOpen = true;
  }

  // ----------------------------------------------------------------------------------------------

  closeCountryModal() {
    this.isModalOpen = false;
  }

  // ----------------------------------------------------------------------------------------------

  openCategoryPopover() {
    this.isCategoryPopoverOpen = true;
  }

  // ----------------------------------------------------------------------------------------------

  showNotAgain() {
    localStorage.setItem('notShowAgain', 'true');
    this.notShowAgain = true;
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private async getCountry() {
    await Preferences.get({key: 'country'}).then(
      (country) => {
        if (country.value) {
          this.country = JSON.parse(country.value)
        } else {
            this.isCountryPopoverOpen = true;
        }
      }
    );
  }

  // ----------------------------------------------------------------------------------------------

  fillPartner() {
    this.partner = [];

    for (let partner of this.loadedPartner) {
      if (this.country === "germany" && partner.linkDE !== "") {
        this.partner.push(partner);
      } else if (this.country === "austria" && partner.linkAT !== "") {
        this.partner.push(partner);
      } else if (this.country === "switzerland" && partner.linkCH !== "") {
        this.partner.push(partner);
      } else if (this.country === "worldwide" && partner.linkWW !== "") {
        this.partner.push(partner);
      }
    }
  }
  //#endregion
}
