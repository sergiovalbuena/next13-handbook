"use client" 

import { createContext } from 'react';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const tasks = []

  return <TasksContext.Provider value={{ tasks }}>{children}</TasksContext.Provider>
}