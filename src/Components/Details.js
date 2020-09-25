import React from 'react'

function Details(props) {
    console.log(props.showdetails);
    console.log(props.updateDisplay);
    return (
        (props.updateDisplay === false) ? 
            (<div className="details">
                <li>{props.showdetails.title}</li>
                <li>{props.showdetails.body}</li>
                <li>{props.showdetails.time}</li>
                <div className="details__edit">
                    <button onClick={props.onEdit}>Edit</button>
                    <button onClick={props.onAdd}>Add</button>
                    <button onClick={props.onRemove}>Delete</button>
                </div>
            </div>):         
            (<div className="details__edit">
                <button onClick={props.onEdit}>Edit</button>
                <button onClick={props.onAdd}>Add</button>
                <button onClick={props.onRemove}>Delete</button>
            </div>) 
    )
}

export default Details