import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function BotChoice({name, figure}) {
  const [bc, setBC] = useState(false);

  setTimeout(() => setBC(<Item name={name} figure={figure} />), 2000);
  let rend;
  console.log('yo')
  if (bc) rend = bc;
  else rend = null
  return (<>
    {bc}
  </>);
}
