import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    position: 40,
    points: 5,
    speed: 10,
    direction: 1,
  },
});
setInterval(() => {
  store.dispatch({ type: 'TICK' })
},100);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
