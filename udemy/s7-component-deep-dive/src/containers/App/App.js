import React, { Component } from 'react';
import classes from './App.css';
import People from '../../components/People/People';
import Cockpit from '../../components/Cockpit/Cockpit';
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
    //console.log(changeIndex);

    // use a spread function to create a copy person
    const person = {
      ...this.state.persons[changeIndex]
    };
    //console.log(person);

    // update the name value with the value from the input
    person.name = e.target.value;

    // now we update the persons array by creating a spread
    // we replace the change target with our new temp person
    const people = [...this.state.persons];
    people[changeIndex] = person;
    //console.log(people);

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
    let people = null;
    if(this.state.showPeople){
      people = (
        <People
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPeople}
          persons={this.state.persons}
          clicked={this.togglePeopleHandler} />
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
