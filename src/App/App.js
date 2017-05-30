import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Contacts from './Contacts/Contacts'
import Counter from './Counter/Counter'
import Counter2 from './Counter/Counter2'
import Lifecycle from './Lifecycle/Lifecycle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Contacts />
          <Counter />
          <Counter2 />
      </div>
    );
  }
}

export default App;
