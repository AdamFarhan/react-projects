import React from 'react';
const UserInput = (props) =>{
    const style = {
        background: '#0f0e11',
        backgroundClip: 'padding-box',
        border: '1px solid #333',
        borderRadius: '3px',
        color: '#faf9fa',
        width: 'calc(100% - 20px)',
        padding: '10px',
        fontSize: '14px',
        marginTop: '10px',
    }
    return(
        <div className="UserInput">
            <input type="text" style={style} onChange={props.changeHandler} value={props.startValue}/>
        </div>
    )
}

export default UserInput