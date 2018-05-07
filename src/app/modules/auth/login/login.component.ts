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
  public data: Observable<any[]>;
  public showLoading = true;

  constructor(
    private db: AngularFirestore,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.data = this.db.collection('notes').valueChanges();
    this.data.subscribe(() => this.showLoading = false);
  }

  public login() {
    this.auth.googleLogin().then(res => {
    });
    // this.auth.regularLogin('123', '123');
  }

  public logout() {
    this.auth.logout();
  }

}
