import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'person_0', name: 'Max', age: 28 },
      { id: 'person_1', name: 'Manu', age: 29 },
      { id: 'person_2', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPeople: false
  };

  deletePersonHandler = (personIndex) => {
    //these are both ways to copy our persons array
    //const people = this.state.persons.slice();
    const people = [...this.state.persons];
    people.splice(personIndex, 1);
    this.setState({persons: people});
  }; //end of deletePersonHandler()

  nameChangedHandler = (e, id) => {
    // find goes through each element in an array (like map)
    // returns true or false depending on your statement
    // function then stores the index that returned true
    // (index because this is findIndex)
    const changeIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(changeIndex);

    // use a spread function to create a copy person
    const person = {
      ...this.state.persons[changeIndex]
    };
    console.log(person);

    // update the name value with the value from the input
    person.name = e.target.value;

    // now we update the persons array by creating a spread
    // we replace the change target with our new temp person
    const people = [...this.state.persons];
    people[changeIndex] = person;
    console.log(people);

    //set state back to our modified array
    this.setState({
      persons: people
    });
  }

  togglePeopleHandler = (e) => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let people = null;

    if(this.state.showPeople){
      people = (
        <div>
        {/* We're using JS so we don't need any funky ngFor stuff
            We can create repeated content with the JS map function
            (map is kinda like an $.each statement from jquery) */}
        {this.state.persons.map((person, index) => {
          // the Key prop is super important
          // it allows React to quickly find the element without
          // having to rerender the whole DOM
          // whenever you dynamically create a component, add a key
          return <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(e) => this.nameChangedHandler(e, person.id)}/>
        })}
        </div>
      );

      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.togglePeopleHandler()}>Toggle People</button>
        {people}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
