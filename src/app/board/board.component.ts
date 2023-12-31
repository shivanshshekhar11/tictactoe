import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
    sqaures: any[];
    xIsNext: boolean;
    winner: String;

    ngOnInit(){
      this.newGame();
    }

    newGame(){
      this.sqaures = Array(9).fill(null);
      this.xIsNext = true;
      this.winner = '';
    }

    get player() {
      return this.xIsNext ? 'X' : 'O';
    }

    makeMove(idx:number){
      if(!this.sqaures[idx]){
        this.sqaures.splice(idx, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
      this.winner = this.calculateWinner();
      if(this.winner){
        this.sqaures = [];
      }
    }

    calculateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.sqaures[a] &&
          this.sqaures[a] === this.sqaures[b] &&
          this.sqaures[a] === this.sqaures[c]
        ) {
          return this.sqaures[a];
        }
      }
      return null;
    }
}
