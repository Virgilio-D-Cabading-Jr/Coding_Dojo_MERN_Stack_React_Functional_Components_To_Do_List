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

    const handleInputChange = (e) => {
        console.log("**** In handle Input Change ******");
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(inputText);
        setInputText("");
    }

    return (
        <div className="bg-info mb-3 p-2 rounded">
            <h2>Add an Item on the To Do List:</h2>
            <form className="row p-3" onSubmit={ e => handleSubmit(e) }>
                <input  className="col-7 rounded-left border-0" type="text"
                        onChange={ handleInputChange } 
                        value={ inputText } />
                <button className='col-3 bg-primary rounded-right btn'>Add Item</button>
            </form>
            <p>{inputText}</p>
        </div>
    )
}

export default AddTodoListComponent
