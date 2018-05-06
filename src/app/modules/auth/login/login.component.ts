import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data: any;
  public authState: any;
  public authInstance: Subscriber<any>;
  public doc: AngularFirestoreDocument<any>;

  public input: string;
  constructor(
    private db: AngularFirestore,
    private service: AuthService
  ) { }

  ngOnInit() {
  }

  public handleUser() {
    if (this.authInstance) {
      this.authInstance.unsubscribe();
    }
    this.authInstance = this.authState.subscribe(user => {
      user ? this.data = user : this.data = null;
    });
  }

  public updateUser() {
    this.authState = this.service.user;
    this.handleUser();
  }

  public login() {
    this.service.googleLogin();
    this.updateUser();
  }

  public logout() {
    this.data = this.service.logout();
    this.updateUser();
  }

}
