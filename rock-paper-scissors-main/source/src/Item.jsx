import React from "react";

export default function Item({ name, figure, setChoosedItem, index }) {
  const handleItemClick = (e) => {
    if (setChoosedItem)
      setChoosedItem(() => ({ name: name, figure: figure }));
  }
  let figureClass = (index >= 0) ? `fig-${index + 1}` : ''

  return (
    <img onClick={handleItemClick} className={`${name} ${figureClass}`} src={figure} alt={name} />
  )
}