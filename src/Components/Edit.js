import React from 'react'

function Edit(props) {

    return (
        (props.addEdit === "edit") ? 
            (<div className="edit">
                <div contentEditable="true">
                    <li id="edit-title">{props.editDetails.title}</li>
                    <li id="edit-body">{props.editDetails.body}</li>
                    <li id="edit-time">{props.editDetails.time}</li>
                    <li id="edit-id">{props.editDetails.id}</li>
                </div>
                <div className="edit__buttons">
                    <button onClick={props.onSaveEdit}>Save</button>
                    <button onClick={props.quitEdit}>Cancel</button>
                </div>
            </div>):
                (<div className="edit">
                <div contentEditable="true">
                    <li id="edit-title">Enter A Title</li>
                    <li id="edit-body">Enter A Description</li>
                    <li id="edit-time">Enter A Time</li>
                    <li id="edit-id">Enter The Id</li>
                </div>
                <div className="edit__buttons">
                    <button onClick={props.onSaveAdd}>Save</button>
                    <button onClick={props.quitEdit}>Cancel</button>
                </div>
            </div>
        )
    )
}

export default Edit
