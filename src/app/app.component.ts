import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/authentication.service';

import { TranslateService } from '@ngx-translate/core'; // add this


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public authService: AuthenticationService, private translate: TranslateService)
  {
    this.initializeApp();
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit()
  {
   this.authService.autoAuthentication().then();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  initializeApp() {
    this.translate.setDefaultLang('de'); // add this
    this.translate.use('de'); //--> I didn't had this line before
    // this.translate.use(this.translate.getBrowserLang()); //--> I didn't had this line before
  }

  // ----------------------------------------------------------------------------------------------

  //#endregions

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}

