import React from 'react';

export class AddTodo extends React.Component{
    state = {
        title: ''
    }
    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    render() {
        return(
            <form style={{ display: 'flex'}}
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title"
                    style={{flex: '10', padding: '5px'}}
                    placehoder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onInputChange}/>

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}} />

            </form>
        )
    }
}

export default AddTodo