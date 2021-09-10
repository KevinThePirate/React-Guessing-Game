import React from "react";
import "./styles/GamePiece.css";

let clickedCards = [];
export let score = 0;
export let highScore = 0;
export default function GamePiece(props) {
  const clickEvent = () => {
    props.clickHandler(props.character);
    if (clickedCards.includes(props.name)) {
      console.log("no");
      if (score > highScore) {
        highScore = score;
      }
      score = 0;
      clickedCards = [];
    } else {
      console.log("ech");
      clickedCards.push(props.name);
      score++;
    }
    console.log(clickedCards);
    console.log(score);
    /*if (clicks % 2 === 0) {
      console.log("even");
      secondClickCard = props.name;
      if (firstClickCard === secondClickCard) {
        console.log("you win!");
      } else {
        console.log("you suck");
      }
    } else {
      console.log("odd");
      firstClickCard = props.name;
    }*/
  };
  return (
    <div className="game-piece" onClick={clickEvent} style={props.style}>
      <img alt={props.name} src={props.imgSrc} />
      <h3>{props.name}</h3>
    </div>
  );
}
