import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading = true;

  constructor( private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService ) {
    this.activatedRoute.params.subscribe( params => {
        this.getArtist(params['id']);
        this.getTopTracks(params['id']); });
  }

  ngOnInit() {
  }

  getArtist( id: string ) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe( artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false; }
      );
  }

  getTopTracks( id: string ) {
    this.spotifyService.getTopTracks(id).subscribe( topTracks => {
      this.topTracks = topTracks;
    });
  }
}
