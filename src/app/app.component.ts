import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './shared/authentication.service';

import { TranslateService } from '@ngx-translate/core';
import {AndroidFullScreen} from "@awesome-cordova-plugins/android-full-screen";
import {PartnerService} from "./shared/partner.service";
// import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen/ngx';


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

  constructor(public authService: AuthenticationService, private translate: TranslateService, private partnerService: PartnerService)
  {
    this.initializeApp();
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit()
  {


   this.authService.autoAuthentication().then();

    this.partnerService.loadPartner().then();

    // AndroidFullScreen.isImmersiveModeSupported()
    //   .then(() => AndroidFullScreen.immersiveMode())
    //   .catch(console.warn);
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

