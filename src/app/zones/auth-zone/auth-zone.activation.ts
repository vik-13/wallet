import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class AuthZoneActivation implements CanActivate{
  isAuthorized: Observable<boolean>;
  authSubscriber: any;

  constructor(private af: AngularFire, private router: Router) {
    this.isAuthorized = new Observable((observer) => {
      this.authSubscriber = this.af.auth.subscribe((auth) => {
        if (auth) {
          this.router.navigate(['/dashboard']);
          this.authSubscriber.unsubscribe();
        }
        observer.next(!auth);
      });
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthorized;
  }
}
