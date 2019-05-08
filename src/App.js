import React, { Component } from 'react';
import {GameTable} from './components/table.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App sidan</h1>
          <GameTable/>
      </div>
    );
  }
}

export default App;
