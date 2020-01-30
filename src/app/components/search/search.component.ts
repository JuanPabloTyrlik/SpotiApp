import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService ) { }

  ngOnInit() {
  }

  buscar(term: string) {
    if (term.length > 0) {
      this.loading = true;
      this.spotifyService.getArtists(term).subscribe(
        data => {
          this.artistas = data;

          console.log(data);


          this.loading = false; } );
    } else {
      this.artistas = [];
    }
  }
}
