import React from 'react'

function Details(props) {
    console.log(props.showdetails);
    console.log(props.updateDisplay);
    return (
        <div>
            {(()=>{
            if (props.updateDisplay === false){
                return <div className="details">
                    <li>{props.showdetails.title}</li>
                    <li>{props.showdetails.body}</li>
                    <li>{props.showdetails.time}</li>
                    <div className="details__edit">
                        <button>Add</button>
                        <button onClick={props.onRemove}>Delete</button>
                    </div>
                </div>
            } else {
                return <div className="details__edit">
                    <button>Add</button>
                    <button onClick={props.onRemove}>Delete</button>
                </div>
            }
        })}
        </div>
    )
}

export default Details