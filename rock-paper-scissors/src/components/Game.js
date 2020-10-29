import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import GameOptions from "./GameOptions";
import PlayGame from "./PlayGame";

const Game = ({newGame}) => {
  const [player, setPlayer] = useState({ name: "", score: 0 });
  const [rounds, setRounds] = useState();

  return (
    <Switch>
      <div className="container">
        <header>
          <h1>ROCK&nbsp;&nbsp;PAPER&nbsp;&nbsp;SCISSORS</h1>
        </header>
        <main>
          <Route exact path="/">
            <Link className="start-button" to="/start">
              START GAME
            </Link>
          </Route>
          <Route exact path="/start">
            <GameOptions
              player={player}
              rounds={rounds}
              setPlayer={setPlayer}
              setRounds={setRounds}
            />
          </Route>
          <Route exact path="/play">
            <PlayGame
              newGame={newGame}
              player={player}
              rounds={rounds}
              setPlayer={setPlayer}
            />
          </Route>
        </main>
      </div>
    </Switch>
  );
};

export default Game;
