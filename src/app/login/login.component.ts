import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import {User} from '../common/model/user';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm: SignInData = <SignInData>{};
  minLength = 8;
  loading = false;
  constructor(private _tokenService: Angular2TokenService, private _router: Router, private _snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  onLoginFormSubmit(form) {
    this.loading = true;
    this._tokenService.signIn(form).subscribe(
      response => {
        const loginSuccessData = response.json().data;
        if (loginSuccessData && response.headers.get('access-token')) {
          this.loading = false;
          this._router.navigate(['']);
        }
      },
      error => {
        this.loading = false;
        this._snackBar.open('Invalid Login credential', null, {duration: 2000});
        this.loading = false;
        console.log(error);
      }
    );
  }
}
