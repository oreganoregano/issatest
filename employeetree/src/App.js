import React, { Component } from 'react';
import './App.css';
import Button from './components/common/Button';
import TreeContainer from './components/common/TreeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Find my employees</h1>
        </header>
        <TreeContainer />
      </div>
    );
  }
}

export default App;
