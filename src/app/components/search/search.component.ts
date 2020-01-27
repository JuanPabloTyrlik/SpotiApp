import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit() {
  }

  buscar(term: string) {
    console.log(term);
    this.spotifyService.getArtist(term).subscribe( data => { console.log(data); this.artistas = data; } );
  }
}
