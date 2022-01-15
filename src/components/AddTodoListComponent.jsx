import React from 'react';
import { useState } from 'react';

///////////////////////////////////////////////////////////////
//  ADD TO DO LIST COMPONENT
///////////////////////////////////////////////////////////////

/**
 * Add Todo List Component
 * @returns A form where an item can be inputed/add to the Todo List
 */
const AddTodoListComponent= (props) => {
    const [inputText, setInputText] = useState("");

    /**
     * Handle Form Submit
     * Passes a new task to the todoList them resets inputText to empty
     * @param { event object } e 
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(inputText);
        setInputText("");
    }

    // //// OUTPUT ////////////////////////////////////////////
    return (
        <div className="bg-info mb-3 p-2 rounded">
            <form className="row p-3" onSubmit={ e => handleSubmit(e) }>
                <input  className="col-7 rounded-left border-0" type="text"
                        onChange={ e => setInputText(e.target.value) } 
                        value={ inputText } />
                <button className='col-3 bg-primary rounded-right btn'>Add Item</button>
            </form>
        </div>
    )
}

export default AddTodoListComponent
