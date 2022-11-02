import React from "react";
import "./todos.css";

const Todos = ({ todos, markComplete, editTitle, deleteTodo }) => {
  return (
    <div className={"todo-list"}>
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          key={index}
          index={index}
          markComplete={markComplete}
          editTitle={editTitle}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

const Todo = ({ todo, index, markComplete, editTitle, deleteTodo }) => (
  <div className="todos">
  <div className="todo">
    <p style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <input
        type={"checkbox"}
        onChange={() => markComplete(index)}
        name={"completed"}
        id={todo.id}
      />{" "}
      {todo.text}
    </p>
    </div>
    <button className="Delete" onClick={() => deleteTodo(index)}>Delete</button>
  </div>
);

export default Todos;
