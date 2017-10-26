import { Observable } from 'rxjs/Rx';

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Album } from '../../core';

import { AlbumService } from '../../core/services/album.service';

@Component({
  selector: 'app-album-list',
  template: `
    coucou
    <ul>
      <li *ngFor="let album of albumsByUser$ | async">
        <a (click)="goToAlbum()">
          {{ album.name }} ({{ album.year }})
        </a>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumListComponent implements OnInit {
  albumsByUser$: Observable<Album[]>;

  @Input() baseLink: string[];
  @Input() restrictByUser = true;

  constructor(private _albumService: AlbumService) {
    console.log('this.restrictByUser', this.restrictByUser);
  }

  ngOnInit() {
    this.albumsByUser$ = this.restrictByUser ? this._albumService.getListByUser() : this._albumService.getList();
  }

  goToAlbum() {

  }
}
