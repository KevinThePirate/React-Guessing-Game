import logo from "./logo.svg";
import "./App.css";
import GamePiece from "./components/GamePiece";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import chararcters from "./store/data.json";
import { score, highScore } from "./components/GamePiece";

function App() {
  const [state, setState] = useState(chararcters);

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const shuffleArray = () => {
    console.log("test");
    // Shuffle array of objects
    const shuffledArr = shuffle(chararcters);
    // Setting 'shuffledArr' as the new state
    setState({ shuffledArr });
  };
  const handleClick = (card) => {
    shuffleArray();
    setTimeout(function () {
      shuffleArray();
    }, 250);
    setTimeout(function () {
      shuffleArray();
    }, 500);
  };
  return (
    <div className="App">
      <h1> One Piece Memory Game </h1>
      <h3> Don't click the same character twice! </h3>
      <p>
        Score: {score} - High Score: {highScore}
      </p>
      <GameBoard handleClick={handleClick} />
    </div>
  );
}

export default App;
