
import { useStore } from "./store"
import React, { useState } from "react";


const TodoForm = () => {

    const {
        addTodo
      } = useStore();
 
  const [inputValue, setInputValue] = useState("");
 return (
    <div>
    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} /> 
    <button onClick= {() => addTodo(inputValue)}>Submit</button>
    </div>
  );
};
export default TodoForm;