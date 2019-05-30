import React from 'react';
import classes from './Person.css';
const person = (props) => {
    return(
        <div className={classes.Person}>
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age} years old
            </p>
            {/* children is a keyword that grabs anything in between the tags
            <Parent>This is where props.children is</Parent>*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;