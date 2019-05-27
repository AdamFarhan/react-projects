import React, { Component } from 'react';
import Input from './Input/Input';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    inputString: ''
  }

  inputChangeHandler = (e) => {
    let tempStateString = this.state.inputString;
    tempStateString = e.target.value;
    this.setState({inputString: tempStateString});
  }

  deleteCharHandler = (i) => {
    let stringArray = this.state.inputString.slice().split('');
    stringArray.splice(i, 1);
    const finalString = stringArray.join('');
    this.setState({inputString: finalString});
  }

  render() {

    let stringArray = this.state.inputString.slice().split('');

    let chars = (
      <div>
        {stringArray.map((letter, index) => {
          return <Char letter={letter} click={() => this.deleteCharHandler(index)} key={index}/>
        })}
      </div>
    );

    return (
      <div className="App">
        <div className="container">
          <ol>
            <li className="completed">Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li className="completed">Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li className="completed">Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li className="completed">Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li className="completed">Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li className="completed">When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
          <hr/>
          <Input change={(e) => this.inputChangeHandler(e)} val={this.state.inputString}/>
          <p>Input length: {this.state.inputString.length}</p>
          <Validation inputString={this.state.inputString}/>
          {chars}
        </div>
      </div>
    );
  }
}

export default App;
