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
      {/* **** INPUT AMD ADD TO DO LIST COMPONENT **************  */}
      <AddTodoListComponent />
    </div>
  );
}

export default App;