import React from 'react'

///////////////////////////////////////////////////////////////
//  ADD TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

const AddTodoListComponent= () => {
    return (
        <div className="bg-info mb-3 p-2 rounded">
            <h2>Add An Item on the To Do List:</h2>
            <form className="row p-3">
                <input className="col-7 rounded-left border-0" type="text"></input>
                <button className='col-3 bg-primary rounded-right btn'>Add Item</button>
            </form>
        </div>
    )
}

export default AddTodoListComponent
