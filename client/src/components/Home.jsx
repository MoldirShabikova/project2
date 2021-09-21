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
export default function Home(props) {
  const { todo } = props;


  const checkCategory = (item)=>{
    if (item === 'exercise') {
      return (
        <img src="https://img.icons8.com/ios/100/000000/exercise.png"/>
      )
    }
    if (item === 'work') {
      return (
        <img src="https://img.icons8.com/glyph-neue/64/000000/computer.png"/>
    )
    }
    if (item === 'general') {
      return (
        <img src="https://img.icons8.com/ios-filled/100/000000/todo-list.png"/>
    )
   }
    if (item === 'health') {
      return (
        <img src="https://img.icons8.com/ios/150/000000/apple-health.png"/>
    )
    }
  }

  return (
    <div>
      <div>
        {todo.map(todo => {
          return <Link to={`/todo/${todo.fields.category}`} key={todo.id}>
            {/* <h3>{todo.fields.item}</h3> */}
            {checkCategory(todo.fields.category)}
            {/* <h5>{todo.fields.category}</h5> */}
          </Link>
        } )}
      </div>
    </div>
  )
}
