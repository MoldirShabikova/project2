import React from 'react'
import { Link } from 'react-router-dom'
import Delete from './Delete';
export default function AllTodo(props) {
  const { todo } = props;
  return (
    <div>
            <div>
        {todo.map(todo => {
          return <Link to={`/todo/${todo.fields.category}`} key={todo.id}>
            <h2>{todo.fields.category}</h2>
            <h3>{todo.fields.item}</h3>
            <Delete />
          </Link>
        })}
        
      </div>
      <Link to="/"> <button ><i class="fas fa-home"></i></button></Link>
    </div>
    
  )
}
