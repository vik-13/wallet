import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {MdIconModule, MdButtonModule, MdDialogModule} from "@angular/material";
import {ChartsModule} from "ng2-charts";

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {}
