import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios";
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function EditItem(props) {
  const { todo } = props;
  const [item, setItem] = useState("");
  const { id } = useParams();
  
  useEffect(() => {
    console.log(todo)
    const thisItem = todo.find(item =>  item.id === id )
    setItem(thisItem[0].fields.item);
    console.log("item",thisItem)
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
// console.log(params.id)

    const fields = {
      item,
      // category: params.id,
    }
    console.log(fields)
    const res = await axios.post(URL, { fields }, config);
    setItem('')
    // props.setToggle(toggle=>!toggle)
  }
 
  return (
    <div>
        <form className="List"onSubmit={handleSubmit}>
        <h1>What's the plan for Today?</h1>
      <input className="input"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}/>
        <button> Submit</button>
        <br />  
      </form>
    </div>
  )
}
