import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useEffect , useState} from 'react'
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
console.log(URL)
export default function Home() {
  const [todo, setTodo] = useState([])
  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(URL, config)
      setTodo(res.data.records);
    };
    fetchTodo();
  }, []);

  return (
    <div>
      <div>
        {todo.map(todo => {
          return <Link to={`/todo/${todo.id}`} key={todo.id}>
            <h3>{todo.fields.item}</h3>

            <h5>{todo.fields.category}</h5>
          </Link>
        } )}
      </div>
    </div>
  )
}
