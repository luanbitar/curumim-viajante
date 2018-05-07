import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: Observable<firebase.User>;
  private currentUser: firebase.User;
  public authInstance: Subscription;

  constructor(
    private af: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.authState = af.authState;
  }

  public googleLogin() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public gitHubLogin() {
    return this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  public facebookLogin() {
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  public regularLogin(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  public logout() {
    return this.af.auth.signOut();
  }

  get authenticated(): boolean {
    let currentUser: firebase.User;
    const instance = this.authState.subscribe(user => {
      user ? currentUser = user : currentUser = null;
    });
    instance.unsubscribe();
    return currentUser !== null;
  }

  get user(): Observable<firebase.User> {
    return this.authState;
  }

}
