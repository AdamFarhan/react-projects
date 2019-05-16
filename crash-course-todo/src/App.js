import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 0,
        title: 'Take out the trash',
        isCompleted: false
      },
      {
        id: 1,
        title: 'Cook dinner',
        isCompleted: true
      },
      {
        id: 2,
        title: 'Go to meeting',
        isCompleted: false
      },
    ]
  }

  render(){
    return (
      //since this is JSX not HTML we have to say "className" instead of "class" for html
      <div className="App">
        {/* our tasks are passed to the Todos component
            via states and props. The tasks are created as a state
            in our App component, and in the Tasks component
            we retrieve them via the props */}
        <Todos todos={ this.state.todos }/>
      </div>
    );
  }
}


export default App;
