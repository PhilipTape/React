import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Whats up! Welcome to The World of React</h2>
        </div>
        <p className="App-intro">
        <h3>Lets start to explore with react!</h3>
        </p>
      </div>
    );
  }
}

export default App;
