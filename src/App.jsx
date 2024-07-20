import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function createTodo(event) {
    event.preventDefault();
    if (!task.trim()) return; // To prevent adding empty todos

    const newTodo = { todo: task, id: Date.now() };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
    setTask("");
  }
  const deleteItem = (itemID) => {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemID));
  };
  return (
    <div>
      <h1>Simple To Do App</h1>
      <form onSubmit={createTodo}>
        <input
          id="taskInput"
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          placeholder="Enter the task"
        />
      </form>
      <button type="submit" onClick={createTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
