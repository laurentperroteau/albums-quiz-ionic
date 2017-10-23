import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrontHomePage } from './front-home';

@NgModule({
  declarations: [
    FrontHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FrontHomePage),
  ],
})
export class FrontHomePageModule {}
