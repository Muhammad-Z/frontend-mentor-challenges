import React, { useState } from "react";
import ItemChoose from "./ItemChoose";
import HighNoon from "./HighNoon";

export default function PlayGround({ setScore, setPlayAgain }) {
  console.log("rendering playground")
  const [result, setResult] = useState(false)
  const [choosedItem, setChoosedItem] = useState(false);

  return (<>
    {choosedItem ? <HighNoon choosedItem={choosedItem}
      setResult={setResult} result={result}
      setPlayAgain={setPlayAgain} setScore={setScore} />
      : <ItemChoose setChoosedItem={setChoosedItem} />}
  </>)
}
