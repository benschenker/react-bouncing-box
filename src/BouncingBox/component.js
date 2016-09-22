import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import './component.css';

export class BouncingBox extends Component {
  render() {
    return <div className="bouncing-box" style={{left: this.props.position}}
    onClick={this.props.click}>
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

export const BouncingBoxContainer = connect(mapStateToProps, actionCreators)(BouncingBox);