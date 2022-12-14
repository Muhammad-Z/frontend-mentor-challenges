import React, { useEffect, useState } from "react";
import Item from "./Item";
import choices from "./choices";
import rules from "./rules";
import ShowResult from "./ShowResult";

export default function HighNoon({ choosedItem, result, setResult, setPlayAgain, setScore }) {
  console.log('rendering hignoon')
  const [bc, setBc] = useState(false);
  useEffect(() => {
    if (!result) {
      console.log('pop')
      if (!bc) setTimeout(() => {
        let botChoice = choices[Math.round((Math.random() * 10)) % choices.length];
        setBc((oldState) => <Item name={botChoice.name} figure={botChoice.figure} />
        )
      }, 1000);
      if (bc) {
        console.log('this is how bc lookks like: ', bc)
        console.log('here in highnoon the bc.props.name is ', bc.props.name, ' and the choosedItem is ', choosedItem.name);
        if (bc.props.name === choosedItem.name) setResult((oldState) => 'draw');
        //draw
        else if (rules[choosedItem.name] === bc.props.name) setResult((oldState) => 'win');
        //win
        else //lose 
          setResult((oldState) => 'lose');
      }
    }
  }, [bc]);



  console.log('da bc', bc?.props?.name)
  console.log('your choice is ', choosedItem)
  return (<>
    <div className="choice-container">
      <Item name={choosedItem.name} figure={choosedItem.figure} />
      YOU PICKED
    </div>
    {bc && <ShowResult result={result} setPlayAgain={setPlayAgain} setScore={setScore} /* resultText={resultText} setResultText={setResultText} */ />}
    <div className="choice-container bot-choice-container">
      {bc && bc}
      Computer PICKED
    </div>


  </>);
}
