import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs';

import { AuthService } from '../auth.service';
import { EqualValues } from '../../../utils/equal-values';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', Validators.required],
    passwordConfirm: ['', Validators.required]
  }, {
    validator: EqualValues.MatchValues
  });
  public signUp = false;

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  public login(): void {
    if ((this.signUp && this.loginForm.invalid)
    || (!this.signUp && (this.loginForm.controls.email.invalid || this.loginForm.controls.password.invalid))
    ) {
      return;
    } else if (this.signUp) {
      this.auth.signUp(this.loginForm.value.email, this.loginForm.value.password);
    } else {
      this.auth.regularLogin(this.loginForm.value.email, this.loginForm.value.password);
    }
  }

}
