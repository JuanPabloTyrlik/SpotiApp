import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient ) {
    console.log('Spotify Services Listo');

  }

  getNewReleases() {

    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders({Authorization: 'Bearer BQBNMwy2oQGpB4WYZTuZ2MTUa_WOgc0ofPQYPN8nO66e5NLEAMr3P1WtmzWrlCVtWl9ATm2rzGtIMnXGBY0'});

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
