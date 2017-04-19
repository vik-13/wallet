import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'add-dialog',
  templateUrl: './add-dialog.html',
  styleUrls: ['./add-dialog.scss']
})
export class AddDialogComponent {

  constructor(public dialogRef: MdDialogRef<AddDialogComponent>) {}

  submit(form) {
    console.log(form.value);
    //this.dialogRef.close(form.value);
  }
}
