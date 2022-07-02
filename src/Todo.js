import { useStore } from "./store"
import React, { useState } from "react";

const Todo = ({todo, handleUpdateName}) => {
   
    const [name, setName] = React.useState(todo.task);
    const {
        handleToggle, todos, removeTodo, editTodo
      } = useStore();
      
    // const [inputEdit, setInputEdit] = useState("");
    function handleNameChange(event) {
        setName(event.target.value);
      }
    const handleClick = (e) => {
       e.preventDefault();
      handleToggle(e.currentTarget.id);
    };

    return (
    <div>
      <li 
        id={todo.id}
        key={todo.id + todo.task}
        name="todo"
        value={todo.id}
        onClick={handleClick }
        className={todo.completed ? "todo strike" : "todo"}
      >
        {todo.task}
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
        <button onClick= {() => handleUpdateName(todo, name)}>Edit</button>  
        <input type="text" value={name} onChange={handleNameChange} /> 
      </li>
    </div> 
    );
  };

  export default Todo;