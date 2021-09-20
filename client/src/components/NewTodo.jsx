import { useState, useEffect } from "react";
import Form from "./Form";
export default function NewTodo() {

  const [item, setItem] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = async () => {
    
  }
  return (
    <div>
     <h3>Create your new plan</h3> 
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
