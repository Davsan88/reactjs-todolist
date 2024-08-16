import { useState } from "react" // Importing useState from React to manage state in the component
import TodoInput from "./components/TodoInput" // Importing the TodoInput componen
import TodoList from "./components/TodoList" // Importing the TodoList component

function App() {
  // Declaring a state variable 'todos' to store the list of todos and a setter function 'setTodos' to update it
  const [todos, setTodos] = useState([]) 

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} />
    </>
  )
}

export default App
