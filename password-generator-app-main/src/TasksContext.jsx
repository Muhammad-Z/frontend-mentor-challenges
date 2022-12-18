import React, { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {

  switch (action.type) {
    case 'toggle': {
      return {
        ...tasks,
        [action.payload]: !tasks[action.payload]
      }
    }
    case 'changeLength': {
      return {
        ...tasks,
        passLeng: action.payload
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = {
  passLeng: 8,
  upper: false,
  lower: false,
  numbers: false,
  symbols: false,
};
