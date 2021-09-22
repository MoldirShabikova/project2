
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemForm from './ItemForm';
import Delete from './Delete';

export default function Todo(props) {
  const [categoryList, setCategoryList] = useState([]);
  const { todo } = props;
  const { id } = useParams()
  useEffect(() => {
    console.log("1 item",todo)
    const filteredItem = todo.filter(item => item?.fields.category === id)
    console.log(filteredItem)
    setCategoryList(filteredItem);
}, [id,todo])
console.log(todo)
  return (
    
    <div className="NewListItem">
      <ItemForm setToggle = {props.setToggle}    
      />
      {categoryList.map((item) =>{
        return(
      <div>
        <h1>{item.fields.item}</h1>
            <Delete id={item.id} />
            </div>
        
      )
      })} 
    </div>
  )}

