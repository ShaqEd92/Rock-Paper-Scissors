import React from "react";
import HandRockImage from "./images/HandRockImage";
import HandPaperImage from "./images/HandPaperImage";
import HandScissorsImage from "./images/HandScissorsImage";

const ChoicePage = ({
  onSelect,
  onMouseMove,
  rockAxes,
  paperAxes,
  scissorsAxes,
}) => (
  <div className="choice">
    <div
      className="hand-container"
      onClick={() => onSelect("rock")}
      onMouseMove={onMouseMove("rock")}
      style={{
        transform: `rotateY(${rockAxes.x}deg) rotateX(${rockAxes.y}deg)`,
        transition: `none`,
      }}
    >
      <HandRockImage />
    </div>
    <div
      className="hand-container"
      onClick={() => onSelect("paper")}
      onMouseMove={onMouseMove("paper")}
      style={{
        transform: `rotateY(${paperAxes.x}deg) rotateX(${paperAxes.y}deg)`,
        transition: `none`,
      }}
    >
      <HandPaperImage />
    </div>
    <div
      className="hand-container"
      onClick={() => onSelect("scissors")}
      onMouseMove={onMouseMove("scissors")}
      style={{
        transform: `rotateY(${scissorsAxes.x}deg) rotateX(${scissorsAxes.y}deg)`,
        transition: `none`,
      }}
    >
      <HandScissorsImage />
    </div>
  </div>
);

export default ChoicePage;
