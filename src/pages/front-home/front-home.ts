import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-front-home',
  template: `
    <ion-header>
      <ion-navbar>
        <button ion-button icon-only menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
        <ion-title>{{ title }}</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
      <app-album-list 
        [baseLink]="['/quiz', 'album']" 
        [restrictByUser]="false">
      </app-album-list>
    </ion-content>
  `
})
export class FrontHomePage {
  title = "Front";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
