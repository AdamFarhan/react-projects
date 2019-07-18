import * as actionTypes from './actionTypes';
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const addCounter = (val) => {
    return {
        type: actionTypes.ADD_COUNTER,
        value: val
    }
}
export const subtractCounter = (val) => {
    return {
        type: actionTypes.SUBTRACT_COUNTER,
        value: val
    }
}
