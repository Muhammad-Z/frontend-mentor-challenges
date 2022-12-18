import React from 'react';
import { useTasks } from './TasksContext';

export default ({password}) => {

  return (
    <div>
      <span>{password}</span>
    </div>
  )
}