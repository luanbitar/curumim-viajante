import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs';

import { AuthService } from '../auth.service';
import { EqualValues } from '../../../utils/equal-values';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fallOut', [
      state('social', style({
        opacity: '1',
        transform: 'translateY(0px)',
        display: 'flex'
      })),
      state('email', style({
        opacity: '0',
        transform: 'translateY(108px)',
        display: 'none'
      })),
      transition('social => email', animate('150ms ease-out')),
      transition('email => social', animate('0ms'))
    ]),
    trigger('fallIn', [
      state('social', style({
        display: 'none',
        opacity: '0',
        transform: 'translateY(-108px)'
      })),
      state('email', style({
        display: 'flex',
        opacity: '1',
        transform: 'translateY(0px)'
      })),
      transition('social => email', animate('150ms 150ms ease-out')),
      transition('email => social', animate('0ms'))
    ])
  ]
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
  public loginType = 'social';

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
