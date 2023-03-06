import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private fireAuth: AngularFireAuth)
  {
  }

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  async autoAuthentication() {

    await Preferences.get({key: 'user-id'}).then(
      (user) => {
        if(user.value) {return;}
        this.signInAnonymously();
      }
    );

  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private signInAnonymously() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.signInAnonymously().then(async (data) => {
        resolve(data);
        console.log(data.user.uid);

        await Preferences.set({
          key: 'user-id',
          value: data.user.uid,
        });

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`login failed ${error.message}`);
        // ...
      });
    });
  }

  // createLocalUser() {
  //
  // }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}

