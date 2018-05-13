import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { Subscriber } from 'rxjs';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  public password = new FormControl('', [
    Validators.required
  ]);
  public passwordConfirm = new FormControl('', [
    Validators.required
  ]);
  public signUp = false;

  constructor(
    private db: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  public login(valid: boolean): void {
    if (!valid) {
      return;
    } else if (this.signUp) {
      this.auth.signUp(this.email.value, this.password.value);
    } else {
      this.auth.regularLogin(this.email.value, this.password.value);
    }
  }

  public logout() {
    this.auth.logout();
  }

}
