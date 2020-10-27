import React, { useEffect, useState } from "react";
import HandRockImage from "./images/HandRockImage";
import HandPaperImage from "./images/HandPaperImage";
import HandScissorsImage from "./images/HandScissorsImage";

const CountDownPage = ({ setPlayStatus }) => {
  const [display, setDisplay] = useState("");
  const options = ["ROCK!", "PAPER!", "SCISSORS!", ""];

  useEffect(() => {
    countdown();
  }, []);

  const countdown = () => {
    let i = 0;
    setInterval(() => {
      if (i < 4) {
        setDisplay(options[i]);
        i++;
      } else clearInterval();
    }, 1000);

    setTimeout(() => {
      setPlayStatus("RESULT");
    }, 4000);
  };

  return (
    <div className="countdown">
      <h1>{display}</h1>
      <div className="inner-countdown">
        <div
          className="user-hand"
          id={display === "SCISSORS!" ? "rotateHand" : null}
        >
          {display === "ROCK!" && <HandRockImage />}
          {display === "PAPER!" && <HandPaperImage />}
          {display === "SCISSORS!" && <HandScissorsImage />}
        </div>
        <div
          className="computer-hand"
          id={display !== "SCISSORS!" ? "rotateHand" : null}
        >
          {display === "ROCK!" && <HandRockImage />}
          {display === "PAPER!" && <HandPaperImage />}
          {display === "SCISSORS!" && <HandScissorsImage />}
        </div>
      </div>
    </div>
  );
};

export default CountDownPage;
