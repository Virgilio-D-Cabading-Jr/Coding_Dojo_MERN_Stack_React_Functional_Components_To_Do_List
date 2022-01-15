import React from 'react'
import StrikedComponent from './StrikedComponent';

///////////////////////////////////////////////////////////////
//  SHOW TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

const ShowTodoListComponent = (props) => {
    // //// FIELDS ////////////////////////////////////////////
    let randomItem = false;

    // //// OUTPUT ////////////////////////////////////////////
    return (
        <div className="bg-white p-2 rounded">
            <h2>To Do List:</h2>
            <p>{JSON.stringify(props.todoList)}</p>
            {/* //// TABLE OF TO LIST OUT THE TO DO LIST ///////////// */}
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Task</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Action</th>
                    </tr>
                    {
                        // **** Iterate through each item on the TodoList ********
                        props.todoList.map(
                            (todoItem, idx) => {
                                // **** Each Item on the To Do List is a Row on the Table ********
                                return <tr key={idx}>
                                        <th scope="row">{ idx+1 }</th>
                                        <td><StrikedComponent todoItem={ todoItem }/></td>
                                        {/* Check Box that changes is a Task if Complete or not */}
                                        <td>
                                            <input type="checkbox"
                                                checked={ todoItem.complete }
                                                value={ todoItem.complete }
                                                onChange={ e => props.handleCompleteChecked(idx, e.target.checked) }
                                            />
                                        </td>
                                        {/* **** Delete Button to Delete Task ******** */}
                                        <td>
                                            <button className="btn btn-sm btn-danger rounded"
                                                onClick={ (e) => props.deleteTask( idx ) } >
                                                <strong>Delete</strong>
                                            </button>
                                        </td>
                                    </tr>
                            }
                        )
                    }
                </thead>
            </table>
        </div>
    )
}

export default ShowTodoListComponent