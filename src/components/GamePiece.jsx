import React from "react";
import "./styles/GamePiece.css";

export default function GamePiece(props) {
  return (
    <div className="game-piece">
      <img alt={props.name} src={props.imgSrc} />
      <h3>{props.name}</h3>
    </div>
  );
}
