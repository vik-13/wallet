import {NgModule} from "@angular/core";
import {OutcomesComponent} from "./outcomes.component";
import {MdListModule, MdIconModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {DayComponent} from "./day/day.component";
import {MonthComponent} from "./month/month.component";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,
    MdIconModule
  ],
  declarations: [
    OutcomesComponent,

    DayComponent,
    MonthComponent
  ]
})
export class OutcomesModule {}
