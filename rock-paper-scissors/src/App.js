import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import GameOptions from "./components/GameOptions";
import PlayGame from "./components/PlayGame";
import GameOver from "./components/GameOver";
import ScissorsImage from "./components/images/ScissorsImage";
import PaperImage from "./components/images/PaperImage";
import "./styles/App.css";

function App() {
  const [player, setPlayer] = useState({ name: "", score: 0 });
  const [rounds, setRounds] = useState();
  const [gameResult, setGameResult] = useState("");

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
            <GameOptions setPlayer={setPlayer} setRounds={setRounds} />
          </Route>
          <Route exact path="/play">
            <PlayGame
              player={player}
              setRounds={rounds}
              setGameResult={setGameResult}
            />
          </Route>
          <Route exact path="/start">
            <GameOver gameResult={gameResult} />
          </Route>
        </main>
      </div>
    </Switch>
  );
}

export default App;
