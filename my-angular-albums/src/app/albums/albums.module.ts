import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumDetailsComponent } from './album-details/album-details.component';



@NgModule({
  declarations: [
    AlbumCardComponent,
    AlbumListComponent,
    AlbumDetailsComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ]
})

export class AlbumsModule { }
