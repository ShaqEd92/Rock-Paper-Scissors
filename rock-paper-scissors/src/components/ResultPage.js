import React, { useEffect, useState } from "react";

const ResultPage = ({
  userPick,
  player,
  setPlayer,
  rounds,
  pcScore,
  setPcScore,
  setPlayStatus,
}) => {
  const [message, setMessage] = useState("");
  const [winner, setWinner] = useState(false);

  const options = ["rock", "paper", "scissors"];

  useEffect(() => {
    isGameOver();
    if (isGameOver){
        findWinner();
    }
  }, []);

  const findWinner = () => {
    let computerPick = options[Math.round(Math.random() * 2)];
    console.log(`${userPick} vs ${computerPick}`);
    if (userPick === computerPick) {
      setMessage("It's a draw.");
      return;
    }
    if (
      (userPick === "rock" && computerPick === "scissors") ||
      (userPick === "scissors" && computerPick === "paper") ||
      (userPick === "paper" && computerPick === "rock")
    ) {
      setMessage(`${player.name} wins this round!`);
      let newScore = player.score + 1;
      setPlayer({ ...player, score: newScore });
    } else {
      setMessage(`The computer wins this round!`);
      setPcScore((pc) => pc + 1);
    }
  };

  const isGameOver = () => {
    if (player.score / rounds > 0.5) {
      setMessage("You win!");
      setWinner(true);
    } else if (pcScore / rounds > 0.5) {
      setMessage("You lose!");
      setWinner(true);
    }
    return winner;
  };

  return (
    <div className="results">
      <h1>{`Your score: ${player.score} ____________ PC score: ${pcScore}`}</h1>
      <hr />
      <h1 style={{ fontSize: "50px", color: "red" }}>{message}</h1>
      {!winner && (
        <button onClick={() => setPlayStatus("CHOOSING")}>Next round...</button>
      )}
    </div>
  );
};

export default ResultPage;
