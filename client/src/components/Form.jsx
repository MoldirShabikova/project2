

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label> Item</label>
      <input
        type="text"
        value={props.item}
        onChange={(e) => props.setItem(e.target.value)}
        />
    <br />
    <label> Category Name </label>
      <input
        type="text"
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)}
        />
    <br />
      <button>{ props.type} New List</button>
   </form>
  )
}
