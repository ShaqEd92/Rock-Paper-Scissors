import React, { useEffect, useState } from "react";
import ChoicePage from "./ChoicePage";

const PlayGame = () => {
  const [playStatus, setPlayStatus] = useState();
  const [rockAxes, setRockAxes] = useState({ x: 0, y: 0 });
  const [paperAxes, setPaperAxes] = useState({ x: 0, y: 0 });
  const [scissorsAxes, setScissorsAxes] = useState({ x: 0, y: 0 });
  const [display, setDisplay] = useState("");
  const [pick, setPick] = useState("");

  useEffect(() => {
    setPlayStatus(statuses.CHOOSING);
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
      {playStatus === statuses.COUNTDOWN && <div className="countdown"></div>}
      {playStatus === statuses.RESULT && <div className="game-result"></div>}
      {playStatus === statuses.OVER && <div className="game-conclusion"></div>}
    </div>
  );
};

export default PlayGame;
