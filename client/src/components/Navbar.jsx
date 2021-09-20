import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <Link to="/">
      </Link>
     <Link to='/'> Home</Link>
      <Link to='/todo/ work'> Work </Link> 
      <Link to='/todo/ exercise'> Exercise </Link>
      <Link to='/todo/ health'> Health </Link>
      <Link to='/todo/ general'> General </Link>
      <Link to='/todo/ all'> AllTodo </Link>
    </div>
  )
}