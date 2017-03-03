import {NgModule} from "@angular/core";
import {AddCoinComponent} from "./add-coin.component";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {MdButtonModule, MdIconModule, MdDialogModule, MdInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,

    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule
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
