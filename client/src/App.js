import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Todo from './components/Todo'
import NewTodo from './components/NewTodo'
import axios from 'axios'



function App() {
  return (
    <div className="App">
        <Navbar />
      <Route exact path="/">
        < Home />
      </Route>
      <Route exact path="/todo/:id">
        < Todo />
      </Route>
      <Route exact path="/newTodo">
      </Route>
    </div>
  );
}

export default App;
