import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter'
import Counter2 from './Counter/Counter2'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Counter />
          <Counter2 name="Custom Counter 1" maxValue={15} minStyle="warning" maxStyle="info"/>
          <Counter2 name="Custom Counter 2" maxValue={25} minStyle="danger" maxStyle="warning"/>
      </div>
    );
  }
}

export default App;
