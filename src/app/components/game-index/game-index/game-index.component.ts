import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-game-index',
  templateUrl: './game-index.component.html',
  styleUrls: ['./game-index.component.scss']
})
export class GameIndexComponent implements OnInit {
  games: any = [];
  search: string = '';
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames(this.search).subscribe(res => {
      this.games = res;
      console.log(this.games)
    });
  }

  searchGame() {
    this.gamesService.getGames(this.search).subscribe(res =>
      this.games = res
    );
  }
}
