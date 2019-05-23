import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>User Output: {props.name}</p>
            <p>User Output: Description</p>
        </div>
    )
}

export default UserOutput