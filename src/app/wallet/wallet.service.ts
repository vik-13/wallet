import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class WalletService {
  walletObservable: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.walletObservable = this.af.database.list('/wallet');
  }

  add(coin) {
    return this.walletObservable.push(coin);
  }

  update(key, coin) {
    return this.walletObservable.update(key, coin);
  }

  remove(key) {
    return this.walletObservable.remove(key);
  }
}
