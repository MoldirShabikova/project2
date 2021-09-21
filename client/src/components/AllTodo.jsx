import React from 'react'
import {Link} from 'react-router-dom'
export default function AllTodo(props) {
  const { todo } = props;
  return (
    <div>
            <div>
        {todo.map(todo => {
          return <Link to={`/todo/${todo.fields.category}`} key={todo.id}>
            <h3>{todo.fields.item}</h3>

            <h5>{todo.fields.category}</h5>
          </Link>
        } )}
      </div>
    </div>
  )
}
