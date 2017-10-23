import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserService } from '../../app/core/services/user.service';

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

  <button ion-button icon-end (click)="goToBO()">
    <ion-icon name="add"></ion-icon>
    Créer des questions
  </button>
</ion-content>
`
})
export class HomePage {
  title = 'Albums Quiz';

  constructor(
    private _navCtrl: NavController,
    private _userService: UserService,) {

  }

  goToBO() {
    this._userService.isLogin().subscribe(isLogin => {
      if (isLogin) {
        console.log('go to bo');
      } else {
        this._userService.login();
      }
    });
  }
}
