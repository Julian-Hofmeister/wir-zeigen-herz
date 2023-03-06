import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, shareReplay} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////


  data: any;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public route: ActivatedRoute, public navCtrl: NavController,) {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getUrlData() {
    this.route.data.subscribe(data => {
      this.data = data;

      console.log(data);
    });

    return this.data;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
