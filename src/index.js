import React from 'react';
import ReactDOM from 'react-dom';
// React-redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
// InitialState
import initialState from '../initialState'
// Components 
import App from './routes/App';

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
