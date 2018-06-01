import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <header className="header">
          {/*<img src={logo} className="image" alt="logo" />*/}
          <h1 className="small">Welcome to React</h1>
        </header>
        <p className="text">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/*<div className='ui container'>*/}
            {/*<button className='ui button primary'>Primary</button>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
