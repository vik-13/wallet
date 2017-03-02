import {Component} from "@angular/core";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.scss']
})
export class SignInComponent {

  constructor(private af: AngularFire) {}

  submit(form) {
    this.af.auth.login(form.value).catch((response) => {
      console.log(response.message);
    })
  }
}
