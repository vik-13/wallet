import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {WalletService} from "../../wallet/wallet.service";

@Injectable()
export class InternalZoneActivation implements CanActivate{
  isAuthorized: Observable<boolean>;
  authSubscriber: any;

  constructor(private af: AngularFire, private router: Router, private wallet: WalletService) {
    this.isAuthorized = new Observable((observer) => {
      this.authSubscriber = this.af.auth.subscribe((auth) => {
        if (!auth) {
          this.router.navigate(['/sign-in']);
          this.authSubscriber.unsubscribe();
        } else {
          this.wallet.setOwnerId(auth.uid);
        }
        observer.next(!!auth);
      });
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized;
  }
}
