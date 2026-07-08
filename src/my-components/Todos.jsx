// import React from 'react'
import TodoItem from "./Todo-item";
export const Todos = (props) => {
  return (
    <div className="container">
      <h3>todos works</h3>
      {props.todos.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No todos to display
        </div>
      ) : (
        props.todos.map((todo) => (
          <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;
