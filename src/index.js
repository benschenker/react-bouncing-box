import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {setState, tick} from './action_creators';
import App from './App';
import './index.css';

const store = createStore(reducer);
const initialState = {
    position: 0,
    points: 0,
    speed: 5,
    direction: 1,
  };
store.dispatch(setState(initialState));

setInterval(() => {
  store.dispatch(tick())
},100);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
