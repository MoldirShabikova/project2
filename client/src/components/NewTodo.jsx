import { useState } from "react";
import Form from "./Form";
import axios from 'axios'  
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function NewTodo() {
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      category,
    }
    const res = await axios.post(URL, { fields }, config);
  }
  return (
    <div>
     <h3>Create your new category</h3> 
      <Form item={item}
        setItem={setItem}
        category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
        type={"create"}
      />
 
    </div>
  )
}
