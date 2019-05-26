import React from 'react';
import Instructions from './Instructions/Instructions';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

//function App() {
class App extends React.Component{
  state = {
    users: [
      { username: "Adam" },
      { username: "Will" },
      { username: "Ed" },
    ]
  };

  inputChangeHandler = (e) =>{
    let tempState = this.state.users.slice();
    const inputText = e.target.value;
    tempState[0].username = inputText;
    this.setState({tempState});
  }

  render(){
    return (
      <div className="App">
        <div className="container">
          <Instructions />
          <hr/>
          <UserInput
            changeHandler={this.inputChangeHandler}
            startValue={this.state.users[0].username}/>
          <UserOutput name={this.state.users[0].username} />
          <UserOutput name={this.state.users[1].username} />
          <UserOutput name={this.state.users[2].username} />
        </div>
      </div>
    );
  };
}

export default App;
