# React: Dinamic Applications:

Transitioning from building static websites with HTML and CSS to developing dynamic applications with React can be a big shift due to the way React structures its components and manages data. Let's break down how React works in a simplified way, which should help to understand the file structure and component system better.

## Core Concepts of React
### 1. Components:
* React applications are built using components. These components are reusable and independent pieces of code that represent a part of the user interface (UI). Each component can have its own layout (HTML), styling (CSS), and behavior (JavaScript).

* Components can be as small as a button or as large as an entire page. Typically, you write components in files such as `TodoCard.jsx`, `TodoInput.jsx`, and `TodoList.jsx`.

### 2. JSX:
* JSX is a syntax extension for JavaScript that looks similar to HTML. It's used in React to describe what the UI should look like. Each React component will typically return JSX code that defines a portion of the UI.

* JSX allows you to write HTML-like code in your JavaScript, making it easier to create and manage complex UIs.

### 3. Props and State:
* **Props** (short for properties) are a way of passing data from parent to child components. It’s how components communicate with each other.

* **State** is a way to manage changes in data within a component. When the state of a component changes, the component re-renders to reflect those changes.

## Understanding the File Structure

- **index.html**: This is the main HTML file of a React app. It includes a div element with an id of `root`, which serves as the attachment point for the React app.
- **main.jsx/index.js**: Serves as the entry point for React applications. It's where the React app begins execution by rendering the App component into the DOM.
- **App.jsx**: Often acts as the central component that orchestrates the assembly of the entire application by including other components like TodoList, TodoInput, etc.

## Detailed Explanation of main.jsx

### Purpose of main.jsx

`main.jsx` is critical as it initializes and renders the React application to the DOM:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Key Functions

- **Imports**: Necessary libraries and the root component (`App.jsx`) are imported.
- **ReactDOM.render()**: This function takes the App component and mounts it to the div with id='root' found in index.html.
- **React.StrictMode**: A tool for highlighting potential problems in an application. It does not render any visible UI but activates additional checks and warnings for its descendants.

## How Components Interact

### App Component

Serves as the composition root, orchestrating other components and their interactions.

```jsx
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
```

### Todo Components

Manage different aspects of the Todo application, such as input and list display.
