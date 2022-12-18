import React from 'react';
import { useTasks } from './TasksContext.jsx';

export default function GenerateBtn() {
  const tasks = useTasks();

  function handleClick() {
    let pass = '';
    const obj = {
      upper: [65, 90],
      lower: [97, 123],
      numbers: [48, 57],
      symbols: [
        [32, 47],
        [58, 64],
        [91, 96],
        [123, 126],
      ]
    }
    const ranges = Object.keys(obj).filter(key => tasks[key]).map(key => obj[key]);

    function getRandom(range) {
      return Math.floor(Math.random() * (range[1] - range[0])) + range[0]
    }

    for (let i = 0; i < tasks.length; i++) {
      const index = getRandom([0, ranges.length]);

      if (Array.isArray(ranges[index][0])) { // check if it's a symbol array of arraies
        const randVal = getRandom(ranges[index][getRandom([0, 3])]);
        pass += String.fromCharCode(randVal)
        continue;
      }
    
      const randVal = getRandom(ranges[index]);
      pass += String.fromCharCode(randVal)
    }
    console.log('yo pass is ', pass);
  }

  return (
    <button onClick={handleClick}>
      Generate →
    </button>
  )
}
