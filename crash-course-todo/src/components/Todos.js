import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component{
    render(){
        //we use .map function to loop through our todos array
        //we then call an es6 arrow function (similar to a for loop)
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}/>
        ));
    }
}

//propTypes are used to define what each prop is
//the todos prop (passed in the parent component) is type array, and is required
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
