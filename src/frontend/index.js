import React from 'react';
import ReactDOM from 'react-dom';
// React-router
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { config } from '@fortawesome/fontawesome-svg-core';
// React-redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
// Components
import App from './routes/App';

// Font-awesome autoAdd CSS inject disable
config.autoAddCss = false;

// Redux developer tools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Preloaded state from server side render
const preloadedState = window.__PRELOADED_STATE__;
// Delete this preloaded state for any data leak
delete window.__PRELOADED_STATE__;

const history = createBrowserHistory();
const store = createStore(reducer, preloadedState, composeEnhancers());

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
