import { useState } from "react";
import axios from 'axios'  
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function ItemToDo(props) {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCategory(props.category)
    const fields = {
      item,
      category,
    }
    const res = await axios.post(URL, { fields }, config);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
