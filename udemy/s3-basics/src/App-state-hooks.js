import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app = props => {
  const [peopleState, setPeopleState] = useState({
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26},
    ]
  });

  const switchNameHandler = () =>{
      console.log("in switchNameHandler");
      let tempPeople = peopleState.people.slice();
      tempPeople[0].name = "Adam";
      setPeopleState({people: tempPeople});
  }
  return (
    <div className="App">
      <h1>This is my react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age}/>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}> My hobbies are: Racing </Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}/>
    </div>
  );
}

export default app;