import './App.css';
import React, { useState } from 'react';

import AddTodoListComponent from './components/AddTodoListComponent';
import ShowTodoListComponent from './components/ShowTodoListComponent';

////////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////////////////////

const App = () => {
  // //// FIELDS ///////////////////////////////////////////////////

  const [todoList, setTodoList] = useState([
    {
      task: "Program To Do List",
      complete: false
    },
    {
      task: "Chores",
      complete: false
    },
    {
      task: "Go to the Park",
      complete: false
    }
  ])
  // //// OUTPUT ///////////////////////////////////////////////////
  return (
    <div className="App">
      <h1>App.js Content</h1>
      {/* **** INPUT and ADD TO DO LIST COMPONENT **************  */}
      <AddTodoListComponent />
      {/* **** SHOW TO DO LIST COMPONENT ************************ */}
      <ShowTodoListComponent todoList={ todoList } />
    </div >
  );
}

export default App;