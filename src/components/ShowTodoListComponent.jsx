import React from 'react'
import StrikedComponent from './StrikedComponent';

///////////////////////////////////////////////////////////////
//  SHOW TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

const ShowTodoListComponent = (props) => {
    let randomItem = false;

    const handleCheckChanged = (targetIdx, targetComplete) => {
        return "";
    }

    return (
        <div className="bg-white p-2 rounded">
            <h2>To Do List:</h2>
            <p>{JSON.stringify(props.todoList)}</p>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Task</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Action</th>
                    </tr>
                    {
                        props.todoList.map(
                            (todoItem, idx) => {
                                return <tr key={idx}>
                                        <th scope="row">{ idx+1 }</th>
                                        <td><StrikedComponent todoItem={ todoItem }/></td>
                                        <td>
                                            {/* Check Box that changes is a Task if Complete or not */}
                                            <input type="checkbox"
                                                checked={ todoItem.complete }
                                                value={ todoItem.complete }
                                                onChange={ e => props.handleCompleteChecked(idx, e.target.checked) }
                                            />
                                        </td>
                                        <td>
                                            <button className="btn btn-sm btn-danger rounded">
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