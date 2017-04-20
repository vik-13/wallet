import {NgModule} from "@angular/core";
import {OutcomesComponent} from "./outcomes.component";
import {MdListModule, MdIconModule, MdButton, MdButtonModule, MdMenuModule, MdDialog} from "@angular/material";
import {CommonModule} from "@angular/common";
import {DayComponent} from "./day/day.component";
import {MonthComponent} from "./month/month.component";
import {RecordDialogModule} from "../../shared/record-dialog/record-dialog.module";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule,

    RecordDialogModule
  ],
  declarations: [
    OutcomesComponent,

    DayComponent,
    MonthComponent
  ]
})
export class OutcomesModule {}
