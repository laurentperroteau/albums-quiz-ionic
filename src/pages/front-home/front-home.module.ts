import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrontHomePage } from './front-home';

import { SharedModule } from '../../app/shared/shared.module';

@NgModule({
  declarations: [
    FrontHomePage,
  ],
  imports: [
    IonicPageModule.forChild(FrontHomePage),
    SharedModule,
  ],
})
export class FrontHomePageModule {}
