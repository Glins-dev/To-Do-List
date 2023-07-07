import { useState } from 'react';

import Todo from './components/Todo';

import "./App.css";

import TodoForm from './components/TodoForm';

function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      text:"criar funcinalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "estudar React",
      category: "Estudo",
      isCompleted: false,
    }
  ])

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
   <TodoForm></TodoForm>
  </div>
}

export default App
