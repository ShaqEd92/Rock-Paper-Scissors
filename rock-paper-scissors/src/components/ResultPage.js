import React, { useEffect, useState } from "react";
import RockImage from "./images/RockImage";
import PaperImage from "./images/PaperImage";
import ScissorsImage from "./images/ScissorsImage";
import BrokenRockImage from "./images/BrokenRockImage";
import BrokenPaperImage from "./images/BrokenPaperImage";
import BrokenScissorsImage from "./images/BrokenScissorsImage";

const ResultPage = ({ userPick, player, checkGameStatus }) => {
  const [pcPick, setPcPick] = useState();
  const [message, setMessage] = useState("");
  const [userWinner, setUserWinner] = useState(false);
  const [pcWinner, setPcWinner] = useState(false);

  const results = {
    rock: "Rock smashes scissors!",
    paper: "Paper crumbles rock!",
    scissors: "Scissors cuts paper!",
  };

  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    let computerPick = options[Math.round(Math.random() * 2)];
    setPcPick(computerPick);
    findWinner(computerPick);
  }, []);

  const findWinner = (_pcPick) => {
    if (userPick === _pcPick) {
      setMessage(
        `${player.name} picks ${userPick}. Computer picks ${_pcPick}.\nIt's a draw.`
      );
      setTimeout(() => {
        checkGameStatus();
      }, 3500);
      return;
    }
    if (
      (userPick === "rock" && _pcPick === "scissors") ||
      (userPick === "scissors" && _pcPick === "paper") ||
      (userPick === "paper" && _pcPick === "rock")
    ) {
      setMessage(
        `${player.name} picks ${userPick}. Computer picks ${_pcPick}.`
      );
      setTimeout(() => {
        setMessage(`${results[userPick]}\n${player.name} wins this round!`);
        setUserWinner(true);
      }, 3500);
      setTimeout(() => {
        checkGameStatus("win");
      }, 7000);
    } else {
      setMessage(
        `${player.name} picks ${userPick}. Computer picks ${_pcPick}.`
      );
      setTimeout(() => {
        setMessage(`${results[_pcPick]}\nThe computer wins this round!`);
        setPcWinner(true);
      }, 3500);
      setTimeout(() => {
        checkGameStatus("lose");
      }, 7000);
    }
  };

  return (
    <div className="results">
      <h1>{message}</h1>
      <div className="inner-results">
        <div className="user-pick">
          {userPick === "rock" && !pcWinner && <RockImage />}
          {userPick === "paper" && !pcWinner && <PaperImage />}
          {userPick === "scissors" && !pcWinner && <ScissorsImage />}
          {userPick === "rock" && pcWinner && <BrokenRockImage />}
          {userPick === "paper" && pcWinner && <BrokenPaperImage />}
          {userPick === "scissors" && pcWinner && <BrokenScissorsImage />}
        </div>
        <div className="computer-pick">
          {pcPick === "rock" && !userWinner && <RockImage />}
          {pcPick === "paper" && !userWinner && <PaperImage />}
          {pcPick === "scissors" && !userWinner && <ScissorsImage />}
          {pcPick === "rock" && userWinner && <BrokenRockImage />}
          {pcPick === "paper" && userWinner && <BrokenPaperImage />}
          {pcPick === "scissors" && userWinner && <BrokenScissorsImage />}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
