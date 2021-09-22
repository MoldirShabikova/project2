import axios from "axios";
import { useState } from "react";
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};



export default function Delete(props) {
  const [toggle,setToggle] = useState(false)
  const handleDelete = async () => {
    await DeleteButton(props.id)

  }
    
  const DeleteButton = async (id ) =>{
    const res = await axios.delete(`${URL}/${id}`, config)
    props.setToggle(toggle=>!toggle)
    return(
      res.data.records
    )
  }
  return (
    <div>
      <button onClick={handleDelete} >Delete</button>
    </div>
  )
}
