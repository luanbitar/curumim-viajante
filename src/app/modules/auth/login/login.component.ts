import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public input: string;
  // public data: Observable<any[]>;
  // public showLoading = true;
  public email: string;
  public password: string;
  public passwordConfirm: string;
  public signUp = false;

  constructor(
    private db: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    // this.data = this.db.collection('notes').valueChanges();
    // this.data.subscribe(() => this.showLoading = false);
  }

  public login(valid: boolean): void {
    if (!valid) return
    else if (this.signUp) this.auth.signUp(this.email, this.password)
    else this.auth.regularLogin(this.email, this.password)
  }

  public logout() {
    this.auth.logout();
  }

}
