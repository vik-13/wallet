import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {MdIconModule, MdButtonModule, MdDialogModule} from "@angular/material";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";

@NgModule({
  imports: [
    MdIconModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [
    AddDialogComponent,
    DashboardComponent
  ],
  entryComponents: [
    AddDialogComponent
  ]
})
export class DashboardModule {}
