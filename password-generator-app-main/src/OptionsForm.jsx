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
    <form class="row" onClick={handleFormClick}>
      <label>
        Character Length <br />
        <input type="range" name="passLeng" min="0" max="24"
          onChange={handleSliderChange} />
      </label> <br />

      <label>
        <input type="checkbox" name="upper" />
        Include Uppercase Letters
      </label> <br />

      <label>
        <input type="checkbox" name="lower" />
        Include Lowercase Letters
      </label> <br />

      <label>
        <input type="checkbox" name="numbers" />
        Include Numbers
      </label> <br />

      <label>
        <input type="checkbox" name="symbols" />
        Include Symbols
      </label> <br />
    </form>
  )
}