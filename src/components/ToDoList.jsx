import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) { 
  const { todoItems } = props 
  return (
    <ul className='main'>
      {
        todoItems.map((todo, todoIndex) => {
          return (
            <ToDoCard {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </ToDoCard>
          )
        })
      }
    </ul>
  )
}
