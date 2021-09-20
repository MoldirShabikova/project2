import React from 'react'
import axios from 'axios'
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
  axios.get(URL, config);
  return <div>List</div>

  
  // const [todo, setTodo] = useState([])
  // const [loading, setLoading] = useState(true)
  //     useEffect(()=> {
  //       const fetchTodo = async () => {
         
  //         const res = await axios.get(URL, config)
  //         setTodo(res);
  //       }
  //       fetchTodo();
  //     }, [])
  // // if (loading) return <div></div>
    
  // // return (
  // //   <div>
  // //     Home
  // //     {todo.map((item) => {
  // //       return (
  // //         <div>
  // //           {item.fields.item}
  // //         </div>
  // //       )
  // //     })}
  // //   </div>
    
  // // )
}
