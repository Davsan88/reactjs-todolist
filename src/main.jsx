import React from 'react'                   // Importing the React library
import ReactDOM from 'react-dom/client'     // Importing ReactDOM for rendering the React app
import App from './App.jsx'                 // Importing the main App component
import './index.css'                        // Importing the CSS file for styling

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
