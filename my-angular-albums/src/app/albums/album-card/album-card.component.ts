import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Album } from "../album.model";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.css"]
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  newPrice: number;

  @Output()
  albumClicked: EventEmitter<Album> = new EventEmitter<Album>();
    
  showAlbum() {
    this.albumClicked.emit(this.album);
  }

  constructor() {}

  ngOnInit() {
    if (this.album.onSale) {
      // Apply 10% discount
      this.newPrice = this.album.price - (this.album.price * .10);
      }
  }
}
