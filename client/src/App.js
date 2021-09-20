import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Work from './components/Work'
// import Health from './components/Health'
import Exercise from './components/Exercise'
// import General from './components/General'
import Home from './components/Home'
// import AllTodo from './components/AllTodo'
import axios from 'axios'

const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = "https://api.airtable.com/v0/appdtddwvXlZlECIz/todo"

function App() {
  return (
    <div className="App">
        <Navbar />
      <Route exact path="/">
        < Home />
      </Route>
      <Route path="/work">
        < Work />
      </Route>
      <Route path="/health">
        <div> Health </div>
      </Route>
      <Route path="/exercise">
        <Exercise />
      </Route>
      <Route path="/general">
        <div> General </div>
      </Route>
      <Route exact path="/alltodo">
        <div> AllTodo </div>
    </Route>
    </div>
  );
}

export default App;
