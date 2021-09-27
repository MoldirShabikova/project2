import React from "react";
import { Link } from "react-router-dom";

export default function AllTodo(props) {
  const { todo } = props;

  return (
    <div className="all-todo">
      <div>
        {todo.map((todo) => {
          return (
            <Link to={`/todo/${todo.fields.category}`} key={todo.id}>
              <h3>{todo.fields.category}</h3>
              <p>{todo.fields.item}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
