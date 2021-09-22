
import { Link } from 'react-router-dom'
import healthcare from "../images/healthcare.png"
import running from "../images/running.png"
import work from "../images/work.png"
import note from "../images/note.png"
import list from "../images/list.png"

export default function Navbar() {

 
  return (
    <div>
      <div className="Navbar">
        <Link to="/todo/exercise"><img src={running} alt="running"/>
        <h3>EXERCISE</h3>
        </Link>
        <Link to="/todo/work"><img src={work} alt="work"/>
        <h3>WORK</h3>
        </Link>
        <Link to="/todo/health"><img src={healthcare} alt="health"/>
        <h3>HEALTH</h3>
        </Link>
        <Link to="/todo/general"><img src={note} alt="note"/>
        <h3>TO DO</h3>
        </Link>
        <Link to="/allTodo"><img src={list} alt="list"/>
        <h3>SEE ALL</h3>
        </Link>
        {/* <Link to="/newTodo"><img src={list} alt="list"/>
        <h3>NEW CATEGORY</h3>
        </Link> */}
      </div>
    </div>
  )
}