import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AddAlbumComponent } from './add-album/add-album.component';



@NgModule({
  declarations: [
    AlbumCardComponent,
    AlbumListComponent,
    AlbumDetailsComponent,
    AddAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    FormsModule
  ]
})

export class AlbumsModule { }
