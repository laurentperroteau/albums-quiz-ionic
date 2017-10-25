import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { User } from 'firebase/app';

import { FIRST_PAGE_RUN, ROOT_MENU } from '../pages';
import { UserService } from './core';

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
      <button menuClose ion-item *ngIf="!isLogin" (click)="login()">
        Login
      </button>
      <button menuClose ion-item *ngIf="isLogin" (click)="logout()">
        Logout
      </button>
    </ion-list>
    <ion-footer>
      <div ion-item item-end *ngIf="isLogin">
        Bonjour {{ user.displayName }}
      </div>
    </ion-footer>
  </ion-content>

</ion-menu>
<ion-nav #content [root]="rootPage"></ion-nav>
`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = FIRST_PAGE_RUN;
  menu = ROOT_MENU;

  user: User;
  isLogin = false;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private _userService: UserService,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      console.log('user$', this._userService.user$);
      this._userService.user$.subscribe(u => {
        console.log('app user', u);
        this.user = u;
        this.isLogin = this.user && !this.user.isAnonymous;
      });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  login() {
    this._userService.login();
  }

  logout() {
    this._userService.logout();
  }
}

