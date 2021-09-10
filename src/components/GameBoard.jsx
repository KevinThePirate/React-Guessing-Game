import React from "react";
import GamePiece from "./GamePiece";
import chararcters from "../store/data.json";

export default function GameBoard(props) {
  function gameCheck() {
    props.handleClick();
  }
  let keyDef = 0;
  return (
    <div>
      {chararcters.map((character) => (
        <GamePiece
          key={character.id}
          imgSrc={character.src}
          name={character.title}
          clickHandler={gameCheck}
          character={character}
          //onClick={props.handleClick}
        />
      ))}
    </div>
  );
}
