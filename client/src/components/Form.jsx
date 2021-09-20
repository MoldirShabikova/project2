

export default function Form(props) {
  return (
    <form onSubmit={handleSubmit}>
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
      <Button>{ props.type} New List</Button>
   </form>
  )
}
