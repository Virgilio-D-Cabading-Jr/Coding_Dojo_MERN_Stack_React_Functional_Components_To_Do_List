import React from 'react'

/////////////////////////////////////////////////////////
//  STRIKED COMPONENT
/////////////////////////////////////////////////////////

const StrikedComponent = (props) => {
    if (props.todoItem.complete) {
        return <s>{ props.todoItem.task }</s>
    } else {
        return <span>{ props.todoItem.task }</span>
    }
}

export default StrikedComponent