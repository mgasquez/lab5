import { useStore } from "./store"
import React, { useState } from "react";
import Todo from "./Todo"

const TodoList = () => {
    const {
       todos,  editTodo
      } = useStore();

    const [books, setBooks] = useState(todos);

    function handleUpdateName(item, name) {
        const newBooks = books.map((book) => {     
          if (book.id === item.id) {
            return {
              id: book.id,
              task: name,
            };
          } else {
            return book;
          }
        });
        setBooks(newBooks);
      }

    const [filter, setFilter] = useState("All");
    const getFilteredTodoList = (todos, filter) => {
        return todos.filter((todo) => {
          if (filter === "Completed") {
            return todo.completed;
          } else if (filter === "Active") {
            return !todo.completed;
          } else {
            return todo;
          }
        });
      };
    
    return (
    <ul>
        {getFilteredTodoList(todos, filter).map((todo) => {
          return <Todo key={todo.id}  todo={todo}  handleUpdateName={handleUpdateName}   />;
        })}
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("All")}>All</button>
    </ul>
    );
};

export default TodoList;
