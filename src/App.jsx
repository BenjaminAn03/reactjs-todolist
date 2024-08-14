import { useState, useEffect } from 'react'
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"

function App() {
  const [todoItems, settodoItems] = useState([])
  const [newToDoValue, setnewToDoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todoItems', JSON.stringify({ todoItems: newList }))
  }
  function handleAddTodoItems (newTodoItem) {
    const newTodoItems = [...todoItems, newTodoItem]
    persistData(newTodoItems)
    settodoItems(newTodoItems)
  }

  function handleDeleteTodoItems (index) {
    const newTodoItems = todoItems.filter((todoItem, todoItemIndex)=>{
      return todoItemIndex !== index
    })
    persistData(newTodoItems)
    settodoItems(newTodoItems)
  }

  function handleEditTodoItems (index) {
    const editedToDoValue = todoItems[index]
    setnewToDoValue(editedToDoValue)
    handleDeleteTodoItems(index)
  }

  useEffect(()=>{
    if (!localStorage) { return }
    let localTodoItems = localStorage.getItem('todoItems')

    if (!localTodoItems) { return }
    localTodoItems = JSON.parse(localTodoItems).todoItems
    settodoItems(localTodoItems)

  }, [])

  return (
    <>
      <ToDoInput handleAddTodoItems={handleAddTodoItems} newToDoValue={newToDoValue} setnewToDoValue={setnewToDoValue}/>
      <ToDoList todoItems={todoItems} handleDeleteTodoItems={handleDeleteTodoItems} handleEditTodoItems={handleEditTodoItems}/> {/*(prop name) = {variable}*/}
    </>
  )
}

export default App
