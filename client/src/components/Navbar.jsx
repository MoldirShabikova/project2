import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <Link to="/">
      </Link>
     <Link to='/'> Home</Link>
      <Link to='/work'> Work </Link> 
      <Link to='/exercise'> Exercise </Link>
      <Link to='/health'> Health </Link>
      <Link to='/general'> General </Link>
      <Link to='/alltodo'> AllTodo </Link>
    </div>
  )
}