import { useState } from "react"  // Importing useState from React to manage state in the component

export default function TodoInput(props) {
    // Destructuring the handleAddTodos function from the props passed to this component
    const {handleAddTodos} = props
    // Declaring state to store the current value of the todo input
    const [todoValue, setTodoValue] = useState('')

    return (
        <header>
            {/* Input field to enter the todo item, with value controlled by state */}
            <input 
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)} placeholder="Enter todo..."
            />
            {/* Button to add the todo item, calls handleAddTodos with the current value and then clears the input */}
            <button 
                onClick={() => {
                    handleAddTodos(todoValue)  // Add the current todo to the list
                    setTodoValue('')  // Clear the input field
                }}
            >
                Add
            </button>
        </header>
    
    )
}