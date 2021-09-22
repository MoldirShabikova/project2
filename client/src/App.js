import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
// import Home from './components/Home'
import Todo from './components/Todo'
import NewTodo from './components/NewTodo'
import AllTodo from './components/AllTodo';
import axios from "axios";
import { useState, useEffect } from 'react'
import {ToastContainer} from "react-toastify"
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};

function App() {

  const [todo, setTodo] = useState([])
  const [toggle,setToggle] = useState(false)
useEffect(() => {
  const fetchTodo = async () => {
    const res = await axios.get(URL, config)
    setTodo(res.data.records);
  };
  fetchTodo();
}, [toggle]);
  return (
    
    <div className="App">
        <Navbar />
      <Route exact path="/">
        < Navbar todo={ todo}/>
      </Route>
      <Route exact path="/todo/:id">
        < Todo todo={todo} setToggle={setToggle} />
        
      </Route>
      <Route exact path="/newTodo">
        < NewTodo/>
      </Route>
      <Route path="/allTodo">
        < AllTodo todo={ todo}/>
      </Route>
      <ToastContainer/>
    </div>
  );
}

export default App;
