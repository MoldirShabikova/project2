import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router";
const BASE = process.env.REACT_APP_AIRTABLE_BASE;
const KEY = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${BASE}/todo`;

const config = {
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
};
export default function EditItem(props) {
  const [item, setItem] = useState("");
  const { id, category } = useParams();

  const history = useHistory();
  useEffect(() => {
    console.log("thisIsUseEffect");
    const fetchItem = async () => {
      const res = await axios.get(`${URL}/${id}`, config);
      console.log("thisIsData", res.data);
      setItem(res.data.fields.item);
    };
    fetchItem();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      item,
    };

    await axios.patch(`${URL}/${id}`, { fields }, config);
    setItem("");
    props.setToggle((toggle) => !toggle);
    history.push(`/todo/${category}`);
  };

  return (
    <div>
      <form className="List" onSubmit={handleSubmit}>
        <h1>What's the plan for Today?</h1>
        <input
          className="input"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button> Save</button>
        <br />
      </form>
    </div>
  );
}
