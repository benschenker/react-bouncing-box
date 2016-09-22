import React, { Component } from 'react';
import {connect} from 'react-redux';
import './component.css';

export class BouncingBox extends Component {
  render() {
    return <div className="bouncing-box" style={{left: this.props.position}}>
    {this.props.points}
    </div>;
  }
}
 
function mapStateToProps(state) {
  return {
    position: state.getIn(['position']),
    points: state.get('points')
  };
}

export const BouncingBoxContainer = connect(mapStateToProps)(BouncingBox);