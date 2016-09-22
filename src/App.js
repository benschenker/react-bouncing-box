import React, { Component } from 'react';
import './App.css';
import BouncingBox from './BouncingBox/component';

const position = 30;
const points = 1;
class App extends Component {
  render() {
    return (
      <div className="App">
        <BouncingBox position={position} points={points}/>
      </div>
    );
  }
}

export default App;
