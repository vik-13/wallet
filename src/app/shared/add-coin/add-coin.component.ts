import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'add-coin',
  templateUrl: './add-coin.html',
  styleUrls: ['./add-coin.scss']
})
export class AddCoinComponent {

  constructor(private dialog: MdDialog, private walletService: WalletService) {}

  showDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((params) => {
      if (params) {
        params.created = (new Date()).getTime();
        this.walletService.add(params);
        console.log(params);
      }
    });
  }
}
