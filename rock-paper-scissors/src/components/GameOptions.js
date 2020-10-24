import React, { useState } from "react";
import { useHistory } from "react-router";

const GameOptions = ({ player, setPlayer, rounds, setRounds }) => {
  let history = useHistory();
  const [name, setName] = useState();

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayer({ name: name, score: 0 });
  };

  const onPlay = () => {
    history.push("/play");
  };

  return (
    <div className="game-setup">
      {!player.name ? (
        <div>
          <h3>Enter your name:&nbsp;&nbsp;</h3>
          <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={name} />
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      ) : (
        <div>
          <h3>
            Welcome, {player.name}... select number of rounds:&nbsp;&nbsp;
          </h3>
          <div className="rounds-buttons">
            <button
              style={rounds === 1 ? { background: "black" } : null}
              onClick={() => setRounds(1)}
            >
              1 OFF!
            </button>
            <button
              style={rounds === 3 ? { background: "black" } : null}
              onClick={() => setRounds(3)}
            >
              Best of 3
            </button>
            <button
              style={rounds === 5 ? { background: "black" } : null}
              onClick={() => setRounds(5)}
            >
              Best of 5
            </button>
          </div>
        </div>
      )}
      {player.name && rounds > 0 && (
        <div className="play-button-box">
          <button onClick={() => onPlay()}>PLAY</button>
        </div>
      )}
    </div>
  );
};

export default GameOptions;
