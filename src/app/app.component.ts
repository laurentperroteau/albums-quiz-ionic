import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIRST_PAGE_RUN, ROOT_MENU } from '../pages';

@Component({
  template: `
<ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list>
      <button menuClose ion-item *ngFor="let p of menu" (click)="openPage(p)">
        {{ p.title }}
      </button>
    </ion-list>
  </ion-content>

</ion-menu>
<ion-nav #content [root]="rootPage"></ion-nav>
  `
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = FIRST_PAGE_RUN;
  menu = ROOT_MENU;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

