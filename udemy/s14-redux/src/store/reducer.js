const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch( action.type ) {
        case 'INCREMENT':
            return {
                ...state, 
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state, 
                counter: state.counter - 1
            }
        case 'ADD_COUNTER':
            return {
                ...state, 
                counter: state.counter + action.value
            }
        case 'SUBTRACT_COUNTER':
            return {
                ...state, 
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.id);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;