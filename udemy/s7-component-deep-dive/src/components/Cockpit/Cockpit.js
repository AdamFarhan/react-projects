import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    //returns 1 string ("red bold")
    const paraClasses = [];
    let btnClass = '';
    if(props.showPersons ){
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2){
      paraClasses.push(classes.red); //classes = ['red']
    }
    if(props.persons.length <= 1){
      paraClasses.push(classes.bold); //classes = ['bold']
    }
    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={paraClasses.join(' ')}>This is really working!</p>
            <button
            className={btnClass}
            onClick={props.clicked}>Toggle People</button>
        </div>
    );
};

export default cockpit;