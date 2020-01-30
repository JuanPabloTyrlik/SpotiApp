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

  getQuery(query: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({Authorization: 'Bearer BQBDPdM85thsF2qqheHJzUbukl0LsvL9stt54D6ZH41CExgu1ZGTbz-1FQSu66hAnRU5uj0rbHdrXKQO1Vc'});
    return this.httpClient.get(URL, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

}
