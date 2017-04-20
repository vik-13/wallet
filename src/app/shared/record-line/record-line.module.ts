import {NgModule} from "@angular/core";
import {MdButtonModule, MdDialog, MdDialogModule, MdIconModule, MdMenuModule} from "@angular/material";
import {RecordLineComponent} from "./record-line.component";

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdDialogModule
  ],
  declarations: [
    RecordLineComponent
  ],
  exports: [
    RecordLineComponent
  ]
})
export class RecordLineModule {}
