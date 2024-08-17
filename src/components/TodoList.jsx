import React from 'react'               // Importing React library
import TodoCard from './TodoCard'       // Importing the TodoCard component

export default function TodoList(props) {
  // Destructuring the 'todos' array from the props passed to this component
  const {todos} = props

  // Returning the JSX to render the list of todos
  return (
    <ul className='main'>
      {/* Mapping over the todos array and rendering a TodoCard for each todo */}
      {todos.map((todo, todoIndex) => {
        return (
          // Each TodoCard component represents a single todo item
          <TodoCard key={todoIndex}>
            {/* Displaying the todo text inside a <p> element */}
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
