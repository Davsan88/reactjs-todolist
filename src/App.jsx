import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  let todos = [
    'Go to the gym',
    'Take the dogs to the park',
    'Learn how to built amazing apps'
  ]

  return (
    <>
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}

export default App
