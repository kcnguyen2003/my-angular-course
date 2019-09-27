import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../shared/album.service";
import { Album } from "../album.model";
import { Observable } from 'rxjs';
/*import { ALBUMS } from "../albums.data";*/

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styleUrls: ["./album-list.component.css"]
})
export class AlbumListComponent implements OnInit {
  /*albumsArray: Album[];*/
  albumsArray: Observable<Album[]>;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    /*this.albumsArray = ALBUMS;*/
    this.getAlbums();
  }

  parentFunctionHandler(album) {
    alert(
      "Album " + album.album_name + " was sent from the album card component"
    );
  }

  getAlbums() {
    this.albumsArray = this.albumService.getAlbums();
    /* step 1 - remove subscribe
    this.albumService.getAlbums().
    subscribe(
      albums => this.albumsArray = albums,
      error => console.log("Error: ", error)
    );*/
  }
}
