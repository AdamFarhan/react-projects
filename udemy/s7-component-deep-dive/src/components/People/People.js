import React from 'react';
import Person from './Person/Person';

const people = (props) => props.persons.map((person, index) => {
    return <Person
            key={person.id}
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={(e) => props.changed(e, person.id)} />
});

export default people;