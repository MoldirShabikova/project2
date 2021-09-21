
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemToDo from './ItemForm';

export default function Todo(props) {
  const [item, setItem] = useState({});
  const { todo } = props;
  const { id } = useParams()
  useEffect(() => {
    console.log(todo)
    const thisItem = todo.find(item => item?.fields.category === id)
    // console.log(thisItem)
    setItem(thisItem);
}, [id])

  return (
    <div>
      <h1>Molya</h1>
      <h1> {item?.fields?.item}</h1>
      <h3>{item?.fields?.category}</h3>
      <br />
      <ItemToDo
        category={item?.fields?.category}
      />

  
    </div>
  )
}
// const category = todo.map((i) => i?.fields.category === id);{
//   return (
//     <div>(i)
//     <h1>{i.fields.item}</h1>
       
//   </div>
// )}