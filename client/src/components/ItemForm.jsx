import { useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom"
import Delete from "./Delete";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify"
import house from '../images/house.png'



const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function ItemForm(props) {
  const [deleted, setDeleted] = useState(false);
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
    toast("Created New List")
    props.setToggle(toggle=>!toggle)
  }
  
  

  return (
    <div>
      <form className="List"onSubmit={handleSubmit}>
        <h1>What's the plan for Today?</h1>
      <input className="input"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}/>
        <button> Add New</button>
        <br />  
      </form>
      {props.categoryList.map((item) =>{
        return(
      <div className="New-list">
            <h3 >{item.fields.item}
              <div className="delete-btn">
              <Delete id={item.id} 
            setDeleted = {setDeleted}/>
            </div>
            </h3>
            </div>
        
      )
      })}
   <Link to="/"> <button ><i class="fas fa-home"></i></button></Link>
    </div>
  )
}
