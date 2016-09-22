import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}
function tick(state) {
  const position = state.getIn(['position']);
  const speed = state.getIn(['speed']);
  const direction = state.getIn(['direction']);
  const newPosition = position + speed * direction;
  const width = document.getElementById("root").clientWidth;
  let newDirection = direction;
  if (newPosition <= 0 || newPosition >= width - 50) {
    newDirection *= -1;
  }
  const newState = {
    position: newPosition,
    direction: newDirection,
  };
  return setState(state, newState);
}
function click(state) {
  const speed = state.getIn(['speed']);
  const points = state.getIn(['points']);
  const newSpeed = speed + 5;
  const newPoints = points + 1;
  const newState = {
    speed: newSpeed,
    points: newPoints,
  };
  return setState(state, newState);
}
export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'TICK':
    return tick(state);
  case 'CLICK':
    return click(state);
  default:
  }
  return state;
}