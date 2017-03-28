import {Component} from "@angular/core";
import {WalletService} from "../../wallet/wallet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'outcomes',
  templateUrl: './outcomes.html',
  styleUrls: ['./outcomes.scss']
})
export class OutcomesComponent {
  data: any;
  groupBy: string = 'record';

  routeSubscriber: any;
  walletSubscriber: any;

  constructor(private walletService: WalletService, private route: ActivatedRoute) {
    this.routeSubscriber = this.route.params.subscribe((params) => {
      this.groupBy = params['groupBy'];
      this.sync();
    });
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      this.data = data.filter((coin) => {
        return !coin.income ? coin : false;
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscriber && this.routeSubscriber.unsubscribe();
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
