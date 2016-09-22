import React, { Component } from 'react';
import './App.css';
import {BouncingBoxContainer} from './BouncingBox/component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BouncingBoxContainer/>
      </div>
    );
  }
}

export default App;
