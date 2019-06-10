import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      {/* Brower Router enables routing on any child component
          so anything inside our App, basically */}
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
