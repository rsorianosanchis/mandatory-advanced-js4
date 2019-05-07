import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    game: [
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}]
    ],
    player: "red",
    winner: null,
    clicks: 0
  };
  handleClick = (clickedX) => {
    const game = [...this.state.game];
    for (let row = game.length - 1; row >= 0; row--) {
      if (!game[row][clickedX].color) {
        const player = this.state.player === "red" ? "yellow" : "red";
        game[row][clickedX].color = this.state.player;
        if (!this.state.winner) {
          this.winCalc();
        }
        this.setState({ player, game, clicks: this.state.clicks + 1 });
        return;
      }
    }
  };
  winCalc = () => {
    const winnerColor = this.state.player;
    const game = [...this.state.game];
    for (let row = 0; row < game.length; row++) {
      for (let col = 0; col < game[row].length; col++) {
        if (game[row][col].color && game[row][col + 3]) {
          if (
            game[row][col].color === winnerColor &&
            game[row][col + 1].color === winnerColor &&
            game[row][col + 2].color === winnerColor &&
            game[row][col + 3].color === winnerColor
          ) {
            this.setState({ winner: this.state.player, clicks: 0 });
            return;
          }
        }
        if (game[row][col].color && game[row + 3]) {
          if (
            game[row][col].color === winnerColor &&
            game[row + 1][col].color === winnerColor &&
            game[row + 2][col].color === winnerColor &&
            game[row + 3][col].color === winnerColor
          ) {
            this.setState({ winner: this.state.player, clicks: 0 });
            return;
          }
        }
        if (game[row][col].color && game[row + 3] && game[row][col + 3]) {
          if (
            game[row][col].color === winnerColor &&
            game[row + 1][col + 1].color === winnerColor &&
            game[row + 2][col + 2].color === winnerColor &&
            game[row + 3][col + 3].color === winnerColor
          ) {
            this.setState({ winner: this.state.player, clicks: 0 });
            return;
          }
        }
        if (game[row][col].color && game[row + 3] && game[row][col - 3]) {
          if (
            game[row][col].color === winnerColor &&
            game[row + 1][col - 1].color === winnerColor &&
            game[row + 2][col - 2].color === winnerColor &&
            game[row + 3][col - 3].color === winnerColor
          ) {
            this.setState({ winner: this.state.player, clicks: 0 });
            return;
          }
        }
      }
    }
  };
  handleRestart = () => {
    this.setState({
      game: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
      ],
      player: this.state.player === "red" ? "yellow" : "red",
      winner: null,
      clicks: 0
    });
  };
  render() {
    const { game, player, winner, clicks } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Connect 4</h1>
          <h2 style={{ color: winner ? winner : "white" }}>
            {winner
              ? "the winner is the " + winner + " player"
              : clicks === 42 && winner === null
              ? "no winner"
              : "current Player " + player}
          </h2>
          <svg style={{ width: "450px", height: "440px" }}>
            {game.map((col, index) =>
              col.map((row, index2) => (
                <circle
                  key={index + "-" + index2}
                  cx={index2 * 65 + 30}
                  cy={index * 65 + 30}
                  r="30"
                  fill={row.color ? row.color : "slategray"}
                  onClick={!winner ? () => this.handleClick(index2) : null}
                />
              ))
            )}
          </svg>
          {winner || clicks === 42 ? (
            <button onClick={this.handleRestart}>Reset</button>
          ) : null}
        </header>
      </div>
    );
  }
}

export default App;
