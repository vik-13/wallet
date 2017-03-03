import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {

  constructor(private dialog: MdDialog) {}

  add() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((params) => {
      console.log('dialog is just closed');
    });
  }
}
