import { useState } from "react";
import axios from 'axios'
import {useParams} from "react-router-dom"
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function ItemForm(props) {
  const [item, setItem] = useState("");
  const params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(params.id)

    const fields = {
      item,
      category: params.id,
    }
    console.log(fields)
    const res = await axios.post(URL, { fields }, config);
    props.setToggle(toggle=>!toggle)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>What's the plan for Today?</h1>
      <label> Item</label>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        />
    <br />
      <button> Add a new list</button>
   </form>

 
    </div>
  )
}
