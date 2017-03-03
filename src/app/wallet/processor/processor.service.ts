import {Injectable} from "@angular/core";
import {AngularFire} from "angularfire2";

@Injectable()
export class ProcessorService {
  walletSubscriber: any;

  constructor(private af: AngularFire) {
    this.walletSubscriber = af.database.list('/wallet').subscribe((snapshot) => {
      console.log(snapshot);
    });
  }

  destroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
