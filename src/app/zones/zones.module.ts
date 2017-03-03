import {NgModule} from "@angular/core";
import {AuthZoneComponent} from "./auth-zone/auth-zone.component";
import {InternalZoneComponent} from "./internal-zone/internal-zone.component";
import {AuthZoneActivation} from "./auth-zone/auth-zone.activation";
import {InternalZoneActivation} from "./internal-zone/internal-zone.activation";
import {RouterModule} from "@angular/router";
import {MdToolbarModule, MdSidenavModule, MdListModule, MdButtonModule, MdIconModule} from "@angular/material";
import {AddCoinComponent} from "../shared/add-coin/add-coin.component";

@NgModule({
  imports: [
    RouterModule,

    MdToolbarModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [
    AuthZoneComponent,
    InternalZoneComponent,

    AddCoinComponent
  ],
  providers: [
    AuthZoneActivation,
    InternalZoneActivation
  ]
})
export class ZonesModule {}
