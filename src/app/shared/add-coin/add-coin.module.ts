import {NgModule} from "@angular/core";
import {AddCoinComponent} from "./add-coin.component";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {MdButtonModule, MdIconModule, MdDialogModule} from "@angular/material";

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdDialogModule
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
