import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {AuthZoneActivation} from "./auth-zone/auth-zone.activation";
import {InternalZoneActivation} from "./internal-zone/internal-zone.activation";
import {RouterModule} from "@angular/router";
import {MdToolbarModule, MdSidenavModule, MdListModule} from "@angular/material";
import {AddCoinModule} from "../shared/add-coin/add-coin.module";

@NgModule({
  imports: [
    RouterModule,

    MdToolbarModule,
    MdSidenavModule,
    MdListModule,

    AddCoinModule
  ],
  declarations: [
    AuthZoneComponent,
    InternalZoneComponent,
  ],
  providers: [
    AuthZoneActivation,
    InternalZoneActivation
  ]
})
export class ZonesModule {}
