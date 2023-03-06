import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../tab-projects/project.interface';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {FirebaseService} from '../shared/firebase.service';
import {Partner} from './partner.interface';
import {Category} from './categories';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor() {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  filterList(searchTerm: string, partner: Partner[]): Partner[] {
    return partner.filter((currentPartner) => {
      if (currentPartner.name && searchTerm) {
        return (
          currentPartner.name
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1
        );
      }
    });
  }

  // ----------------------------------------------------------------------------------------------

  filterCategories(filter: string, partners: Partner[]): Partner[] {
    const filteredPartner: Partner[] = [];

    partners.forEach((partner) => {
      if(partner.categoryId !== filter) {return;}

      filteredPartner.push(partner);

    });

    return filteredPartner;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
