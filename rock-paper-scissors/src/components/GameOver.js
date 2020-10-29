import React from "react";
import TrophyImage from "./images/TrophyImage";

const GameOver = ({ newGame, winner }) => {
  return (
    <div className="game-over">
      {winner === "pc" && (
        <>
          <h1 style={{ color: "red" }}>GAME OVER</h1>
          <h1 style={{ color: "red" }}>You Lose.</h1>
        </>
      )}
      {winner === "user" && (
        <>
          <h1 style={{ color: "gold" }}>CHAMPION!</h1>
          <div>
            <TrophyImage />
          </div>
        </>
      )}
      <button onClick={() => newGame()}>Play again</button>
    </div>
  );
};

export default GameOver;
