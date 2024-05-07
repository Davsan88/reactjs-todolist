import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let todos = [
    'Go to the gym',
    'Take the dogs to the park',
    'Learn how to built amazing apps'
  ]

  return (s
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
