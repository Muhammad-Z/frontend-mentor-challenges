import React from 'react';
import { useTasks } from './TasksContext';

export default ({password}) => {
  console.log('sup')

  return (
    <div>
      <span>{password}</span>
    </div>
  )
}