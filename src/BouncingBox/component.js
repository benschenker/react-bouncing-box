import React, { Component } from 'react';
import './component.css';

class BouncingBox extends Component {
  render() {
    return <div className="bouncing-box" style={{left: this.props.position}}>
    {this.props.points}
    </div>;
  }
}
 
export default BouncingBox; // Don’t forget to use export default!
