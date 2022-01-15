import React from 'react'

///////////////////////////////////////////////////////////////
//  SHOW TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

const ShowTodoListComponent = () => {
    let randomItem = false;


    return (
        <div className="bg-white p-2 rounded">
            <h2>To Do List:</h2>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col-3">Task</th>
                        <th scope="col">Complete</th>
                        <th scope="col">Action</th>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Item to be done</td>
                        <td>
                            <input  type="checkbox" 
                                    value={randomItem}
                                    />
                        </td>
                        <td>
                            <button className="btn btn-sm btn-danger rounded">
                                <strong>Delete</strong>
                            </button>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default ShowTodoListComponent