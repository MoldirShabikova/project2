import { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Delete from "./Delete";
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`;

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function ItemForm(props) {
  const [setDeleted] = useState(false);
  const [item, setItem] = useState("");
  const params = useParams();
  const { category } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      item,
      category: params.category,
    };
    await axios.post(URL, { fields }, config);
    setItem("");
    props.setToggle((toggle) => !toggle);
  };

  return (
    <div>
      <form className="List" onSubmit={handleSubmit}>
        <h1 className="h1">What's the plan for Today?</h1>
        <input
          className="input"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button> Add New</button>
        <br />
      </form>

      {props.categoryList.map((item, index) => {
        return (
          <div className="New-list" key={index}>
            <p>{item.fields.item}</p>
            <div className="buttons">
              <Link to={`/todo/${category}/edit/${item.id}`} key={""}>
                <button className="edit-btn">
                  <i className="far fa-edit"></i>
                </button>
              </Link>
              <div className="delete-btn" key={" "}>
                <Delete id={item.id} setDeleted={setDeleted} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
