import {Component} from "@angular/core";
import {WalletService} from "../../wallet/wallet.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  data: any;

  walletSubscriber: any;

  constructor(private walletService: WalletService) {
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      this.data = data.map((coin) => {
        return coin;
      });
      console.log('incomes', this.data);
    });
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
