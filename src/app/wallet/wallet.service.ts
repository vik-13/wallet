import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class WalletService {
  ownerId: string;
  walletObservable: FirebaseListObservable<any>;
  walletSubscriber: any;

  wallet: BehaviorSubject<any>;

  constructor(private af: AngularFire) {
    this.wallet = new BehaviorSubject([]);
  }

  setOwnerId(id) {
    this.ownerId = id;
    this.subscribe();
  }

  getOwnerId() {
    return this.ownerId;
  }

  cleanOwnerId() {
    this.unsubscribe();
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

  subscribe() {
    this.walletObservable = this.af.database.list('/users/' + this.ownerId + '/wallet');
    this.walletSubscriber = this.walletObservable.subscribe((snapshot) => {
      this.wallet.next(snapshot);
    });
  }

  unsubscribe() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
