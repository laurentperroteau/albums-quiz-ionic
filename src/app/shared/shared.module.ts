import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumListComponent } from './album-list/album-list.component';
import { QuestionListComponent } from './question-list/question-list.component';

// TODO: importer shared dans une autre page pour vérifier qu'il est chargé qu'une seule fois
@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  declarations: [
    AlbumListComponent,
    // QuestionListComponent,
  ],
  entryComponents: [
    AlbumListComponent,
  ],
  providers: [ /* Push HTTP service in core module */ ],
  exports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,

    // Component shared
    AlbumListComponent,
    // QuestionListComponent,
  ]
})
export class SharedModule { }
