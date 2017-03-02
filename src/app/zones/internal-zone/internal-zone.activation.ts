import {Injectable} from "@angular/core";
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class InternalZoneActivation implements CanActivate{
  constructor(private af: AngularFire, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let isAuthorized: Observable<boolean>;

    isAuthorized = new Observable((observer) => {
      this.af.auth.subscribe((auth) => {
        if (!auth) {
          this.router.navigate(['/sign-in']);
        }
        observer.next(!!auth);
      });
    });

    return isAuthorized;
  }
}
