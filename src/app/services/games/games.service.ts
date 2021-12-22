import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url: string = 'http://localhost:3000/games'

  constructor(private http: HttpClient) { }

  getGames(game: any) {
    return this.http.post(this.url, { search: game });
  }

  getGame(id: number) {
    return this.http.post(`${this.url}/${id}`, {})
  }
}
