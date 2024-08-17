import React from 'react'  // Importing the React library

export default function TodoCard(props) {
  // Destructuring the 'children' prop from the props passed to this component
  const {children} = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  )
}
