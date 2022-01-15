import './App.css';
import AddTodoListComponent from './components/AddTodoListComponent';
import ShowTodoListComponent from './components/ShowTodoListComponent';

////////////////////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////////////////////

function App() {
  return (
    <div className="App">
      <h1>App.js Content</h1>
      {/* **** INPUT and ADD TO DO LIST COMPONENT **************  */}
      <AddTodoListComponent />
      {/* **** SHOW TO DO LIST COMPONENT ************************ */}
      <ShowTodoListComponent />
    </div>
  );
}

export default App;