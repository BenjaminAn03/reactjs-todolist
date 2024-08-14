import React from 'react'

export default function ToDoCard(props) {
  const { children, handleDeleteTodoItems, index, handleEditTodoItems} = props

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={()=> { handleEditTodoItems(index) }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=>{ handleDeleteTodoItems(index) }}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        
      </div>
    </li>
  )
}
