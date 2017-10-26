import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
// import { QuestionService } from './services/question.service';
import { AlbumService } from './services/album.service';
// import { UserAlbumsService } from './services/userAlbums.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  providers: [
    RequestService,
    UserService,
    // QuestionService,
    AlbumService,
    // UserAlbumsService,
  ],
  exports: []
})
export class CoreModule { }
