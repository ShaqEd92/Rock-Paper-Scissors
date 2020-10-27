import React, { useEffect, useState } from "react";
import ChoicePage from "./ChoicePage";
import CountDownPage from "./CountdownPage";
import ResultPage from "./ResultPage";
import { useHistory } from "react-router";

const PlayGame = ({ player, rounds, setPlayer, setGameResult }) => {
  let history = useHistory();

  const [playStatus, setPlayStatus] = useState();
  const [rockAxes, setRockAxes] = useState({ x: 0, y: 0 });
  const [paperAxes, setPaperAxes] = useState({ x: 0, y: 0 });
  const [scissorsAxes, setScissorsAxes] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState("");
  const [pick, setPick] = useState("");
  const [pcScore, setPcScore] = useState(0);

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
    setDisplay("");
  };

  return (
    <div className="game-play">
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
          setPlayer={setPlayer}
          rounds={rounds}
          setPlayStatus={setPlayStatus}
          pcScore={pcScore}
          setPcScore={setPcScore}
        />
      )}
      {playStatus === statuses.OVER && <div className="game-conclusion"></div>}
    </div>
  );
};

export default PlayGame;
