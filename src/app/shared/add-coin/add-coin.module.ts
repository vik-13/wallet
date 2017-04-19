import {NgModule} from "@angular/core";
import {AddCoinComponent} from "./add-coin.component";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {
  MdButtonModule, MdIconModule, MdDialogModule, MdInputModule, MdSlideToggleModule,
  MdChipsModule, MdSelectModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {DateSelectModule} from "../date-select/date-select.module";

@NgModule({
  imports: [
    FormsModule,

    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    MdSlideToggleModule,
    MdChipsModule,
    MdSelectModule,

    DateSelectModule
  ],
  exports: [
    AddCoinComponent
  ],
  declarations: [
    AddCoinComponent,
    AddDialogComponent
  ],
  entryComponents: [
    AddDialogComponent
  ]
})
export class AddCoinModule {}
