import Navbar from "./Navbar"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="HomePage">
      <Link to="/"> <button>Home</button></Link>
      < img className="HomeImg" src="https://balancethroughsimplicity.com/wp-content/uploads/2020/04/How-to-write-a-To-Do-list-to-get-things-done-BLOG-1-884x619.jpg" alt="Photo"/>
    </div>
  )
}
