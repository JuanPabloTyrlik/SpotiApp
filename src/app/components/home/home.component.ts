import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  loading = true;
  error = false;
  message: string;

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().then((obs) =>
      obs.subscribe(
        (data: any) => {
          this.newReleases = data;
          this.loading = false;
        },
        (error) => {
          this.loading = false;
          this.error = true;
          this.message = error.error.error.message;
        }
      )
    );
  }

  ngOnInit() { }
}
