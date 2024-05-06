import React from 'react'

export default function TodoList() {
  let todos = [
    'Go to the gym',
    'Take the dogs to the park',
    'Learn how to built amazing apps'
  ]

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>

          </TodoCard>
        )
      })}
    </ul>
  )
}
