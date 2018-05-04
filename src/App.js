import React, { Component } from 'react';
import Header from './Header.js';
import Overview from './Overview.js';
import TargetUsers from './TargetUsers.js';
import Solution from './Solution.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Overview />
        <TargetUsers />
        <Solution />
      </div>
    );
  }
}

export default App;
