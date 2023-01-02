import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDgRqHk09ZPFwcCRK2GsVpxKJizdUc6PCw',
  authDomain: 'wir-zeigen-herz.firebaseapp.com',
  projectId: 'wir-zeigen-herz',
  storageBucket: 'wir-zeigen-herz.appspot.com',
  messagingSenderId: '360631606900',
  appId: '1:360631606900:web:1654b6cf0c99c05b4cbb21',
  measurementId: 'G-Y4DWGNCV3F'
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;

export const createTranslateLoader = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');


@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
