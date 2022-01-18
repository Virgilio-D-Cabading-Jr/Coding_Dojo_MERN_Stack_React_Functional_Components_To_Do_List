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
      complete: true
    },
    {
      task: "Go to the Park",
      complete: false
    }
  ])

  // //// CREATE ///////////////////////////////////////////////////

  /**
   * Add Task
   * Adds an new Task Objedt to the todoList
   * @param {String} newTask 
   */
  const addTask = (newTask) => {
    let newTodoList = [...todoList];
    newTodoList.push({
        task: newTask,
        complete: false
      }
    );
    setTodoList(newTodoList);
  }

  // //// UPDATE ///////////////////////////////////////////////////

  /**
   * Handle Complete Check Box Changed
   * Updates the targeted Task's Complete key in the todoList
   * @param {int} targetIdx 
   * @param {boolean} targetComplete 
   */
  const handleCompleteChecked = (targetIdx, targetComplete) => {
    const newTodoList = [...todoList];
    newTodoList[targetIdx].complete = targetComplete;
    setTodoList(newTodoList);
  }

  // //// DELETE ///////////////////////////////////////////////////

  /**
   * Delete Task
   * Given a task specified by a target index, delete the task from the todoList
   * @param {number} targetIdx 
   */
  const deleteTask = (targetIdx) => {
    const filteredTodoList = todoList.filter ( (taskItem, idx) => idx !== targetIdx );
    setTodoList(filteredTodoList);
  }

  // //// OUTPUT ///////////////////////////////////////////////////
  return (
    <div className="App">
      {/* **** INPUT and ADD TO DO LIST COMPONENT **************  */}
      <AddTodoListComponent addTask={ addTask } />
      {/* **** SHOW TO DO LIST COMPONENT ************************ */}
      <ShowTodoListComponent  todoList={ todoList } 
                              handleCompleteChecked={ handleCompleteChecked }
                              deleteTask={ deleteTask } />
    </div >
  );
}

export default App;
