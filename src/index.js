import React from 'react';
import ReactDOM from 'react-dom';
// React-redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
// Components
import App from './routes/App';
// InitialState
import initialState from './initialState.json';

// Redux developer tools
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
