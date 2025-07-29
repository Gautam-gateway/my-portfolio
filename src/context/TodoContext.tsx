// src/context/TodoContext.tsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

// --- TYPE DEFINITIONS ---
// Defines the structure for a single todo item.
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Defines the shape of the data and functions our context will provide.
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// --- CREATE THE CONTEXT ---
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// --- CREATE THE PROVIDER COMPONENT ---
// This component holds all the state logic and provides it to its children.
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state by trying to load todos from the browser's local storage.
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      return [];
    }
  });

  // This effect runs whenever the `todos` array changes, saving it to local storage.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const value = { todos, addTodo, toggleTodo, deleteTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// --- CREATE A CUSTOM HOOK (for easy consumption) ---
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};