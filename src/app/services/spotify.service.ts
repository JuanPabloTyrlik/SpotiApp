import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private token: string;

  constructor(private httpClient: HttpClient) {
    console.log('Spotify Services Listo');
  }

  async getConfig() {
    await this.httpClient
      .get(
        `https://jp-spotify-get-token.herokuapp.com/spotify/3dab70be5b9a42569b5b2536ce2238a8/531aa0e7beec4184b4d304208cefd1df`,
        { observe: 'body', responseType: 'json' }
      )
      .toPromise()
      .then(
        ({
          token_type,
          access_token,
        }: {
          token_type: string;
          access_token: string;
        }) => (this.token = `${token_type} ${access_token}`)
      );
  }

  async getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    await this.getConfig();
    const headers = new HttpHeaders({ Authorization: this.token });
    return this.httpClient.get(URL, { headers });
  }

  async getNewReleases() {
    return (await this.getQuery('browse/new-releases')).pipe(
      map((data) => data['albums'].items)
    );
  }

  async getArtists(term: string) {
    return (await this.getQuery(`search?q=${term}&type=artist&limit=15`)).pipe(
      map((data) => data['artists'].items)
    );
  }

  async getArtist(id: string) {
    return await this.getQuery(`artists/${id}`);
  }

  async getTopTracks(id: string) {
    return (await this.getQuery(`artists/${id}/top-tracks?country=AR`)).pipe(
      map((data) => data['tracks'])
    );
  }
}
