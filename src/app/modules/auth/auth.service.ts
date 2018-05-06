import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: Observable<firebase.User>;
  private currentUser: firebase.User;

  constructor(
    private af: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.authState = af.authState;
    // this.authState.subscribe(user => {
    //   if (user) {
    //     this.currentUser = user;
    //   } else {
    //     this.currentUser = null;
    //   }
    // });
  }

  public googleLogin() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public logout() {
    this.af.auth.signOut();
  }

  get authenticated(): boolean {
    return this.currentUser !== null;
  }

  get user() {
    return this.authState;
  }
}
