import {Component} from "@angular/core";
import {MdDialog} from "@angular/material";
import {AddDialogComponent} from "./add-dialog/add-dialog.component";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'add-coin',
  templateUrl: './add-coin.html',
  styleUrls: ['./add-coin.scss']
})
export class AddCoinComponent {

  wallet: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private dialog: MdDialog, private walletService: WalletService) {
    this.wallet = this.af.database.list('/users/' + this.walletService.getOwnerId() + '/wallet');
  }

  showDialog() {
    let dialogRef = this.dialog.open(AddDialogComponent);
    dialogRef.afterClosed().subscribe((params) => {
      params.created = (new Date()).getTime();
      this.wallet.push(params);
      console.log(params);
    });
  }
}
