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
    const headers = new HttpHeaders({Authorization: 'Bearer BQA16zZitRZd0g4NjrFS4gr-jg_qZNi_p0wycgsXQ-Egx6BbDIwsWzvHghp8UdpHVHyG5FmCYZQxFoozAz0'});

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtist(term: string) {

    // tslint:disable-next-line: max-line-length
    const headers = new HttpHeaders({Authorization: 'Bearer BQA16zZitRZd0g4NjrFS4gr-jg_qZNi_p0wycgsXQ-Egx6BbDIwsWzvHghp8UdpHVHyG5FmCYZQxFoozAz0'});

    return this.httpClient.get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {headers});
  }

}
