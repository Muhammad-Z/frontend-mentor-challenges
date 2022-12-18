import React from 'react';
import { useTasksDispatch } from './TasksContext.jsx';

export default function OptionsForm() {
  const dispatch = useTasksDispatch();

  function handleFormClick(e) {
    if (e.target.type === "checkbox") {
      dispatch({
        type: 'toggle',
        payload: e.target.name,
      })
    }

  }

  function handleSliderChange(e) {
    dispatch({
      type: 'changeLength',
      payload: e.target.value,
    })
    return;
  }

  return (
    <form onClick={handleFormClick}>
      <label>
        Character Length
        <input type="range" name="passLeng" onChange={handleSliderChange} />
      </label>

      <label>
        <input type="checkbox" name="upper" />
        Include Uppercase Letters
      </label>

      <label>
        <input type="checkbox" name="lower" />
        Include Lowercase Letters
      </label>

      <label>
        <input type="checkbox" name="numbers" />
        Include Numbers
      </label>

      <label>
        <input type="checkbox" name="symbols" />
        Include Symbols
      </label>
    </form>
  )
}