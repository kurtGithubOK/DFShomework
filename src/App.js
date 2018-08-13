import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Pomodoro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Donnelley Financial Services - Pomodoro Timer</h1>
          <h1 className="App-title">Kurt Heimerman</h1>
        </header>
        <div className="App-intro">
          <Pomodoro/>
        </div>
      </div>
    );
  }
}

export default App;

