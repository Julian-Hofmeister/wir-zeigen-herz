import {Component, OnInit, ViewChild} from '@angular/core';
import {Partner} from './partner.interface';
import {Observable, Subscription} from 'rxjs';
import {FirebaseService} from '../shared/firebase.service';
import {PartnerService} from './partner.service';
import {categories, Category} from './categories';

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


  loadedPartner$: Observable<Partner[]>;

  loadedCategories = categories;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public fsService: FirebaseService, public partnerService: PartnerService)
  {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit()
  {
    this.loadedPartner$ = await this.fsService.get('partner') as Observable<Partner[]>;
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

    const partnerSub: Subscription = this.loadedPartner$.subscribe(data => {
      const partner = data as Partner[];

     this.filteredPartner = this.partnerService.filterList(this.searchTerm, partner);
    });

    partnerSub.unsubscribe();
  }


  // ----------------------------------------------------------------------------------------------

  filterCategories(evt: any) {
    this.filter = evt.detail.value;

    const partnerSub: Subscription = this.loadedPartner$.subscribe(data => {
      const partner = data as Partner[];

      this.filteredPartner = this.partnerService.filterCategories(this.filter, partner);

    });

    partnerSub.unsubscribe();
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
