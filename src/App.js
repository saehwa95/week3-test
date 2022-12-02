import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "리액트를 배워봅시다." },
  ]);

  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      content,
    };
    setTodos([...todos, newTodo]);
  };

  const inputChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="write-box">
          <form onSubmit={addTodo}>
            <input type="text" value={content} onChange={inputChangeHandler} />
            <button>추가하기</button>
          </form>
        </div>
        <h1>Todo List</h1>
        <div className="todo-box">
          {todos.map((todo) => (
            <div className="todo-text" key={todo.id}>
              <span>{todo.content}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;