
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemToDo from './ItemForm';
// import axios from "axios";

// const BASE = process.env.REACT_APP_AIRTABLE_BASE;
// const KEY = process.env.REACT_APP_AIRTABLE_KEY;
// const URL = `https://api.airtable.com/v0/${BASE}/todo`

// const config = {
//   headers: {
//     Authorization: `Bearer ${KEY}`,
//   },
// };

export default function Todo(props) {
  const [item, setItem] = useState({});
  const { todo } = props;
  const { id } = useParams()
  useEffect(() => {
    console.log(todo)
    const thisItem = todo.find(item => item?.fields.category === id)
    // console.log(thisItem)
    setItem(thisItem);
}, [id])
  // useEffect(() => {
  //   const fetchTodo = async () => {
  //     const res = await axios.get(`${URL}/${id}`, config)
  //     setTodo(res.data.fields);
  //   };
  //   fetchTodo();

  // }, [])
  // console.log(item)
  return (
    <div>
      <h1>Molya</h1>
      <h1> {item?.fields?.item}</h1>
      <h3>{item?.fields?.category}</h3>
      <br />
      <ItemToDo
        category={item?.fields?.category}
      />

    </div>
  )
}
