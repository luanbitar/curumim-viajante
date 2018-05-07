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

  public regularLogin(email: string, password: string): Promise<any> {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  public signUp(email: string, password: string): Promise<any> {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  public logout(): Promise<any> {
    return this.af.auth.signOut();
  }

  public googleLogin(): Promise<any> {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public gitHubLogin(): Promise<any> {
    return this.af.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  public facebookLogin(): Promise<any> {
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  get authenticated(): boolean {
    let currentUser: firebase.User;
    const instance = this.authState.subscribe(user => {
      user ? currentUser = user : currentUser = null;
      instance.unsubscribe();
    });
    return currentUser !== null;
  }

  get user(): Observable<firebase.User> {
    return this.authState;
  }

}
