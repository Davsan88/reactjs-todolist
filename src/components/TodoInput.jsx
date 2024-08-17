import { useState } from "react"  // Importing useState from React to manage state in the component

export default function TodoInput(props) {
    // Destructuring the handleAddTodos function from the props passed to this component
    const {handleAddTodos} = props
    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        
        </header>
    
    )
}