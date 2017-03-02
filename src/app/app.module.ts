import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AuthProviders, AuthMethods, AngularFireModule} from "angularfire2";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ZonesModule} from "./zones/zones.module";
import {AuthModule} from "./components/auth/auth.module";
import {DashboardModule} from "./components/dashboard/dashboard.module";

const firebaseConfig = {
  apiKey: "AIzaSyAVdLc4U8vkAMhjDPn5Yu3wrYnhPw5T8CE",
  authDomain: "my-wallet-c466c.firebaseapp.com",
  databaseURL: "https://my-wallet-c466c.firebaseio.com",
  storageBucket: "my-wallet-c466c.appspot.com",
  messagingSenderId: "109350421071"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    MaterialModule.forRoot(),

    AuthModule,
    DashboardModule,
    ZonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
