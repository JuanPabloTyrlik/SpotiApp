import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient ) {
    console.log('Spotify Services Listo');

  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({Authorization: 'Bearer BQCoq5i_rAjGhPQ62jW2y55FYnw2N_6MHsAfSmOwibF4Nn3bn4tcuSLIRuZ-VfBms4IlSYawSZPqr76qu-U'});
    return this.httpClient.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=AR`).pipe(map(data => data['tracks']));
  }

}
