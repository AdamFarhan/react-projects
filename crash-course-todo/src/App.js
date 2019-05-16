import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        isCompleted: false
      },
      {
        id: uuid.v4(),
        title: 'Cook dinner',
        isCompleted: true
      },
      {
        id: uuid.v4(),
        title: 'Go to meeting',
        isCompleted: false
      },
    ]
  }
  //Toggle Completness of todo item
  onMarkComplete = (id) => {
    console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })})
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
      const newTodo = {
        id: uuid.v4(),
        title: title,
        isCompleted: false
      }
      this.setState({
        todos: [...this.state.todos, newTodo]
      })
  }

  render(){
    return (
      //since this is JSX not HTML we have to say "className" instead of "class" for html
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          {/* our tasks are passed to the Todos component
              via states and props. The tasks are created as a state
              in our App component, and in the Tasks component
              we retrieve them via the props */}
          <Todos todos={ this.state.todos }
                  markComplete={this.onMarkComplete}
                  delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}


export default App;
