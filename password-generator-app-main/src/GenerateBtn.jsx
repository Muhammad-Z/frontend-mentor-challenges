import React from 'react';
import { useTasks } from './TasksContext.jsx';

export default function GenerateBtn({setPassword}) {
  const tasks = useTasks();

  function handleClick() {
    let pass = '';
    const obj = {
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lower: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: " !\\\"#$%&'()*+,-.:;<=>?@[]^_`{|}~",
    }
    const ranges = Object.keys(obj).filter(key => tasks[key]);
    if (ranges.length === 0) return;

    function getRandomElement(list) {
      return list[Math.floor(Math.random() * list.length)]
    }

    for (let i = 0; i < tasks.passLeng; i++) {
      const randField = getRandomElement(ranges);
      const randVal = getRandomElement(obj[randField]);
      pass += randVal;
    }
    setPassword(pass);
  }

  return (
    <button onClick={handleClick}>
      Generate →
    </button>
  )
}
