import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ChoicePage from "./ChoicePage";
import CountDownPage from "./CountdownPage";
import ResultPage from "./ResultPage";
import GameOver from "./GameOver";

const PlayGame = ({ newGame, player, rounds, setPlayer }) => {
  let history = useHistory();

  const [playStatus, setPlayStatus] = useState();
  const [rockAxes, setRockAxes] = useState({ x: 0, y: 0 });
  const [paperAxes, setPaperAxes] = useState({ x: 0, y: 0 });
  const [scissorsAxes, setScissorsAxes] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState("");
  const [pick, setPick] = useState("");
  const [pcScore, setPcScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [winner, setWinner] = useState();

  useEffect(() => {
    setPlayStatus(statuses.CHOOSING);
    if (player.name === "") history.push("/");
  }, []);

  const statuses = {
    CHOOSING: "CHOOSING",
    COUNTDOWN: "COUNTDOWN",
    RESULT: "RESULT",
    OVER: "OVER",
  };

  const handleMouseMove = (choice) => (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 8;
    let y = (window.innerHeight / 2 - e.pageY) / 8;
    if (choice === "rock") setRockAxes({ x, y });
    if (choice === "paper") setPaperAxes({ x, y });
    if (choice === "scissors") setScissorsAxes({ x, y });
    setDisplay(choice.toUpperCase());
  };

  const handleSelect = (choice) => {
    setPlayStatus(statuses.COUNTDOWN);
    setPick(choice);
    setShowScore(true);
    setDisplay("");
  };

  const isGameOver = (result) => {
    let yourScore = 0;
    let compScore = 0;
    if (result === "win") {
      yourScore = player.score + 1;
      setPlayer({ ...player, score: yourScore });
    }
    if (result === "lose") {
      compScore = pcScore + 1;
      setPcScore(compScore);
    }
    if (yourScore / rounds > 0.5) {
      setWinner("user");
      setPlayStatus("OVER");
    } else if (compScore / rounds > 0.5) {
      setWinner("pc");
      setPlayStatus("OVER");
    } else {
      console.log(pcScore / rounds);
      setPlayStatus(statuses.CHOOSING);
    }
  };

  return (
    <div className="game-play">
      {showScore && (
        <div className="score">
          <h1>You: {player.score}</h1>
          <h1>Computer: {pcScore}</h1>
        </div>
      )}
      {display ? <h3>{display}</h3> : <h3>&nbsp;</h3>}
      {playStatus === statuses.CHOOSING && (
        <ChoicePage
          onSelect={handleSelect}
          onMouseMove={handleMouseMove}
          rockAxes={rockAxes}
          paperAxes={paperAxes}
          scissorsAxes={scissorsAxes}
        />
      )}
      {playStatus === statuses.COUNTDOWN && (
        <CountDownPage setPlayStatus={setPlayStatus} />
      )}
      {playStatus === statuses.RESULT && (
        <ResultPage
          userPick={pick}
          player={player}
          pcScore={pcScore}
          checkGameStatus={isGameOver}
        />
      )}
      {playStatus === statuses.OVER && <GameOver newGame={newGame} winner={winner} />}
      
    </div>
  );
};

export default PlayGame;
