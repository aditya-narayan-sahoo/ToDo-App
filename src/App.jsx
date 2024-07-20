import React, { useState, useEffect } from "react";

let globalID = 0;

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function createTodo(event) {
    event.preventDefault();
    setTodos((oldTodo) => {
      setTask("");
      return [...oldTodo, { todo: task, id: globalID++ }];
    });
  }
  function deleteItem(itemID) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  }
  return (
    <div>
      <h1>Simple To Do App</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </form>
      <button type="submit" onClick={createTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
