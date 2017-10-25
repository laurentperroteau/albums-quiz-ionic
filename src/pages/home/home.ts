import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService } from '../../app/core/services/user.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button icon-only menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>{{ title }}</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <button ion-button icon-start>
    <ion-icon name="trophy"></ion-icon>
    Répondre aux questions
  </button>

  <button *ngIf="(isLogin | async)" ion-button icon-end (click)="goToBO()">
    <ion-icon name="add"></ion-icon>
    Créer des questions
  </button>
</ion-content>
`
})
export class HomePage {
  title = 'Albums Quiz';
  isLogin: Observable<boolean> = Observable.of(false);

  constructor(
    private _navCtrl: NavController,
    private _userService: UserService) {
    this.isLogin = _userService.isLogin();
  }

  goToBO() {
    this._userService.isLogin().subscribe(isLogin => {
      if (isLogin) {
        console.log('go to bo');
      }
    });
  }
}
