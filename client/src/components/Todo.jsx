
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};

export default function Todo() {
  const [todo, setTodo] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      setTodo(res.data.fields);
    };
    fetchTodo();

  }, [])
  return (
    <div>
      <h1>Molya</h1>
      <h1> {todo.fields?.item}</h1>
      <h3>{todo.fields?.category}</h3>
    </div>
  )
}
