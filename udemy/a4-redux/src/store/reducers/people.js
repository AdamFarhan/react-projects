import * as actionTypes from '../actions';
const initialState = {
    people: []
}
const peopleReducer = (state=initialState, action) => {
    switch ( action.type ){
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            }
            return { 
                ...state,
                people: state.people.concat(newPerson)
            };
        case actionTypes.DELETE_PERSON:
            return { people: state.people.filter(person => person.id !== action.id)}
        default:
            return state;
    }
}

export default peopleReducer;