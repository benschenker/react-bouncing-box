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
    const direction = state.getIn(['direction']);
    const newPosition = oldPosition + speed * direction;
    let newDirection = direction;
    if (newPosition <= 0 || newPosition >= 600) {
      newDirection *= -1;
    }
    const newState = {
      position: newPosition,
      direction: newDirection,
    }
    return setState(state, newState);
  default:
  }
  return state;
}