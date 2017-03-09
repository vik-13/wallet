import {Component} from "@angular/core";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'outcomes',
  templateUrl: './outcomes.html',
  styleUrls: ['./outcomes.scss']
})
export class OutcomesComponent {
  data: any;

  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      this.data = data.filter((coin) => {
        return !coin.income ? coin : false;
      });
      console.log('outcomes', this.data);
    });
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
