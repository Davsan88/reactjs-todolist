import { useState } from "react"  // Importing useState from React to manage state in the component
import TodoInput from "./components/TodoInput"  // Importing the TodoInput componen
import TodoList from "./components/TodoList"  // Importing the TodoList component

function App() {
  // Declaring a state variable 'todos' to store the list of todos and a setter function 'setTodos' to update it
  const [todos, setTodos] = useState([]) 

  // Function to handle adding a new todo item
  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]  // Creating a new list of todos by combining the existing todos with the new todo item
    setTodos(newTodoList)  // Updating the state with the new list of todos
  }

  // Returning the JSX that renders the TodoInput and TodoList components
  return (
    <>
      {/* Passing the handleAddTodos function to the TodoInput component as a prop */}
      <TodoInput handleAddTodos={handleAddTodos}/>

      {/* Passing the todos state to the TodoList component as a prop */}
      <TodoList todos={todos} />
    </>
  )
}

export default App   // Exporting the App component as the default export
