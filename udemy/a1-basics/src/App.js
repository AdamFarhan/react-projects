import React from 'react';
import Instructions from './Instructions/Instructions';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Instructions />
        <hr/>
        <UserInput />
        <UserOutput />
        <UserOutput />
        <UserOutput />
      </div>
    </div>
  );
}

export default App;
