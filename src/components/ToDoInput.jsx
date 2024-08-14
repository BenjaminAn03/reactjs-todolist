export default function ToDoInput (props) {
  const {handleAddTodoItems, newToDoValue, setnewToDoValue} = props
  

  return (
    <header>
      <input value = {newToDoValue} onChange = {(e)=>{setnewToDoValue(e.target.value)}} placeholder="Enter todo..." />
      <button onClick={()=>{
        handleAddTodoItems(newToDoValue)
        setnewToDoValue('')
      }}>Add</button>
    </header>
  )
}