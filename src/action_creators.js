export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function tick() {
  return {
    type: 'TICK',
  };
}
export function click() {
  return {
    type: 'CLICK',
  };
}