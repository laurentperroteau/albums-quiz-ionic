import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

// TODO: créer type pour firebase.user, afin de ne pas importer tout firebase à chaque fois
@Injectable()
export class UserService {
  user$: Observable<firebase.User>;
  triedConnectedOnLoad = false;

  constructor(
    private _afAuth: AngularFireAuth) {
    this.user$ = this._afAuth.authState;

    this.user$.subscribe(u => {
      // Try to conect once on load
      if (!this.triedConnectedOnLoad) {
        if (!u.displayName) {
          this.login();
        } else {
          // Sign anonymously until login
          this._afAuth.auth.signInAnonymously();
        }
        this.triedConnectedOnLoad = true;
      }
    });
  }

  login() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isLogin(): Observable<boolean> {
    return this.user$.map(u => u && !u.isAnonymous);
  }

  logout() {
    this._afAuth.auth.signOut();
  }
}
