import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";

@Component({
  selector: 'add-coin',
  templateUrl: './add-coin.html',
  styleUrls: ['./add-coin.scss']
})
export class AddCoinComponent {

  constructor(private dialog: MdDialog) {}

  showDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((params) => {
      //TODO: Implement add coin functionality...
    });
  }
}
