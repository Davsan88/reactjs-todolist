import React from 'react'               // Importing React library
import TodoCard from './TodoCard'       // Importing the TodoCard component

export default function TodoList(props) {
  // Destructuring the 'todos' array from the props passed to this component
  const {todos} = props


  return (
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
