import logo from "./logo.svg";
import "./App.css";
import GamePiece from "./components/GamePiece";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div className="App">
      <h1> One Piece Guessing Game </h1>
      <GameBoard />
    </div>
  );
}

export default App;
