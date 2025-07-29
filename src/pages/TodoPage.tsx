// src/pages/TodoPage.tsx

import React, { useState, useMemo } from 'react';
// --- THE FIX IS HERE ---
// We split the import into a value import and a separate, type-only import for 'Todo'.
import { TodoProvider, useTodos } from '../context/TodoContext';
import type { Todo } from '../context/TodoContext';

type Filter = 'all' | 'active' | 'completed';

// --- Child Component: The Form for Adding New Todos ---
const AddTodoForm = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-grow p-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition"
      />
      <button type="submit" className="px-6 py-3 bg-sky-600 hover:bg-sky-700 font-semibold rounded-lg transition">
        Add
      </button>
    </form>
  );
};

// --- Child Component: A Single Todo Item in the List ---
const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className="flex items-center bg-slate-800 p-4 rounded-lg transition-colors group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="w-6 h-6 rounded-full bg-slate-700 border-slate-600 text-sky-500 focus:ring-sky-500 cursor-pointer"
      />
      <span className={`flex-grow mx-4 ${todo.completed ? 'line-through text-slate-500' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="text-slate-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
        ✕
      </button>
    </li>
  );
};

// --- Child Component: The List of Todos with Filters ---
const TodoList = () => {
  const { todos } = useTodos();
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active': return todos.filter(todo => !todo.completed);
      case 'completed': return todos.filter(todo => todo.completed);
      default: return todos;
    }
  }, [todos, filter]);

  return (
    <>
      <div className="flex justify-between items-center bg-slate-800/50 p-4 rounded-lg mb-8">
        <span className="text-slate-400">{todos.filter(t => !t.completed).length} items left</span>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-sky-600' : 'hover:bg-slate-700'}`}>All</button>
          <button onClick={() => setFilter('active')} className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-sky-600' : 'hover:bg-slate-700'}`}>Active</button>
          <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-sky-600' : 'hover:bg-slate-700'}`}>Completed</button>
        </div>
      </div>
      <ul className="space-y-3">
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
      {filteredTodos.length === 0 && (
        <p className="text-center text-slate-500 mt-8">
          {filter === 'completed' ? "No completed tasks yet!" : "You're all caught up!"}
        </p>
      )}
    </>
  );
};

// --- The Main Page Component ---
const TodoPage = () => {
  return (
    <TodoProvider>
      <div className="bg-slate-950 text-white min-h-full py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-sky-400">Todo App</h1>
            <p className="text-slate-400 mt-2">A simple app to manage your daily tasks.</p>
          </div>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoPage;