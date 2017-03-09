import {NgModule} from "@angular/core";
import {OutcomesComponent} from "./outcomes.component";
import {MdListModule, MdIconModule} from "@angular/material";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,

    MdListModule,
    MdIconModule
  ],
  declarations: [
    OutcomesComponent
  ]
})
export class OutcomesModule {}
