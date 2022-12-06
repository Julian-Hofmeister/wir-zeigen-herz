import { Injectable } from '@angular/core';
import {Project} from './project.interface';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, shareReplay} from 'rxjs/operators';
import {FirebaseService} from '../shared/firebase.service';



@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor() {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
