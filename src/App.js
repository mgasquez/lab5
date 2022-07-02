import './App.css';
import { useStore } from "./store"
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import React from 'react';
  
export default function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

 

