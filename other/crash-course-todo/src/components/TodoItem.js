import React from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends React.Component{
    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render(){
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/*this onchange function runs the markComplete function in the parent component Todos */ }
                    <input
                        type="checkbox"
                        onChange={this.props.markComplete.bind(this, id)}/>
                    {' '}
                    { title }
                    <button style={btnStyle}
                            onClick={this.props.delTodo.bind(this, id)}>x</button></p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem