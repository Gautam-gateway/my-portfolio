// src/context/TodoContext.tsx

// --- THE FIX IS HERE ---
// We have removed the unused 'React' import. We only import what we actually need.
import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

// --- TYPE DEFINITIONS ---
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// --- CREATE THE CONTEXT ---
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// --- CREATE THE PROVIDER COMPONENT ---
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error);
      return [];
    }
  });

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

// --- CREATE A CUSTOM HOOK ---
export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};