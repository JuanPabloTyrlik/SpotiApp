import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading = true;

  constructor( private spotifyService: SpotifyService ) {
    this.spotifyService.getNewReleases().subscribe( (data: any) => {
      this.newReleases = data;
      
      console.log(data);
      
      this.loading = false; });
  }

  ngOnInit() {
  }

}
