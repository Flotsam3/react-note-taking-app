import React from 'react';

function Overview(props) {
    return (
        <div>
            {props.data.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })}
        </div>
    )
}

export default Overview
