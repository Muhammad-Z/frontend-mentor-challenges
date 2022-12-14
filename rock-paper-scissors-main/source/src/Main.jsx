import React, { useEffect, useState } from "react";
import PlayGround from "./PlayGround";
import ShowResult from "./ShowResult";

export default function Main(props) {
  const [score, setScore] = useState(0);
  console.log('rendering main')
  const [playAgain, setPlayAgain] = useState({ id: 1 });

  return (
    <main>
      <header>
        <h1>
          ROCK <br />
          Paper <br />
          Scissors
        </h1>
        <div id="score-panel">
          SCORE <br />
          <span id="score">{score}</span>
        </div>
      </header>
      <div id="high-noon">
        <PlayGround key={playAgain.id} setScore={setScore} setPlayAgain={setPlayAgain} />
      </div>
    </main>
  )
}
