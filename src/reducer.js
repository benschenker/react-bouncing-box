import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'TICK':
    const oldPosition = state.getIn(['position']);
    const speed = state.getIn(['speed']);
    return setState(state, {position: oldPosition + speed});
  default:
  }
  return state;
}