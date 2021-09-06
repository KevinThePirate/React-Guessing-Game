import React from "react";
import GamePiece from "./GamePiece";
import chararcters from "../store/data.json";

const imageStore = {};

export default function GameBoard() {
  let keyDef = 0;
  return (
    <div>
      {chararcters.map((character) => (
        <GamePiece
          key={character.id}
          imgSrc={character.src}
          name={character.title}
        />
      ))}
    </div>
  );
}
