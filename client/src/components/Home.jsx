import React from 'react'
import axios from 'axios'
import {useEffect , useState} from 'react'
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = "https://api.airtable.com/v0/appdtddwvXlZlECIz/todo"
export default function Home() {
  return (
    <div>
      This is Home
    </div>
  )
}
