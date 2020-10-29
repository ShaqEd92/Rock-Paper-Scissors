import React, { useState } from "react";
import Game from "./components/Game";
import "./styles/App.css";

function App() {
  const [gameId, setGameId] = useState(1);

  return <Game key={gameId} newGame={() => setGameId(gameId + 1)} />;
}

export default App;
