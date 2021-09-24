import { Link } from "react-router-dom";
import healthcare from "../images/healthcare.png";
import running from "../images/running.png";
import work from "../images/work.png";
import note from "../images/note.png";
import list from "../images/list.png";
import house from "../images/house.png";
export default function Navbar() {
  return (
    <div className="header">
      <div className="Navbar">
        <Link to="/todo/exercise">
          <img className="icons" src={running} alt="running" />
          <h5>EXERCISE</h5>
        </Link>
        <Link to="/todo/work">
          <img className="icons" src={work} alt="work" />
          <h5>WORK</h5>
        </Link>
        <Link to="/todo/health">
          <img className="icons" src={healthcare} alt="health" />
          <h5>HEALTH</h5>
        </Link>
        <Link to="/todo/general">
          <img className="icons" src={note} alt="note" />
          <h5>TO DO</h5>
        </Link>
        <Link to="/allTodo">
          <img className="icons" src={list} alt="list" />
          <h5>SEE ALL</h5>
        </Link>
        <Link to="/">
          <img className="icons" src={house} alt="home" />
          <h5>HOME</h5>
        </Link>
      </div>
    </div>
  );
}
