import React from 'react'  // Importing the React library

export default function TodoCard(props) {
  // Destructuring the 'children' prop from the props passed to this component
  const {children} = props

  return (
    <li className='todoItem'>
      {/* Rendering the children elements passed to this component */}
      {children}

      {/* Container for action icons (edit and delete) */}
      <div className='actionsContainer'>
        {/* Font Awesome icons for editing and deleting */}
        <i className="fa-solid fa-pen-to-square"></i>  {/* Edit icon */}
        <i className="fa-solid fa-trash"></i>  {/* Delete icon */}
      </div>
    </li>
  )
}
