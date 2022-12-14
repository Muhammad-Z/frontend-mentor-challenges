import React, { useEffect, useState } from "react";

export default function ShowResult({ result, setPlayAgain, setScore }) {
  console.log('rendering showresult')

  const [resultText, setResultText] = useState(false);
  let tempScore = 0;
  console.log('theee rt is ', resultText)
  if (!resultText) {
    console.log('result now is ', result)
    switch (result) {
      case 'win':
        tempScore = 1;
        setResultText((oldState) => 'YOU WIN');
        break;
      case 'lose':
        tempScore = -1;
        setResultText((oldState) => 'YOU LOSE');
        break;
      case 'draw':
        setResultText((oldState) => 'DRAW');
        break;
    }
  }

  useEffect(() => {
    console.log('sup am in effect and resultText is ', resultText)
    switch (resultText) {
      case 'YOU WIN':
        setScore((oldScore) => oldScore + 4);
        break;
      case 'YOU LOSE':
        setScore((oldScore) => oldScore < 4 ? 0 : oldScore - 2);
        break;
      case 'DRAW':
        setScore((oldScore) => oldScore);
        break;
    }
  }, [resultText])

  function reloadApp() {
    console.log('hello')
    setPlayAgain((oldState) => ({ id: oldState.id + 1 }));
  }

  return (
    <div id="result-pane">
      {resultText ? <> <span>{resultText}</span>
        <button id="play-again-btn" onClick={reloadApp}>PLAY AGAIN</button></> : null}
    </div>
  )
}
